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

import { ScrollArea } from "@/components/ui/scroll-area";
import AccordionDemo from "./Accordion";
import { useState } from "react";
import { Articles } from "@/assets/Data/Article";

export function NewsDialogBox() {
  const [selectId, setSelectId] = useState(null);
  const getDataUsingId = Articles.find((a) => a.id === selectId);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="">
            <NewsCard id={setSelectId} />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[825px] min-h-[500px] md:min-h-[600px] ">
          <DialogHeader className="text-start space-y-4">
            {/* {selectId} testing */}
            <DialogTitle>{getDataUsingId?.Name}</DialogTitle>
            <div className="flex justify-between">
              <DialogDescription>
                Name: {getDataUsingId?.Author}
              </DialogDescription>
              <DialogDescription>
                Date: {getDataUsingId?.Date}
              </DialogDescription>
            </div>
          </DialogHeader>
          <ScrollArea className="h-[400px] md:h-[600px] md:max-w-[800px] max-w-[425px] rounded-md border p-4">
            <div className="flex justify-center">
              <img
                src={getDataUsingId?.image}
                alt=""
                className="size-30 lg:size-50 object-contain "
              />
            </div>
            <div className="">
              <AccordionDemo content={getDataUsingId?.Content} />
            </div>
          </ScrollArea>
          <DialogDescription className="flex justify-between gap-2 text-xs">
            <p>Love : {getDataUsingId?.Love}</p>
            <p>Comments: {getDataUsingId?.Comment}</p>
            <p>Save : {getDataUsingId?.Save}</p>
            <p>View : {getDataUsingId?.View}</p>
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
