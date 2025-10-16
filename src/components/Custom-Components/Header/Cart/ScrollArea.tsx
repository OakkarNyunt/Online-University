// import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";
import Cart from "./Cart";

// const tags = Array.from({ length: 50 }).map(
//   (_, i, a) => `v1.2.0-beta.${a.length - i}`
// );

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-[480px] w-full rounded-md border">
      <div className="p-4 ">
        {/* {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))} */}
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
