import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { LuCirclePlus } from "react-icons/lu";

const OutlineDemo = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Outline</AccordionTrigger>
          <AccordionContent className="text-start space-y-2">
            <div className="flex gap-4 ">
              <span>
                <LuCirclePlus className="text-xl" />
              </span>
              <p className="">
                The course provides the entire toolbox you need to become an AI
                Engineer entire toolbox you need to become an AI Engineer
              </p>
            </div>
            <div className="flex gap-4 ">
              <span>
                <LuCirclePlus className="text-xl" />
              </span>
              <p className="">
                The course provides the entire toolbox you need to become an AI
                Engineer entire toolbox you need to become an AI Engineer
              </p>
            </div>
            <div className="flex gap-4 ">
              <span>
                <LuCirclePlus className="text-xl" />
              </span>
              <p className="">
                The course provides the entire toolbox you need to become an AI
                Engineer entire toolbox you need to become an AI Engineer
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OutlineDemo;
