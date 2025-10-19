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

export function SelectDemo({ onSelect }: { onSelect: any }) {
  return (
    <Select onValueChange={(value) => onSelect(Number(value))}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select News" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>News</SelectLabel>
          {News.map((n) => (
            <div className="" key={n.id}>
              <SelectItem value={String(n.id)} onClick={() => onSelect(n.id)}>
                {n.name}
              </SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
