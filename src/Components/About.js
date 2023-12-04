import React from "react";

const About = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Stylist Shop
          </h2>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base">
              Elevate your style with our handpicked collection of rings, bags,
              shirts, and artificial jewelry for both men and women. From
              timeless elegance to modern trends, we have something for every
              occasion. Quality is our promise, and a hassle-free shopping
              experience is our guarantee. Join our fashion community, stay
              updated on the latest trends, and share your style with us. Shop
              confidently at Islamia Ecommerce where fashion meets
              individuality..
            </p>
            <div class="flex md:mt-4 mt-6">
          
              <a class="text-green-500 inline-flex items-center ml-4 cursor-pointer">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
