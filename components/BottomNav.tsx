"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const path = usePathname();
  const tabs = [
    { href: "/search", icon: "🔍", label: "Recherche" },
    { href: "/", icon: "🎬", label: "Films" },
    { href: "/live", icon: "📡", label: "LIVE" },
    { href: "/publish", icon: "➕", label: "Publier" },
    { href: "/profile", icon: "👤", label: "Profil" },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 flex justify-around py-2 z-50">
      {tabs.map(t => (
        <Link key={t.href} href={t.href} className={`flex flex-col items-center text-[11px] ${path===t.href?"text-white":"opacity-50"}`}>
          <span className="text-xl">{t.icon}</span>{t.label}
        </Link>
      ))}
    </div>
  );
}0

