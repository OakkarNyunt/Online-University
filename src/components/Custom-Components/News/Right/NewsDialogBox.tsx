import { Button } from "@/components/ui/button";
import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import NewsCard from "./NewsCard";
import { Python } from "@/assets/Data/images";
import { ScrollArea } from "@/components/ui/scroll-area";
import AccordionDemo from "./Accordion";

export function NewsDialogBox() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="">
            <NewsCard />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[825px] min-h-[500px] md:min-h-[600px] ">
          <DialogHeader className="text-start space-y-4">
            <DialogTitle>API အကြောင်း တစေ့တစောင်း</DialogTitle>
            <div className="flex justify-between">
              <DialogDescription>Name: Oakkar</DialogDescription>
              <DialogDescription>Time: 2 hours ago</DialogDescription>
            </div>
          </DialogHeader>
          <ScrollArea className="h-[400px] md:h-[600px] md:max-w-[800px] max-w-[425px] rounded-md border p-4">
            <div className="flex justify-center">
              <img
                src={Python}
                alt=""
                className="size-30 lg:size-50 object-contain "
              />
            </div>
            <div className="">
              <AccordionDemo />
            </div>
          </ScrollArea>
          <DialogDescription className="flex justify-between gap-2 text-xs">
            <p>Love : 30K</p>
            <p>Comments: 1.5K</p>
            <p>Save : 100K</p>
            <p>View : 100K</p>
          </DialogDescription>
          <DialogFooter className="">
            <div className="flex gap-2">
              <Button type="submit">Love</Button>
              <Button type="submit">Comments</Button>
              <Button type="submit">Save</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
