import "./globals.css";
import Providers from "@/context/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Royal Mart",
  description: "Premium Quality Clothing Brand in Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* Global Context (Cart etc) */}
        <Providers>

          {/* HEADER */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="rm-main">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

        </Providers>

      </body>
    </html>
  );
}
