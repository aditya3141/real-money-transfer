// CourseCard component
import Button from '@components/Buttons'
const CourseCard = ({ title, image, meta, buttonText }) => {
    return (
        <div className="course-card h-100">
          <div className="course-card__image">
            <img src={image} alt={`${title} image`} className="w-100" />
          </div>
          <div className="course-card__body">
            <div className="course-card__meta">
              <div className="course-card__meta-tag">
                <span>{meta.tag}</span>
                <span>{meta.courseAmount}</span>
              </div>
              <div className="course-card__meta-rating">
                <i className="fa-solid fa-star" />
                {meta.rating}
              </div>
            </div>
            <h3 className="course-card__title">{title}</h3>
          </div>
          <div className="course-card__footer">
            <Button
              href="/pricing-2"
              animation={false}
              className="btn-primary-l04 btn-shadow rounded-pill w-100 btn-shadow--reverse btn-shadow--reverse-center"
            >
             {buttonText}
            </Button>
          </div>
        </div>
    );
  };

  export default CourseCard