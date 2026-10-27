import { Montserrat } from "next/font/google";
import "./globals.css";
import "./tcc-home.css";
import SiteChrome from "./components/SiteChrome";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Truth & Conciliation Commission",
  description:
    "The Truth & Conciliation Commission seeks to identify, examine and dismantle racism to build a more equitable, inclusive and justice-oriented society and world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
