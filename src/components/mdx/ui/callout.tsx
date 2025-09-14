import { ReactNode } from "react";

interface CalloutProps {
  type?: "info" | "warning" | "error" | "success";
  title?: string;
  children: ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: {
      container: "bg-blue-50 border-blue-200 text-blue-900",
      icon: "💡",
      title: "text-blue-800",
    },
    warning: {
      container: "bg-yellow-50 border-yellow-200 text-yellow-900",
      icon: "⚠️",
      title: "text-yellow-800",
    },
    error: {
      container: "bg-red-50 border-red-200 text-red-900",
      icon: "🚨",
      title: "text-red-800",
    },
    success: {
      container: "bg-green-50 border-green-200 text-green-900",
      icon: "✅",
      title: "text-green-800",
    },
  };

  const style = styles[type];

  return (
    <div className={`p-4 border-l-4 rounded-r-lg my-6 ${style.container}`}>
      <div className="flex items-start space-x-3">
        <span className="text-lg">{style.icon}</span>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold mb-2 ${style.title}`}>{title}</h4>
          )}
          <div className="prose prose-sm max-w-none">{children}</div>
        </div>
      </div>
    </div>
  );
}
