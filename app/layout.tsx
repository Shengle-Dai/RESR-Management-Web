import Head from "next/head";
import "@/components/global.css";
import { inter } from "@/components/fonts";
import Nav from "@/components/nav";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col">
          <Nav />
          <main className="main bg-background">{children}</main>
          <Footer />
          <div className="flex-grow overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
