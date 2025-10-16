import { Categories } from "@/assets/Data/Categories";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBox() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="p-2">
          <SelectLabel className="mb-2">Categories</SelectLabel>
          <ScrollArea className="h-[300px]  rounded-md border p-2">
            {Categories.map((category) => (
              <SelectItem value={category.name} key={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
