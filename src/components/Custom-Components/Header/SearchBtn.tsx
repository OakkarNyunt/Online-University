import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ImSearch } from "react-icons/im";

export function SearchBtn() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit" variant="outline">
        <ImSearch />
      </Button>
    </div>
  );
}
