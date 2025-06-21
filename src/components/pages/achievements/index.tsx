import Link from "next/link";
import { BadgeCheck, Trophy, Medal, Star, ExternalLink } from "lucide-react";
import { achievementsData } from "@/constants/achievements";

const iconMap = {
  badge: <BadgeCheck className="w-6 h-6 text-primary" />,
  trophy: <Trophy className="w-6 h-6 text-primary" />,
  medal: <Medal className="w-6 h-6 text-primary" />,
  star: <Star className="w-6 h-6 text-primary" />,
};

const Achievements = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">🏆 Achievements</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((category, idx) => (
          <div
            key={idx}
            className="border border-muted/30 rounded-2xl p-6 bg-background"
          >
            <div className="flex items-center gap-2 mb-4">
              {iconMap[category.icon]}
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>

            <ul className="space-y-4">
              {category.items.map((item, i) => (
                <li key={i}>
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl p-4 border border-muted/30 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex flex-col gap-1">
                          <h4 className="font-medium text-primary group-hover:underline underline-offset-4">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <ExternalLink className="w-4 h-4 mt-1 text-muted-foreground group-hover:text-primary" />
                      </div>
                    </Link>
                  ) : (
                    <div className="rounded-xl p-4 border border-muted/30 bg-background">
                      <h4 className="font-medium">{item.title}</h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
