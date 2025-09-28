import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
