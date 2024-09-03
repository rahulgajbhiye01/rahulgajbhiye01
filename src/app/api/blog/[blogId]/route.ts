import { db } from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  blogId: string;
};

export async function GET(request: NextRequest, context: { params: Params }) {
  const blogId = context.params.blogId;

  try {
    const blog = await db.blog.findMany({
      where: {
        blogId: blogId,
      },
    });

    return NextResponse.json(blog[0]);
  } catch (error) {
    console.log(error);
  }
}
