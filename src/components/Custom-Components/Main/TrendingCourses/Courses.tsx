import { Courses } from "@/assets/Data/Courses";
import CourseSection from "../Courses/CourseSection";
import Title from "../Courses/Title";

const courseCount = Courses.length;
const TrendingCourses = () => {
  return (
    <div className="">
      <Title title="Trending Courses" count={courseCount} />
      <CourseSection />
    </div>
  );
};

export default TrendingCourses;
