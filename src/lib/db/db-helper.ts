"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db/db";

export async function getSkillsData() {
  return await db.skill.findMany();
}

export async function getWorksData() {
  return await db.project.findMany();
}

export async function getSocialsData() {
  return await db.social.findMany();
}

export async function getBlogsData() {
  const data = await db.blog.findMany();
  revalidatePath("/blogs");
  revalidatePath("/dashboard/blogs");
  return data;
}

export async function UserExist(userEmail: string) {
  const user = await db.user.findFirst({
    where: {
      email: userEmail,
    },
  });

  return user;
}
