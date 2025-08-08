import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for velocity chart
const velocityData = [
  { sprint: 'Sprint 1', planned: 85, completed: 78, velocity: 72 },
  { sprint: 'Sprint 2', planned: 90, completed: 85, velocity: 83 },
  { sprint: 'Sprint 3', planned: 88, completed: 92, velocity: 89 },
  { sprint: 'Sprint 4', planned: 95, completed: 88, velocity: 85 },
  { sprint: 'Sprint 5', planned: 90, completed: 95, velocity: 92 },
  { sprint: 'Sprint 6', planned: 100, completed: 87, velocity: 84 }
];

export function VelocityChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={velocityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="sprint" 
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
          <Bar 
            dataKey="planned" 
            fill="hsl(var(--muted))" 
            name="Planned"
            radius={[2, 2, 0, 0]}
          />
          <Bar 
            dataKey="completed" 
            fill="hsl(var(--primary))" 
            name="Completed"
            radius={[2, 2, 0, 0]}
          />
          <Bar 
            dataKey="velocity" 
            fill="hsl(var(--success))" 
            name="Velocity"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}