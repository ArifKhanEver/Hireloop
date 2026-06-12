'use client'
import { Bell, Envelope, Gear, House, LayoutSideContent, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import logo from '@/assets/images/logo.png';
import { useSession } from "@/lib/auth-client";

export function DashboardSidebar() {

    const {data:session, isPending} = useSession();
    const user = session?.user;


    const navItems = [
        { icon: House, label: "Home" },
        { icon: Magnifier, label: "Search" },
        { icon: Bell, label: "Notifications" },
        { icon: Envelope, label: "Messages" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" },
    ];

    const navContent = <nav className="flex flex-col gap-1 lg:gap-2">
        <div className="w-full max-w-[240px] bg-[#141416]/40 border border-zinc-900/80 backdrop-blur-md p-4 rounded-xl flex flex-col gap-3.5 shadow-xl">

            <div className="mx-auto">
                <Image
                    src={logo}
                    height={32}
                    width={90}
                    alt="Hireloop Logo"
                    className=""
                />
            </div>
            <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full overflow-hidden border border-zinc-800/60 bg-zinc-900 flex-shrink-0">
                    <Image
                        src={user?.image || "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col min-w-0">
                    <h3 className="text-sm font-semibold tracking-tight text-white leading-tight truncate">
                        {user?.name}
                    </h3>
                    <span className="text-[11px] text-zinc-500 font-medium mt-0.5 truncate capitalize">
                        {user?.role}
                    </span>
                </div>
            </div>

            <div className="pt-0.5">
                <span className="inline-block px-2.5 py-1.5 rounded-md bg-[#161618] border border-zinc-800/80 text-[9px] font-bold uppercase tracking-wider text-zinc-300 select-none">
                    Premium Account
                </span>
            </div>
        </div>

        {navItems.map((item) => (
            <button
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                type="button"
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </button>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button variant="secondary" className="lg:hidden">
                    <LayoutSideContent />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>

    );
}