import { createClient } from '@/utils/supabase/server';
import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react'; // Optional: npm install lucide-react

export default async function TicketsDashboard() {
  const supabase = await createClient();
  
  // Fetch tickets ordered by priority and date
  const { data: tickets, error } = await supabase
    .from('tickets')
    .select('*')
    .order('priority', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) return <div>Error loading tickets: {error.message}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Operations Hub</h1>
          <p className="text-slate-500">Monitoring live product tickets and system health.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          + New Ticket
        </button>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Open Tickets" count={tickets.filter(t => t.status === 'open').length} color="text-blue-600" />
        <StatCard title="Critical Priority" count={tickets.filter(t => t.priority === 'critical').length} color="text-red-600" />
        <StatCard title="Resolved Today" count={tickets.filter(t => t.status === 'resolved').length} color="text-green-600" />
      </div>

      {/* Tickets Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Ticket</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Priority</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Area</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700 text-right">Age</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">{ticket.title}</div>
                  <div className="text-xs text-slate-500 truncate max-w-[200px]">{ticket.description}</div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={ticket.status} />
                </td>
                <td className="px-6 py-4">
                  <PriorityBadge priority={ticket.priority} />
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {ticket.product_area}
                </td>
                <td className="px-6 py-4 text-sm text-slate-400 text-right">
                  {new Date(ticket.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Sub-components for cleaner UI
function StatCard({ title, count, color }: { title: string; count: number; color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
      <p className={`text-4xl font-bold mt-2 ${color}`}>{count}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: any = {
    open: "bg-blue-100 text-blue-700",
    in_progress: "bg-amber-100 text-amber-700",
    resolved: "bg-emerald-100 text-emerald-700",
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${styles[status] || "bg-slate-100"}`}>
      {status.replace('_', ' ')}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const colors: any = {
    critical: "text-red-600",
    high: "text-orange-500",
    medium: "text-blue-500",
    low: "text-slate-400",
  };
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <span className={`h-2 w-2 rounded-full bg-current ${colors[priority]}`} />
      <span className="capitalize">{priority}</span>
    </div>
  );
}