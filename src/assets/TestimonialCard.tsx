import React, { useEffect, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation]);

interface Testimonial {
  name: string;
  comment: string;
}

interface TestimonialCardProps {
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonials }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const swiper = new SwiperCore(containerRef.current, {
        direction: "horizontal",
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <div className="testimonial-card">
      <div ref={containerRef} className="swiper-container">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="swiper-slide">
              {/* Display testimonial content */}
              <p>{testimonial.name}</p>
              <p>{testimonial.comment}</p>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
