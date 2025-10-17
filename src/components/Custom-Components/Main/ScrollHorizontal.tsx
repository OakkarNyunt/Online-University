import { Categories } from "@/assets/Data/Categories";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

export function ScrollHorizontal() {
  return (
    <ScrollArea className="w-96 md:hidden  rounded-md border whitespace-nowrap">
      <div className="flex w-max  space-x-4 p-4">
        <div className="gap-4 flex">
          {Categories.map((category) => (
            <Button variant="outline" key={category.id}>
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
