import { News } from "@/assets/Data/News";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select News" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>News</SelectLabel>
          {News.map((n) => (
            <div className="" key={n.id}>
              <SelectItem value={n.name}>{n.name}</SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
