import Sidebar from "@/components/Contact-us/Sidebar/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex h-screen">
        <Sidebar/>
          {children}
      </main>
    );
  }