import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "blue" | "navy" | "green" | "gray";
}

export default function Badge({
  children,
  className,
  variant = "blue",
}: BadgeProps) {
  const variants = {
    blue: "bg-blue-50 text-blue-700 border border-blue-100",
    navy: "bg-navy-50 text-navy-800 border border-navy-100",
    green: "bg-green-50 text-green-700 border border-green-100",
    gray: "bg-gray-100 text-gray-600 border border-gray-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
