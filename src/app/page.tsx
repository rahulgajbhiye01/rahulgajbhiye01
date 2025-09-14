"use client";

import { useMemo, useState } from "react";
import Hero from "@/components/hero";

import { experienceData } from "@/constants/experience";
import XpCard from "@/components/xp/card";

import AchievementCard from "@/components/achievements/card";
import { achievementsData } from "@/constants/certs";

import { projectsData } from "@/constants/projects";
import ProjectCard from "@/components/stack-&-builds/project-card";

import { skillsData } from "@/constants/tech";
import SkillCard from "@/components/stack-&-builds/tech-card";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      <div className="mx-auto flex w-11/12 flex-col sm:w-9/12">
        {/* Stack & Builds */}
        <section
          className="text-foreground mx-auto min-h-[100vh] w-full max-w-5xl px-4 py-10 pt-20"
          id="stack-&-builds"
        >
          <div>
            <h1 className="mb-4 text-4xl font-bold text-[#4cc9f0]">
              Stack & Builds
            </h1>

            <p className="text-muted-foreground mb-10">
              A curated snapshot of the technologies I work with daily, paired
              with a collection of projects I’ve built – from full-stack apps to
              developer tools.
            </p>

            <div className="flex flex-col gap-8">
              <SkillCard skillsData={skillsData} />

              <div className="grid gap-6 sm:grid-cols-1">
                {projectsData.map((projectData) => (
                  <ProjectCard
                    key={projectData.link}
                    projectData={projectData}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Xp */}
        <section
          className="text-foreground mx-auto min-h-[100vh] w-full max-w-5xl px-4 py-10 pt-20"
          id="xp"
        >
          <div>
            <h1 className="mb-4 text-4xl font-bold text-[#4cc9f0]">Xp</h1>
            <p className="text-muted-foreground mb-10">
              Hands-on roles, internships, and contributions that shaped my
              journey as a developer – along with milestones, recognitions, and
              highlights.
            </p>
            <div className="mb-8 flex flex-col gap-8">
              {experienceData.map((exp) => (
                <XpCard key={exp.title} experienceData={exp} />
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {achievementsData.map((category) => (
                <AchievementCard
                  key={category.name}
                  achievementData={category}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
