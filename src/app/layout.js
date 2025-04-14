import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Developer-X",
  description: "Hero page of app about developer-x",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.variable}>{children}</body>
    </html>
  );
}
