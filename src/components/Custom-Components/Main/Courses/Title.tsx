import { Separator } from "@/components/ui/separator";
interface TitleProps {
  title: string;
  count: number;
}
const Title = ({ title, count }: TitleProps) => {
  return (
    <div className="my-4 p-4  mx-auto container">
      <p className="font-bold text-xl lg:text-2xl ">
        {title} - {count}
      </p>
      <Separator className="mt-4" />
    </div>
  );
};

export default Title;
