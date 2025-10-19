import { NewsDialogBox } from "@/components/Custom-Components/News/Right/NewsDialogBox";
import NewsPage from "@/components/Custom-Components/News/Left/NewsPage";
import { ScrollArea } from "@/components/ui/scroll-area";

const News = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8 container mx-auto p-4 lg:p-0">
        {/* Select Section */}
        <div className="lg:col-span-1">
          <NewsPage />
        </div>
        {/* Select Section */}

        {/* Article Card Section */}

        <div className="lg:col-span-3">
          <div className="mb-4 lg:text-2xl">
            <p>Latest News</p>
          </div>
          <ScrollArea className="h-[650px] lg:h-[750px] rounded-md border p-4">
            <div className="">
              <NewsDialogBox />
            </div>
          </ScrollArea>
        </div>
        {/* Article Card Section */}
      </div>
    </div>
  );
};

export default News;
