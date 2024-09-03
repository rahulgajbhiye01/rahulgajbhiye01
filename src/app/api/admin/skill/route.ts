import { db } from "@/lib/db/db";
import { NextResponse, NextRequest } from "next/server";
import { SkillValidation } from "@/constants/schema/zod";

export async function GET() {
  try {
    const skill = await db.skill.findMany();

    return NextResponse.json(skill);
  } catch (error: any) {
    if (error && typeof error.meta !== "undefined") {
      return NextResponse.json({
        message: `Error: ${error.meta.cause}`,
        status: 500,
      });
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validatedData = SkillValidation.parse(data);

    await db.skill.create({
      data: {
        name: validatedData.name,
        icon: validatedData.icon,
      },
    });
    return NextResponse.json({
      message: "Skill added successfully",
      status: 200,
    });
  } catch (error: any) {
    if (error && typeof error.meta !== "undefined") {
      return NextResponse.json({
        message: `Error: ${error.meta.cause}`,
        status: 500,
      });
    }
  }
}

export async function DELETE(request: NextRequest) {
  const data = await request.json();

  try {
    await db.skill.delete({
      where: {
        name: data.name,
      },
    });
    return NextResponse.json({
      message: "Skill deleted successfully",
      status: 200,
    });
  } catch (error: any) {
    if (error && typeof error.meta !== "undefined") {
      return NextResponse.json({
        message: `Error: ${error.meta.cause}`,
        status: 500,
      });
    }
  }
}
