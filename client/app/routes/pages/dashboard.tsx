import { TrendingUp, Users, Target, AlertTriangle, GitBranch, CheckCircle } from "lucide-react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { MetricCard } from "~/components/dashboard/MetricCard";
import { ChartCard } from "~/components/dashboard/ChartCard";
import { ActivityFeed } from "~/components/dashboard/ActivityFeed";
import { BurndownChart } from "~/components/charts/BurndownChart";
import { VelocityChart } from "~/components/charts/VelocityChart";
import { IssueDistributionChart } from "~/components/charts/IssueDistributionChart";
import { Progress } from "~/components/ui/progress";
import { Badge } from "~/components/ui/badge";
//import heroImage from "@/assets/dashboard-hero.jpg";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Hero Section */}
        <div 
          className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-8"
          style={{
            backgroundColor: 'transparent',
            //backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--primary-glow) / 0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back to TeamFlow AI</h1>
            <p className="text-primary-foreground/90 text-lg mb-4">
              Here's what's happening with your team today
            </p>
            <div className="flex items-center gap-4">
              <Badge className="bg-success text-success-foreground">
                All systems operational
              </Badge>
              <Badge className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30">
                Last updated: 2 minutes ago
              </Badge>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Active Tasks"
            value={247}
            change={{ value: 12, label: "from last week", trend: "up" }}
            icon={Target}
            variant="default"
            description="Across all projects"
          />
          <MetricCard
            title="Team Velocity"
            value="89.2"
            change={{ value: 5.3, label: "from last sprint", trend: "up" }}
            icon={TrendingUp}
            variant="success"
            description="Story points per sprint"
          />
          <MetricCard
            title="Open Blockers"
            value={3}
            change={{ value: 2, label: "from yesterday", trend: "down" }}
            icon={AlertTriangle}
            variant="warning"
            description="Requires attention"
          />
          <MetricCard
            title="Pull Requests"
            value={18}
            change={{ value: 8, label: "from last week", trend: "up" }}
            icon={GitBranch}
            variant="default"
            description="Pending review"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Sprint Burndown"
            description="Current sprint progress vs. ideal burndown"
          >
            <BurndownChart />
          </ChartCard>
          
          <ChartCard
            title="Team Velocity Trend"
            description="Story points completed over last 6 sprints"
          >
            <VelocityChart />
          </ChartCard>
        </div>

        {/* Project Status & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Project Status Cards */}
            <ChartCard
              title="Project Status Overview"
              description="Current status of active projects"
            >
              <div className="space-y-4">
                {[
                  { name: "User Authentication System", progress: 85, status: "on-track", team: "Backend Team" },
                  { name: "Dashboard Redesign", progress: 62, status: "at-risk", team: "Frontend Team" },
                  { name: "API Documentation", progress: 100, status: "completed", team: "DevOps Team" },
                  { name: "Mobile App MVP", progress: 34, status: "delayed", team: "Mobile Team" }
                ].map((project) => (
                  <div key={project.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">{project.team}</p>
                      </div>
                      <Badge 
                        className={
                          project.status === "completed" ? "bg-success text-success-foreground" :
                          project.status === "on-track" ? "bg-primary text-primary-foreground" :
                          project.status === "at-risk" ? "bg-warning text-warning-foreground" :
                          "bg-destructive text-destructive-foreground"
                        }
                      >
                        {project.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{project.progress}% complete</span>
                      <span className="text-muted-foreground">
                        {project.status === "completed" ? "Finished" : "In progress"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ChartCard>

            {/* Issue Distribution */}
            <ChartCard
              title="Issue Distribution"
              description="Breakdown of current issues by type"
            >
              <IssueDistributionChart />
            </ChartCard>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;