"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { usePathname } from "next/navigation";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathName = usePathname();
    return (
        <>
            {pathName === "/" && <Header />}
            {children}
            {pathName === "/" && <Footer />}
        </>
    );
}
