// components/Experience.tsx
import { experienceData } from "@/constants/experience";

export default function Experience() {
  return (
    <div className="py-16" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">Experience</h2>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="mb-12 p-6 bg-card rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
              <span className="text-sm text-foreground">{exp.duration}</span>
            </div>
            <h4 className="text-lg font-semibold text-secondary mb-2">
              {exp.company}
            </h4>
            <p className="text-md text-muted mb-4">{exp.location}</p>

            <ul className="list-disc pl-6 space-y-2 text-foreground">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="text-sm">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
