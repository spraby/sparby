import type {Metadata} from "next";
import {Inter} from "next/font/google";
import '../styles/index.scss';
import ThemeLayout from "@/theme/layouts/ThemeLayout";
import {getMainMenu} from "@/services/Settings";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  const menu = await getMainMenu()

  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeLayout menu={menu}>
      {children}
    </ThemeLayout>
    </body>
    </html>
  );
}