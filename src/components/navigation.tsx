"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CalendarIcon, CheckCircleIcon, SettingsIcon, UsersIcon } from "lucide-react";
import { GoHome, GoHomeFill } from "react-icons/go";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

const routes = [
    {
        label: "Home",
        href: "",
        icon: GoHome,
        activeIcon: GoHomeFill,
    },
    {
        label: "Members",
        href: "/members",
        icon: UsersIcon,
        activeIcon: UsersIcon,
    },
    {
        label: "Time Table",
        href: "/timetable",
        icon: CalendarIcon,
        activeIcon: CalendarIcon,
    },
    {
        label: "Attendance",
        href: "/attendance",
        icon: CheckCircleIcon,
        activeIcon: CheckCircleIcon,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
    },
];

export const Navigation = () => {
    const pathname = usePathname();
    const workspaceId = useWorkspaceId();
    return (
        <ul className="flex flex-col">
            {routes.map((item) => {
                const fullHref = `/workspaces/${workspaceId}${item.href}`;
                const isActive = pathname === fullHref;
                const Icon = isActive ? item.activeIcon : item.icon;

                return (
                    <Link key={item.href} href={fullHref}>
                        <div className={cn(
                            "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                            isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
                        )}>
                            <Icon className="size-5 text-neutral-500"/>
                            {item.label}
                        </div>
                    </Link>
                )
            })}
        </ul>
    );
};