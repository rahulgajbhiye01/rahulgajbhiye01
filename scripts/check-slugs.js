#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "_posts");
const POST_EXTENSIONS = [".md", ".mdx"];

function generateSlugFromFilename(filename) {
  const base = filename.replace(/\.(md|mdx)$/, "");
  return base
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

function checkSlugs() {
  const files = fs.readdirSync(postsDirectory);
  const slugs = new Map();
  const conflicts = [];

  console.log("🔍 Checking post slugs...\n");

  for (const filename of files) {
    if (POST_EXTENSIONS.includes(path.extname(filename))) {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // Get the slug (custom or generated)
      const customSlug = data.slug;
      const generatedSlug = generateSlugFromFilename(filename);
      const finalSlug = customSlug || generatedSlug;

      console.log(`📄 ${filename}`);
      console.log(`   Custom slug: ${customSlug || "none"}`);
      console.log(`   Generated slug: ${generatedSlug}`);
      console.log(`   Final slug: ${finalSlug}`);

      // Check for conflicts
      if (slugs.has(finalSlug)) {
        conflicts.push({
          slug: finalSlug,
          files: [slugs.get(finalSlug), filename],
        });
      } else {
        slugs.set(finalSlug, filename);
      }

      console.log("");
    }
  }

  if (conflicts.length > 0) {
    console.log("⚠️  SLUG CONFLICTS FOUND:\n");
    conflicts.forEach((conflict) => {
      console.log(`   Slug "${conflict.slug}" is used by:`);
      conflict.files.forEach((file) => {
        console.log(`   - ${file}`);
      });
      console.log("");
    });
  } else {
    console.log("✅ No slug conflicts found!");
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total posts: ${slugs.size}`);
  console.log(`   Conflicts: ${conflicts.length}`);
}

checkSlugs();
