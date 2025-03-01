import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { geistMono, geistSans } from "@/lib/fonts";
import "../../globals.css";
import { Header } from "@/components/header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <Header>
            {/* <div className="ml-auto flex items-center gap-4"></div> */}
          </Header>
          <main className="flex flex-1 min-h-screen">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
