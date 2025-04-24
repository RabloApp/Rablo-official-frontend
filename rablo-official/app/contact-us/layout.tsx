import Sidebar from "@/components/Contact-us/Sidebar/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
        <Sidebar/>
          {children}
      </main>
    );
  }