import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import toggleStore from "../utils/toggleStore";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout() {
  const { isDark } = toggleStore();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="hero-glow fixed inset-0 pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Nav />

      <div className="flex-1 relative z-10">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
