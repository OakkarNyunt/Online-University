import type { PropsWithChildren } from "react";
import Footer from "@/components/Custom-Components/Footer/Footer";
import Header from "@/components/Custom-Components/Header/Header";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layouts = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <ScrollArea className="min-h-[800px] w-full rounded-md border p-4">
        <main className=" py-[80px]">{children}</main>
      </ScrollArea>
      <Footer />
    </>
  );
};

export default Layouts;
