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

import { BsEyeFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { BiSolidCommentDots } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

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
              <DialogDescription className="flex gap-2 items-center">
                <IoIosPerson /> {getDataUsingId?.Author}
              </DialogDescription>
              <DialogDescription className="flex gap-2 items-center">
                <FaRegClock /> {getDataUsingId?.Date}
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
          <DialogDescription className="flex justify-between gap-2 my-2 text-md">
            <p className="flex items-center gap-2">
              <FaHeart className="text-red-500" />
              {getDataUsingId?.Love}
            </p>
            <p className="flex items-center gap-2">
              <BiSolidCommentDots className="text-green-500" />
              {getDataUsingId?.Comment}
            </p>
            <p className="flex items-center gap-2">
              <FaBookmark className="text-orange-300" /> {getDataUsingId?.Save}
            </p>
            <p className="flex items-center gap-2">
              <BsEyeFill className="text-blue-500" /> {getDataUsingId?.View}
            </p>
          </DialogDescription>
          <DialogFooter className="">
            <div className="flex gap-2">
              <Button type="submit">
                <FaHeart className="text-red-500" />
              </Button>
              <Button type="submit">
                <BiSolidCommentDots className="text-green-500" />
              </Button>
              <Button type="submit">
                <FaBookmark className="text-orange-300" />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
