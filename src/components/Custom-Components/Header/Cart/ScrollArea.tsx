import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";
import Cart from "./Cart";

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-[300px] md:h-[480px] w-full rounded-md border">
      <div className="p-4 ">
        <div className="space-y-4">
          <Cart />

          <Cart />

          <Cart />

          <Cart />

          <Cart />

          <Cart />
        </div>
      </div>
    </ScrollArea>
  );
}
