"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db/db";
import { IBlog } from "@/types";
import matter from "gray-matter";
import { stringFormatter } from "@/lib/utils";

export async function createBlog(nonMatterData: IBlog) {
  const blogMetadata = matter(`${nonMatterData.article}`);

  const { data } = blogMetadata;

  const indexedTitle = stringFormatter(data.title);

  try {
    await db.blog.create({
      data: {
        indexedTitle: indexedTitle,
        publishedOn: data["publishedOn"],
        author: data["author"],
        category: data["category"],
        keywords: data["keywords"],
        title: data["title"],
        imageUrl: data["imageUrl"],
        article: nonMatterData.article,
      },
    });
    return { message: "Blog created successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error not able to create blog post, please try again.",
      status: 500,
    };
  }
}

export async function updateBlog(blogId: string, blogUpdatedData: IBlog) {
  const blogMetadata = matter(`${blogUpdatedData.article}`);
  const { data } = blogMetadata;
  const indexedTitle = stringFormatter(data.title);

  try {
    await db.blog.update({
      where: {
        indexedTitle: blogId,
      },
      data: {
        indexedTitle: indexedTitle,
        publishedOn: data["publishedOn"],
        author: data["author"],
        category: data["category"],
        keywords: data["keywords"],
        title: data["title"],
        imageUrl: data["imageUrl"],
        article: blogUpdatedData.article,
      },
    });
    return { message: "Blog updated successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error updating the blog, please try again.",
      status: 500,
    };
  }
}

export async function readBlog(blogId: string) {
  try {
    const rawBlogData = await db.blog.findMany({
      where: {
        indexedTitle: blogId,
      },
    });

    const source = rawBlogData[0].article;

    if (source) {
      revalidatePath("/blogs");
      revalidatePath("/dashboard/blogs");
      return {
        rawBlogData,
      };
    }
  } catch (error) {
    return {
      status: 404,
    };
  }
}

export async function readTitle(blogId: string) {
  const blogData = await db.blog.findFirst({
    where: {
      indexedTitle: blogId,
    },
  });
  revalidatePath("/blogs");
  revalidatePath("/dashboard/blogs");
  return blogData?.title;
}

export async function deleteBlog(blogId: string) {
  try {
    await db.blog.delete({
      where: {
        indexedTitle: blogId,
      },
    });
    return { message: "Blog deleted successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error deleting the blog, please try again.",
      status: 500,
    };
  }
}
