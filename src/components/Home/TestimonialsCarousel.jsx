import React, { useState, useEffect, useRef } from "react";
import WhiteBoy from "../../assets/TestimonialProfiles/WhiteBoy.png";
import WhiteBoy1 from "../../assets/TestimonialProfiles/WhiteBoy1.png";
import DarkBoy from "../../assets/TestimonialProfiles/DarkBoy.png";
import Girl1 from "../../assets/TestimonialProfiles/Girl1.png";
import DarkGirl from "../../assets/TestimonialProfiles/DarkGirl.png";
import Girl2 from "../../assets/TestimonialProfiles/Girl2.png";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      text: "Renting a wheelchair was super quick and hassle-free. The quality was excellent and helped me recover comfortably.",
      name: "Ramesh Kumar",
      role: "Customer",
      image: WhiteBoy,
    },
    {
      id: 2,
      text: "I rented a walker for my mom after her surgery. The delivery was fast, and the support team was extremely helpful.",
      name: "Anita Verma",
      role: "Caregiver",
      image: Girl1,
    },
    {
      id: 3,
      text: "MobilityHub made it so easy to rent a hospital bed for home care. Clean, sturdy, and exactly what we needed.",
      name: "Rahul Srinivasan",
      role: "Customer",
      image: WhiteBoy1,
    },
    {
      id: 4,
      text: "The wheelchair we rented was in perfect condition. It gave my father the confidence to move around again.",
      name: "Meera Joshi",
      role: "Daughter",
      image: DarkGirl,
    },
    {
      id: 5,
      text: "Amazing service! The mobility aids were well-sanitized and looked almost new. Highly recommended.",
      name: "Sandeep Menon",
      role: "Customer",
      image: DarkBoy,
    },
    {
      id: 6,
      text: "I needed a wheelchair urgently, and they delivered within hours. Great support and excellent quality products.",
      name: "Priya Nair",
      role: "Customer",
      image: Girl2,
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const speed = 1; // pixels per frame
    let animationId;

    const scroll = () => {
      scrollPosition += speed;

      // Get the width of one set of testimonials (including gap)
      const cardWidth = 380 + 32; // card width + gap
      const totalWidth = cardWidth * testimonials.length;

      // Reset when we've scrolled through one complete set
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [testimonials.length]);

  // Create enough copies to fill the screen and create seamless loop
  const repeatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="min-h-screen  bg-[#F5F1E8] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4">
            What Our Client's Say
          </h1>
          <p className="text-lg text-gray-600">
            Testimonials & Reviews – What our customers are saying
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8"
            style={{
              willChange: "transform",
            }}
          >
            {repeatedTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="bg-white rounded-2xl p-8 shadow-md flex-shrink-0"
                style={{ width: "380px" }}
              >
                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 min-h-[120px]">
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  {/* Name and Role */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-orange-500 font-semibold">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-10 md:w-62 h-full bg-gradient-to-r from-orange-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-10 md:w-62 h-full bg-gradient-to-l from-orange-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
}
