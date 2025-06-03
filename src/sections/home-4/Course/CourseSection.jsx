import SectionHeading from "@components/Layout/SectionHeading";
import data from "./data";
import CourseCard from "@components/Cards/Course/CourseCard";
const settingsProps = {
  SectionHeading: {
    type: "double",
    title: "Browse our courses that are just right for you",
    text: "Choose from over 20,700 courses and learning paths, with dozens added every week. Top it off with courses that round out your skills and enrich your day-to-day.",
    classes: {
      title: "heading-md text-black heading-md--dm-sans",
      className: "text-center text-md-initial",
      columnLeft: "col-xxl-5 col-md-6",
      columnRight: "col-xl-5 col-md-6",
    },
  },
};
const CourseSection = () => {
  return (
    <div className="home-4_course-section bg-cream-dark section-padding">
      <div className="container">
        <SectionHeading {...settingsProps.SectionHeading} />
        <div className="row gutter-y-default">
          {data.map((item, index) => (
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              key={index}
            >
              <CourseCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
