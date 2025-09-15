import Link from "next/link";
import { BadgeCheck, Trophy, Medal, Star, ExternalLink } from "lucide-react";
import { Category } from "@/constants/certs";

const iconMap = {
  badge: <BadgeCheck className="text-primary h-6 w-6" />,
  trophy: <Trophy className="text-primary h-6 w-6" />,
  medal: <Medal className="text-primary h-6 w-6" />,
  star: <Star className="text-primary h-6 w-6" />,
};

const AchievementCard = ({
  achievementData,
}: {
  achievementData: Category;
}) => {
  return (
    <div
      key={achievementData.name}
      className="border-muted/30 bg-background rounded-2xl border p-4"
    >
      <div className="mb-4 flex items-center gap-2">
        {iconMap[achievementData.icon]}
        <h3 className="text-lg font-semibold">{achievementData.name}</h3>
      </div>

      <ul className="space-y-4">
        {achievementData.items.map((item, i) => (
          <li key={i}>
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-muted/30 bg-background hover:border-primary/40 block rounded-xl border p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1 p-0.5">
                    <h4 className="text-primary font-medium">{item.title}</h4>
                    {item.description && (
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary mt-1 h-4 w-4" />
                </div>
              </Link>
            ) : (
              <div className="border-muted/30 bg-background rounded-xl border p-4">
                <h4 className="font-medium">{item.title}</h4>
                {item.description && (
                  <p className="text-muted-foreground mt-1 text-sm">
                    {item.description}
                  </p>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementCard;
