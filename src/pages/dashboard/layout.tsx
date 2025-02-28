import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import { configDashboard } from '@/configs/dashboard.config';

// ----------------------------------------------------------------------

interface Props {
  readonly children: React.ReactNode;
}

function LayoutDashboard({ children }: Props) {
  return (
    <DashboardLayout defaultSidebarCollapsed={configDashboard.initialSidebarCollapsed}>{children}</DashboardLayout>
  );
}

export default LayoutDashboard;
