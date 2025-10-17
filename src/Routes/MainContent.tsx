import { Courses } from "@/assets/Data/Courses";
import CourseSection from "@/components/Custom-Components/Main/Courses/CourseSection";
import Title from "@/components/Custom-Components/Main/Courses/Title";
import MottoCarouselSection from "@/components/Custom-Components/Main/Motto&Carousel/MottoCarouselSection";
import TrendingCourses from "@/components/Custom-Components/Main/TrendingCourses/Courses";

const courseCount = Courses.length;

const MainContent = () => {
  return (
    <div>
      {/* Main Motto & Corousel Section */}
      <MottoCarouselSection />
      {/* Main Motto & Corousel Section */}

      {/* Course Section */}

      {/* Title Section */}

      <Title title="Available" count={courseCount} />

      {/* Title Section */}

      <CourseSection />

      {/* Course Section */}

      {/* Trending Section */}
      <TrendingCourses />
      {/* Trending Section */}
    </div>
  );
};

export default MainContent;
