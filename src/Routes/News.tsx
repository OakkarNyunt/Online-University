import { NewsDialogBox } from "@/components/Custom-Components/News/NewsDialogBox";
import NewsPage from "@/components/Custom-Components/News/NewsPage";
import { ScrollArea } from "@/components/ui/scroll-area";

const News = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8 container mx-auto p-4 lg:p-0">
        <div className="lg:col-span-1">
          <NewsPage />
        </div>
        <div className="lg:col-span-3">
          <ScrollArea className="h-[650px] lg:h-[750px] rounded-md border p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <NewsDialogBox />
              <NewsDialogBox />
              <NewsDialogBox />
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default News;
