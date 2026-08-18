import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main About Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left - Image */}
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Our ecommerce store"
              className="h-fit w-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              About Us
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              We Make Shopping
              <span className="text-blue-600"> Simple & Better.</span>
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              We believe shopping should be simple, enjoyable, and accessible
              to everyone. Our goal is to bring quality products directly to
              your doorstep at prices you can trust.
            </p>

            <p className="mb-8 leading-7 text-gray-500">
              From everyday essentials to products you love, we carefully
              select everything available on our store to give you a smooth
              and reliable shopping experience.
            </p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-6 border-y border-gray-200 py-6">

              <div>
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="mt-1 text-sm text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="mt-1 text-sm text-gray-500">Products</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
                <p className="mt-1 text-sm text-gray-500">Customer Rating</p>
              </div>

            </div>

            {/* Button */}
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Explore Our Store
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;