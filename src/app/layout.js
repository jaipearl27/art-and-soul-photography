import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Art-and-Soul-Photography",
  description: "Art and soul photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col gap-10`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
