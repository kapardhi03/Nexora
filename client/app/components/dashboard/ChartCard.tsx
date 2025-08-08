import { type ReactNode } from "react";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
}

export function ChartCard({
  title,
  description,
  children,
  className,
  actions
}: ChartCardProps) {
  return (
    <Card className={cn("surface-elevated hover:shadow-custom transition-all duration-300", className)}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </Card>
  );
}