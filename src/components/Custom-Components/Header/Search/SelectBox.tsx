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
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="apple">IT</SelectItem>
          <SelectItem value="banana">Management</SelectItem>
          <SelectItem value="blueberry">Finance</SelectItem>
          <SelectItem value="grapes">Medical</SelectItem>
          <SelectItem value="pineapple">Engineering</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
