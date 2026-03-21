-- Create an ENUM for status and priority
create type ticket_status as enum ('open', 'in_progress', 'pending_deployment', 'resolved');
create type ticket_priority as enum ('low', 'medium', 'high', 'critical');

create table tickets (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  status ticket_status default 'open',
  priority ticket_priority default 'medium',
  product_area text, -- e.g., 'Frontend', 'API', 'Payments'
  assigned_to uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table tickets enable row level security;

-- Policy: Authenticated users can read all tickets for the product
create policy "Authenticated users can view tickets"
on tickets for select
to authenticated
using (true);