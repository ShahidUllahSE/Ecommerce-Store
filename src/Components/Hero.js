import React from 'react'

function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover Your Style at 
        <br className="hidden lg:inline-block"/>Islamia Shop
      </h1>
      <p className="mb-8 leading-relaxed">Elevate your style with our handpicked collection of rings, bags, shirts, and artificial jewelry for both men and women. From timeless elegance to modern trends, we have something for every occasion. Quality is our promise, and a hassle-free shopping experience is our guarantee. Join our fashion community, stay updated on the latest trends, and share your style with us. Shop confidently at Islamia Ecommerce where fashion meets individuality..</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Visit</button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1179404709/photo/happy-family-with-trolley-shopping-together.jpg?s=170667a&w=0&k=20&c=ihprWChptXmY_iHHI-QeodLwDGpq7mxAiCMy-9ooBzU="/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
