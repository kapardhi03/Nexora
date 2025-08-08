import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Mock data for issue distribution
const issueData = [
  { name: 'Bug', value: 15, color: 'hsl(var(--destructive))' },
  { name: 'Feature', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Improvement', value: 25, color: 'hsl(var(--success))' },
  { name: 'Technical Debt', value: 10, color: 'hsl(var(--warning))' },
  { name: 'Documentation', value: 5, color: 'hsl(var(--muted))' }
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight="500"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function IssueDistributionChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={issueData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {issueData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px hsl(var(--primary) / 0.1)'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend 
            wrapperStyle={{
              fontSize: '12px',
              color: 'hsl(var(--foreground))'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}