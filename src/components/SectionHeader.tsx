import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "max-w-3xl", centered && "mx-auto", className)}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
          {label}
        </span>
      )}
      <h2 className={cn("text-3xl md:text-4xl font-bold text-navy-800 leading-tight", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
