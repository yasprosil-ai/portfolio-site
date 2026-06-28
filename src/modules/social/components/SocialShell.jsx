import SocialSidebar from "./SocialSidebar.jsx";
import SocialTopbar from "./SocialTopbar.jsx";

export default function SocialShell({ children }) {
  return (
    <div className="site-shell min-h-dvh w-full text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <div className="flex min-h-dvh flex-col lg:flex-row">
        <SocialSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <SocialTopbar />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
