"use client";

import React from "react";
import Link from "next/link";
import { Home, Users, Briefcase, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
}

const SidebarItem = ({ href, icon, title, isActive }: SidebarItemProps) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 px-2 text-sidebar-foreground",
          isActive 
            ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" 
            : "hover:bg-primary dark:hover:bg-primary"
        )}
      >
        {icon}
        <span className="transition-none">{title}</span>
      </Button>
    </Link>
  );
};

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  // Use the pathname to determine the active route
  const pathname = usePathname();

  const sidebarItems = [
    {
      href: "/",
      icon: <Home size={20} />,
      title: "Home",
    },
    {
      href: "/team",
      icon: <Users size={20} />,
      title: "Team",
    },
    {
      href: "/services",
      icon: <Briefcase size={20} />,
      title: "Services",
    },
    {
      href: "/about-neutrinos",
      icon: <BookOpen size={20} />,
      title: "About Neutrinos",
    },
  ];

  return (
    <aside 
      className={cn(
        "h-full border-r bg-sidebar transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-0 overflow-hidden"
      )}
    >
      <div className="h-full overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <div key={item.href} className="mb-1">
              <SidebarItem
                href={item.href}
                icon={item.icon}
                title={item.title}
                isActive={pathname === item.href}
              />
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
