import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { ChartCard } from "~/components/dashboard/ChartCard";
import { MetricCard } from "~/components/dashboard/MetricCard";
import { VelocityChart } from "~/components/charts/VelocityChart";
import { BurndownChart } from "~/components/charts/BurndownChart";
import { Users, Clock, TrendingUp, Target } from "lucide-react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";

const TeamAnalytics = () => {
  const teamMembers = [
    { name: "Sarah Chen", role: "Frontend Developer", tasksCompleted: 23, avgCycleTime: "2.3 days", prsMerged: 12 },
    { name: "Alex Rodriguez", role: "Backend Developer", tasksCompleted: 19, avgCycleTime: "3.1 days", prsMerged: 8 },
    { name: "Emily Johnson", role: "Product Manager", tasksCompleted: 15, avgCycleTime: "1.8 days", prsMerged: 5 },
    { name: "Mike Thompson", role: "DevOps Engineer", tasksCompleted: 17, avgCycleTime: "2.7 days", prsMerged: 9 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Team Analytics</h1>
          <p className="text-muted-foreground">Performance insights and individual contributor metrics</p>
        </div>

        {/* Team Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Team Size"
            value={teamMembers.length}
            icon={Users}
            variant="default"
            description="Active contributors"
          />
          <MetricCard
            title="Avg Cycle Time"
            value="2.5 days"
            change={{ value: 0.3, label: "improvement", trend: "down" }}
            icon={Clock}
            variant="success"
            description="Task completion time"
          />
          <MetricCard
            title="Team Velocity"
            value="74 pts"
            change={{ value: 8, label: "from last sprint", trend: "up" }}
            icon={TrendingUp}
            variant="success"
            description="Current sprint"
          />
          <MetricCard
            title="Completion Rate"
            value="92%"
            change={{ value: 5, label: "from last month", trend: "up" }}
            icon={Target}
            variant="success"
            description="Tasks on time"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Team Velocity Trends"
            description="Story points delivered over time"
          >
            <VelocityChart />
          </ChartCard>
          
          <ChartCard
            title="Sprint Progress"
            description="Current sprint burndown analysis"
          >
            <BurndownChart />
          </ChartCard>
        </div>

        {/* Individual Contributor Breakdown */}
        <ChartCard
          title="Individual Performance"
          description="Team member contributions and metrics"
        >
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-4 surface-hover transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Badge variant="outline">
                    Active
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Tasks Completed</span>
                      <span className="text-sm font-medium">{member.tasksCompleted}</span>
                    </div>
                    <Progress value={(member.tasksCompleted / 25) * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Avg Cycle Time</span>
                      <span className="text-sm font-medium">{member.avgCycleTime}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div 
                        className="h-full bg-success rounded-full"
                        style={{ width: `${100 - (parseFloat(member.avgCycleTime) / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">PRs Merged</span>
                      <span className="text-sm font-medium">{member.prsMerged}</span>
                    </div>
                    <Progress value={(member.prsMerged / 15) * 100} className="h-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
};

export default TeamAnalytics;