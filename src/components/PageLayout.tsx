import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <main className="pt-24 pb-20">{children}</main>
    <Footer />
  </>
);

export default PageLayout;
