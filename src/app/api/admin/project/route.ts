import { db } from "@/lib/db/db";
import { NextResponse, NextRequest } from "next/server";
import { ProjectValidation } from "@/constants/schema/zod";
import { ISkill } from "@/constants/types";

export async function GET() {
  try {
    const projectsData = await db.project.findMany({
      include: {
        techStack: true,
      },
    });

    return NextResponse.json(projectsData);
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
    const validatedData = ProjectValidation.parse(data);

    // String of tech to a array
    const techStack = validatedData.techStack
      .toLowerCase()
      .split(",")
      .map((item: string) => item.trim())
      .filter((item: string) => item);

    const skillData = await db.skill.findMany();

    const haveTechStack = skillData.filter((item: ISkill) =>
      techStack.some((tech) => item.name.toLowerCase().includes(tech)),
    );

    const techStackIds = haveTechStack.map(
      (skill: ISkill) => skill.id || "unknown id",
    );

    await db.project.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        link: validatedData.link,
        github: validatedData.github,
        techStackId: techStackIds,
      },
      include: {
        techStack: true, // Include the associated skills in the response
      },
    });

    return NextResponse.json({
      message: "Project added successfully",
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
  try {
    const { title } = await request.json();

    await db.project.delete({
      where: {
        title: title,
      },
    });

    return NextResponse.json({
      message: "Project deleted successfully",
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
