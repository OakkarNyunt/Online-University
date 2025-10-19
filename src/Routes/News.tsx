import NewsCard from "@/components/Custom-Components/News/NewsCard";
import NewsPage from "@/components/Custom-Components/News/NewsPage";

const News = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-8 container mx-auto p-4 lg:p-0">
        <div className="lg:col-span-1 ">
          <NewsPage />
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
