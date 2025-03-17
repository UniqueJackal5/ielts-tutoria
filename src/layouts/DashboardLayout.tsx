
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Book,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Video
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  collapsed?: boolean;
}

const SidebarItem = ({ icon, label, href, active, collapsed }: SidebarItemProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center py-3 px-4 rounded-lg transition-colors group",
        active 
          ? "bg-primary/10 text-primary hover:bg-primary/15" 
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        collapsed ? "justify-center" : ""
      )}
    >
      <div className={cn(
        "flex items-center",
        collapsed ? "justify-center w-full" : ""
      )}>
        <span className="mr-3">{icon}</span>
        {!collapsed && <span className="font-medium">{label}</span>}
        {collapsed && (
          <span className="absolute left-full ml-2 px-2 py-1 rounded-md bg-popover text-foreground text-xs font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-md">
            {label}
          </span>
        )}
      </div>
    </Link>
  );
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'student' | 'teacher';
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const studentLinks = [
    { icon: <Home size={20} />, label: 'Dashboard', href: '/student/dashboard' },
    { icon: <Book size={20} />, label: 'My Courses', href: '/student/courses' },
    { icon: <Calendar size={20} />, label: 'Schedule', href: '/student/schedule' },
    { icon: <FileText size={20} />, label: 'Resources', href: '/student/resources' },
    { icon: <MessageSquare size={20} />, label: 'Messages', href: '/student/messages' },
    { icon: <Video size={20} />, label: 'Lessons', href: '/student/lessons' },
  ];
  
  const teacherLinks = [
    { icon: <Home size={20} />, label: 'Dashboard', href: '/teacher/dashboard' },
    { icon: <Book size={20} />, label: 'My Courses', href: '/teacher/courses' },
    { icon: <Calendar size={20} />, label: 'Schedule', href: '/teacher/schedule' },
    { icon: <FileText size={20} />, label: 'Resources', href: '/teacher/resources' },
    { icon: <MessageSquare size={20} />, label: 'Messages', href: '/teacher/messages' },
    { icon: <Video size={20} />, label: 'Lessons', href: '/teacher/lessons' },
  ];
  
  const links = userType === 'student' ? studentLinks : teacherLinks;
  
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-card border-r border-border transition-all duration-300 flex flex-col h-screen sticky top-0",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          {!collapsed && (
            <Link to="/" className="flex items-center">
              <span className="text-primary font-bold text-lg">IELTS Tutoria</span>
            </Link>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn("rounded-full", collapsed ? "ml-auto" : "")}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3">
          <nav className="space-y-1">
            {links.map((link) => (
              <SidebarItem
                key={link.href}
                icon={link.icon}
                label={link.label}
                href={link.href}
                active={location.pathname === link.href}
                collapsed={collapsed}
              />
            ))}
          </nav>
        </div>
        
        <div className="p-3 border-t border-border">
          <div className="flex items-center justify-between py-2">
            {!collapsed && (
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <User size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm">
                    {userType === 'student' ? 'John Doe' : 'Prof. Smith'}
                  </div>
                  <div className="text-xs text-muted-foreground capitalize">
                    {userType}
                  </div>
                </div>
              </div>
            )}
            {collapsed ? (
              <Link 
                to="/settings" 
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <Settings size={18} />
              </Link>
            ) : (
              <Link 
                to="/settings" 
                className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <Settings size={18} />
              </Link>
            )}
          </div>
          
          {!collapsed && (
            <Button 
              variant="outline" 
              className="w-full justify-start mt-3 text-muted-foreground"
            >
              <LogOut size={16} className="mr-2" />
              Sign Out
            </Button>
          )}
          
          {collapsed && (
            <Button 
              variant="outline" 
              size="icon" 
              className="w-full mt-3 text-muted-foreground"
            >
              <LogOut size={16} />
            </Button>
          )}
        </div>
      </aside>
      
      {/* Main Content */}
      <main className={cn(
        "flex-1 overflow-y-auto transition-all",
        collapsed ? "ml-16" : "ml-64"
      )}>
        <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
