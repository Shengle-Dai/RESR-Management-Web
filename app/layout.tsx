import Head from "next/head";
import "@/components/global.css";
import Nav from "@/components/nav";
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
          <main className="main bg-wight">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
