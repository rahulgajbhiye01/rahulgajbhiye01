import { db } from "@/lib/db/db";
import { NextResponse } from "next/server";

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
