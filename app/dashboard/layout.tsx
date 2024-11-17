import SidNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SidNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y">{children}</div>
    </div>
  );
}
