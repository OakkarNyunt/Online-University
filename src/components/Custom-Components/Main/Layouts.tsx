import type { PropsWithChildren } from "react";
import Footer from "@/components/Custom-Components/Footer/Footer";
import Header from "@/components/Custom-Components/Header/Header";

const Layouts = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />

      <main className="py-[80px]">{children}</main>

      <Footer />
    </>
  );
};

export default Layouts;
