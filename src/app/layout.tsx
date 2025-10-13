import "./globals.css";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--montserrat-font",
});

export const metadata = {
  title: "Mock Trial Website",
  description:
    "Mock Trial at UCR is a student-run team where members take on roles as attorneys or witnesses to compete in simulated court cases. It’s a chance to practice public speaking, debate, and performance by arguing cases or portraying characters in trial.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
