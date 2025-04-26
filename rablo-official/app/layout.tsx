import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google"
import "./globals.css";


export const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    subsets: ['latin'],
    display: 'swap',
})

export const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: "AI Teaching Platform for Tutors | Rablo - Empower & Grow",
    template: "%s | Rablo - Empower & Grow",
  },
  description: "Rablo.in is an AI-powered platform that helps private educators grow their tuition business, connect with students, and teach smarter with zero commission.",
  keywords: [
    "AI Teaching Platform",
    "Tuition Business Growth",
    "Private Educator Platform",
    "Online Teaching Tools India",
    "LMS for Tutors",
    "Student-Tutor Marketplace",
    "Zero Commission EdTech",
    "Personalized Learning Ecosystem",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${merriweather.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
