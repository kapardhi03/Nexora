import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
    trend: "up" | "down" | "neutral";
  };
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "destructive";
  description?: string;
  children?: ReactNode;
  className?: string;
}

const variantStyles = {
  default: {
    card: "surface-elevated hover:shadow-custom transition-all duration-300",
    icon: "text-primary bg-primary/10",
    value: "text-foreground",
    trend: {
      up: "text-success",
      down: "text-destructive", 
      neutral: "text-muted-foreground"
    }
  },
  success: {
    card: "surface-elevated border-success/20 hover:shadow-lg transition-all duration-300",
    icon: "text-success bg-success/10",
    value: "text-foreground",
    trend: {
      up: "text-success",
      down: "text-destructive",
      neutral: "text-muted-foreground"
    }
  },
  warning: {
    card: "surface-elevated border-warning/20 hover:shadow-lg transition-all duration-300",
    icon: "text-warning bg-warning/10",
    value: "text-foreground",
    trend: {
      up: "text-success",
      down: "text-destructive",
      neutral: "text-muted-foreground"
    }
  },
  destructive: {
    card: "surface-elevated border-destructive/20 hover:shadow-lg transition-all duration-300",
    icon: "text-destructive bg-destructive/10",
    value: "text-foreground",
    trend: {
      up: "text-success",
      down: "text-destructive",
      neutral: "text-muted-foreground"
    }
  }
};

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  variant = "default",
  description,
  children,
  className
}: MetricCardProps) {
  const styles = variantStyles[variant];

  return (
    <Card className={cn(styles.card, className)}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              styles.icon
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <div className="flex items-baseline gap-2">
                <p className={cn("text-2xl font-semibold", styles.value)}>
                  {value}
                </p>
                {change && (
                  <span className={cn(
                    "text-sm font-medium",
                    styles.trend[change.trend]
                  )}>
                    {change.trend === "up" ? "+" : change.trend === "down" ? "-" : ""}
                    {Math.abs(change.value)}% {change.label}
                  </span>
                )}
              </div>
              {description && (
                <p className="text-xs text-muted-foreground mt-1">{description}</p>
              )}
            </div>
          </div>
        </div>
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </Card>
  );
}