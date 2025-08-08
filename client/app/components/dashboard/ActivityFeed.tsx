import { GitCommit, MessageSquare, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

export interface ActivityItem {
  id: string;
  type: "commit" | "message" | "task" | "alert";
  title: string;
  description: string;
  timestamp: string;
  user: {
    name: string;
    avatar?: string;
  };
  metadata?: {
    repository?: string;
    channel?: string;
    priority?: "low" | "medium" | "high";
    status?: string;
  };
}

const activityIcons = {
  commit: GitCommit,
  message: MessageSquare,
  task: CheckCircle,
  alert: AlertTriangle
};

const typeStyles = {
  commit: "text-primary bg-primary/10",
  message: "text-success bg-success/10", 
  task: "text-success bg-success/10",
  alert: "text-warning bg-warning/10"
};

const priorityColors = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning text-warning-foreground",
  high: "bg-destructive text-destructive-foreground"
};

// Mock data for demonstration
const mockActivities: ActivityItem[] = [
  {
    id: "1",
    type: "commit",
    title: "Merged pull request #127",
    description: "Fix authentication flow and update user permissions",
    timestamp: "2 minutes ago",
    user: { name: "Sarah Chen" },
    metadata: { repository: "auth-service" }
  },
  {
    id: "2", 
    type: "task",
    title: "Task completed: API Documentation",
    description: "Updated REST API documentation with new endpoints",
    timestamp: "15 minutes ago",
    user: { name: "Alex Rodriguez" },
    metadata: { status: "Done", priority: "medium" }
  },
  {
    id: "3",
    type: "message",
    title: "New message in #general",
    description: "Team standup meeting moved to 10:30 AM tomorrow",
    timestamp: "32 minutes ago", 
    user: { name: "Emily Johnson" },
    metadata: { channel: "general" }
  },
  {
    id: "4",
    type: "alert",
    title: "High priority ticket created",
    description: "Production deployment failing - needs immediate attention",
    timestamp: "1 hour ago",
    user: { name: "System Alert" },
    metadata: { priority: "high" }
  },
  {
    id: "5",
    type: "commit",
    title: "New feature branch created", 
    description: "Started work on user dashboard redesign",
    timestamp: "2 hours ago",
    user: { name: "Mike Thompson" },
    metadata: { repository: "frontend-app" }
  }
];

export function ActivityFeed() {
  return (
    <Card className="surface-elevated h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
          <Badge variant="outline" className="text-xs">
            <Clock className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>
        
        <div className="space-y-4">
          {mockActivities.map((activity) => {
            const Icon = activityIcons[activity.type];
            
            return (
              <div key={activity.id} className="flex gap-3 group hover:bg-surface-hover p-3 rounded-lg transition-colors">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  typeStyles[activity.type]
                )}>
                  <Icon className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {activity.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {activity.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-muted-foreground">
                          {activity.user.name}
                        </span>
                        {activity.metadata?.repository && (
                          <>
                            <span className="text-xs text-muted-foreground">•</span>
                            <Badge variant="outline" className="text-xs">
                              {activity.metadata.repository}
                            </Badge>
                          </>
                        )}
                        {activity.metadata?.channel && (
                          <>
                            <span className="text-xs text-muted-foreground">•</span>
                            <Badge variant="outline" className="text-xs">
                              #{activity.metadata.channel}
                            </Badge>
                          </>
                        )}
                        {activity.metadata?.priority && (
                          <>
                            <span className="text-xs text-muted-foreground">•</span>
                            <Badge className={cn("text-xs", priorityColors[activity.metadata.priority])}>
                              {activity.metadata.priority}
                            </Badge>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <span className="text-xs text-muted-foreground shrink-0">
                      {activity.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="w-full mt-4 text-sm text-primary hover:text-primary-dark transition-colors text-center py-2">
          View all activity
        </button>
      </div>
    </Card>
  );
}