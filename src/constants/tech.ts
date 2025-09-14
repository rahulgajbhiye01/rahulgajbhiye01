export enum Domain {
  Core = "Core",
  Frontend = "Frontend",
  Backend = "Backend",
  Cloud = "Cloud",
  DevOps = "DevOps",
  AI = "AI",
  Mobile = "Mobile",
  Desktop = "Desktop",
  Game = "Game",
}

export interface Skills {
  skill: string;
  domain: Domain[];
}

export const domainOrder: Domain[] = [
  Domain.Core,
  Domain.Frontend,
  Domain.Backend,
  Domain.Cloud,
  Domain.DevOps,
  Domain.AI,
  Domain.Mobile,
  Domain.Desktop,
  Domain.Game,
];

export const skillsData: Skills[] = [
  //Core
  {
    skill: "JavaScript",
    domain: [Domain.Core],
  },
  {
    skill: "TypeScript",
    domain: [Domain.Core],
  },
  {
    skill: "Python",
    domain: [Domain.Core],
  },
  {
    skill: "Git",
    domain: [Domain.Core],
  },
  {
    skill: "GitHub",
    domain: [Domain.Core],
  },
  {
    skill: "NPM",
    domain: [Domain.Core],
  },
  {
    skill: "Jest",
    domain: [Domain.Core],
  },

  // Frontend
  {
    skill: "HTML",
    domain: [Domain.Frontend],
  },
  {
    skill: "CSS",
    domain: [Domain.Frontend],
  },
  {
    skill: "React",
    domain: [Domain.Frontend],
  },
  {
    skill: "Next.js",
    domain: [Domain.Frontend],
  },

  // Backend
  {
    skill: "REST APIs",
    domain: [Domain.Backend],
  },
  {
    skill: "GraphQL",
    domain: [Domain.Backend],
  },
  {
    skill: "Node.js",
    domain: [Domain.Backend],
  },
  {
    skill: "Express",
    domain: [Domain.Backend],
  },
  {
    skill: "PostgreSQL",
    domain: [Domain.Backend],
  },
  {
    skill: "MongoDB",
    domain: [Domain.Backend],
  },
  {
    skill: "Redis",
    domain: [Domain.Backend],
  },
  {
    skill: "Kafka",
    domain: [Domain.Backend],
  },

  //Cloud
  {
    skill: "AWS",
    domain: [Domain.Cloud],
  },
  {
    skill: "Azure",
    domain: [Domain.Cloud],
  },
  {
    skill: "GCP",
    domain: [Domain.Cloud],
  },

  //DevOps
  {
    skill: "Docker",
    domain: [Domain.DevOps],
  },
  {
    skill: "Kubernetes",
    domain: [Domain.DevOps],
  },
  {
    skill: "Terraform",
    domain: [Domain.DevOps],
  },
  {
    skill: "Prometheus",
    domain: [Domain.DevOps],
  },
  {
    skill: "Grafana",
    domain: [Domain.DevOps],
  },

  //Learning
  {
    skill: "Learning",
    domain: [Domain.AI, Domain.Mobile, Domain.Desktop, Domain.Game],
  },
];
