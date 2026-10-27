import { Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="logo-link" aria-label="Truth & Conciliation Commission — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.png" alt="Truth & Conciliation Commission logo" />
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.png" alt="Truth & Conciliation Commission logo" />
            </div>
            <p>Truth &amp; Conciliation Commission — Chicago, IL</p>
            <p>
              The Truth and Conciliation Commission is a federally registered
              501(c)3.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:contact@the-tacc.org">contact@the-tacc.org</a>
            </p>
            <nav className="footer-nav" aria-label="Footer navigation">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms and Conditions</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
