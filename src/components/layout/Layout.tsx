import { Footer } from "./footer/Footer";
import { MainContent } from "./container/MainContent";
import Navbar from "./navbar/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};
