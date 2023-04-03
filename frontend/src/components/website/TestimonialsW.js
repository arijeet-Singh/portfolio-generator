import React from "react";
import { uid } from "uid";
import "./TestimonialsW.css";
const FeedbackCard = ({ testimonial }) => (
  <div className="feed-con">
    <p className="quote">"</p>
    <div className="feed-super">
      <p className="feed-msg">{testimonial.feedback}</p>
      <div className="feed-master">
        <div className="feed-detail">
          <p className="name-p">{testimonial.name}</p>
          <p className="desig-com">
            {testimonial.designation} of {testimonial.organization}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsW = ({ feedback }) => {
  return (
    <>
      {feedback.length> 0 && (
        <div className="testimonials-con">
          <div className="overview-1">
            <h1 className="qwerty">Feedbacks.</h1>
          </div>
          <div className="feedback-map">
            {feedback.map((testimonial) => (
              <FeedbackCard key={uid()} testimonial={testimonial} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsW;
