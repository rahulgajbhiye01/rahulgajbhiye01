import { db } from "@/lib/db/db";
import { NextResponse, NextRequest } from "next/server";
import matter from "gray-matter";
import { stringFormatter } from "@/lib/utils";

export async function GET() {
  try {
    const blog = await db.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: NextRequest) {
  const { blogArticle } = await request.json();

  const blogMetadata = matter(blogArticle);
  const { data } = blogMetadata;
  const blogId = stringFormatter(data.title) || "";

  try {
    await db.blog.create({
      data: {
        blogId: blogId,
        author: data["author"],
        category: data["category"],
        keywords: data["keywords"],
        title: data["title"],
        imageUrl: data["imageUrl"],
        article: blogArticle,
      },
    });

    return NextResponse.json({
      message: "Blog created successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error not able to create blog post, please try again.",
      status: 500,
    });
  }
}

export async function PUT(request: NextRequest) {
  const { blogArticle } = await request.json();

  const blogMetadata = matter(blogArticle);
  const { data } = blogMetadata;
  const blogId = stringFormatter(data.title) || "";

  try {
    await db.blog.update({
      where: {
        blogId: blogId,
      },
      data: {
        author: data["author"],
        category: data["category"],
        keywords: data["keywords"],
        title: data["title"],
        imageUrl: data["imageUrl"],
        article: blogArticle,
      },
    });
    return NextResponse.json({
      message: "Blog updated successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error updating the blog, please try again.",
      status: 500,
    });
  }
}

export async function DELETE(request: NextRequest) {
  const { blogId } = await request.json();

  try {
    await db.blog.delete({
      where: {
        blogId: blogId,
      },
    });
    return NextResponse.json({
      message: "Blog deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error deleting the blog, please try again.",
      status: 500,
    });
  }
}
