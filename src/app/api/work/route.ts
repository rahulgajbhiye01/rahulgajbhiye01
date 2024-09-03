import { db } from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projectsData = await db.project.findMany();
    const skillsData = await db.skill.findMany();

    return NextResponse.json({
      skillsData: skillsData,
      projectsData: projectsData,
    });
  } catch (error) {
    console.log(error);
  }
}
