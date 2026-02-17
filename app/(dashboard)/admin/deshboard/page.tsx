import StatCard from "@/components/cards/StatCard";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard title="Sales" value="$37,802" />
      <StatCard title="Orders" value="1,638" />
      <StatCard title="Customers" value="2,672" />
      <StatCard title="Revenue" value="$34,945" />
    </div>
  );
}
