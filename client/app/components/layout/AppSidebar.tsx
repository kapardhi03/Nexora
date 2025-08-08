import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  Settings,
  GitBranch,
  Target,
  Bell,
  Activity,
  TrendingUp,
  Zap,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    description: "Overview & insights"
  },
  {
    title: "Team Analytics",
    url: "/analytics", 
    icon: Users,
    description: "Performance metrics"
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Target,
    description: "Project tracking"
  }
];

const integrationItems = [
  {
    title: "GitHub",
    url: "/integrations/github",
    icon: GitBranch,
    status: "connected"
  },
  {
    title: "Jira",
    url: "/integrations/jira", 
    icon: Target,
    status: "connected"
  },
  {
    title: "Slack",
    url: "/integrations/slack",
    icon: Zap,
    status: "pending"
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const [integrationsOpen, setIntegrationsOpen] = useState(true);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-success";
      case "pending":
        return "bg-warning";
      default:
        return "bg-muted";
    }
  };

  return (
    <Sidebar className={cn(
      "transition-all duration-300 border-r border-border bg-surface",
      collapsed ? "w-16" : "w-72"
    )}>
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Activity className="w-4 h-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-sm font-semibold text-foreground">TeamFlow AI</h1>
              <p className="text-xs text-muted-foreground">Productivity Dashboard</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={cn(
            "text-xs font-medium text-muted-foreground uppercase tracking-wider px-3",
            collapsed && "sr-only"
          )}>
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={cn(
                      "w-full justify-start transition-all duration-200 hover:bg-surface-hover",
                      isActive(item.url) && "bg-primary text-primary-foreground shadow-md",
                      collapsed && "justify-center"
                    )}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg">
                      <item.icon className={cn("w-4 h-4 shrink-0", collapsed && "w-5 h-5")} />
                      {!collapsed && (
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>
              <button
                onClick={() => setIntegrationsOpen(!integrationsOpen)}
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider w-full hover:text-foreground transition-colors"
              >
                {integrationsOpen ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
                Integrations
              </button>
            </SidebarGroupLabel>
            {integrationsOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {integrationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild
                        className={cn(
                          "w-full justify-start transition-all duration-200 hover:bg-surface-hover",
                          isActive(item.url) && "bg-primary text-primary-foreground"
                        )}
                      >
                        <NavLink to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg">
                          <item.icon className="w-4 h-4 shrink-0" />
                          <div className="flex-1 text-left">
                            <div className="text-sm font-medium">{item.title}</div>
                          </div>
                          <div className={cn("w-2 h-2 rounded-full", getStatusColor(item.status))} />
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        )}

        <div className="mt-auto">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild
                    className={cn(
                      "w-full justify-start transition-all duration-200 hover:bg-surface-hover",
                      isActive("/settings") && "bg-primary text-primary-foreground",
                      collapsed && "justify-center"
                    )}
                  >
                    <NavLink to="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg">
                      <Settings className={cn("w-4 h-4 shrink-0", collapsed && "w-5 h-5")} />
                      {!collapsed && (
                        <div className="text-sm font-medium">Settings</div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}