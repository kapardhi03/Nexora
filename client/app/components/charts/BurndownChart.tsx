import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Mock data for burndown chart
const burndownData = [
  { day: 'Day 1', ideal: 100, actual: 100, remaining: 98 },
  { day: 'Day 2', ideal: 90, actual: 95, remaining: 89 },
  { day: 'Day 3', ideal: 80, actual: 88, remaining: 82 },
  { day: 'Day 4', ideal: 70, actual: 78, remaining: 71 },
  { day: 'Day 5', ideal: 60, actual: 65, remaining: 58 },
  { day: 'Day 6', ideal: 50, actual: 52, remaining: 45 },
  { day: 'Day 7', ideal: 40, actual: 42, remaining: 35 },
  { day: 'Day 8', ideal: 30, actual: 35, remaining: 28 },
  { day: 'Day 9', ideal: 20, actual: 25, remaining: 18 },
  { day: 'Day 10', ideal: 10, actual: 12, remaining: 8 },
  { day: 'Day 11', ideal: 0, actual: 3, remaining: 0 }
];

export function BurndownChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={burndownData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="idealGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="remainingGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}pts`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px hsl(var(--primary) / 0.1)'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Area
            type="monotone"
            dataKey="ideal"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#idealGradient)"
            name="Ideal Burndown"
          />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            fill="url(#actualGradient)"
            name="Actual Progress"
          />
          <Area
            type="monotone"
            dataKey="remaining"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            fill="url(#remainingGradient)"
            name="Story Points Remaining"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}