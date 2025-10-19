import { useState } from "react";
import { SelectDemo } from "./Select";

const NewsPage = () => {
  const [selectId, setSelectId] = useState<null | number>(null);
  return (
    <div>
      <SelectDemo onSelect={setSelectId} />
      {selectId}
    </div>
  );
};

export default NewsPage;
