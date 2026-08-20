import React from "react";

const About = () => {
  return (
    <section className="w-full h-screen bg-red-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main About Content */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* ================= LEFT - IMAGE ================= */}

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-red-100
              bg-white
              p-3
              shadow-lg
            "
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Our ecommerce store"
              className="
                h-[500px]
                w-full
                rounded-xl
                object-cover
              "
            />
          </div>

          {/* ================= RIGHT - CONTENT ================= */}

          <div className="flex h-[500px] flex-col justify-center">

            {/* Small Heading */}
            <p
              className="
                mb-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-red-800
              "
            >
              About Us
            </p>

            {/* Main Heading */}
            <h2
              className="
                mb-4
                text-4xl
                font-bold
                leading-tight
                text-gray-900
                md:text-[42px]
              "
            >
              We Make Shopping
              <span className="block text-red-900">
                Simple & Better.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mb-3
                text-base
                leading-7
                text-gray-600
              "
            >
              We believe shopping should be simple, enjoyable, and
              accessible to everyone. Our goal is to bring quality
              products directly to your doorstep at prices you can trust.
            </p>

            {/* Second Description */}
            <p
              className="
                mb-5
                text-sm
                leading-6
                text-gray-500
              "
            >
              From everyday essentials to products you love, we carefully
              select everything available on our store to give you a smooth
              and reliable shopping experience.
            </p>

            {/* ================= STATS ================= */}

            <div
              className="
                mb-5
                grid
                grid-cols-3
                gap-4
                border-y
                border-red-200
                py-4
              "
            >

              {/* Customers */}
              <div>
                <h3 className="text-2xl font-bold text-red-950">
                  10K+
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Happy Customers
                </p>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-2xl font-bold text-red-950">
                  500+
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Products
                </p>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-2xl font-bold text-red-950">
                  4.9/5
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Customer Rating
                </p>
              </div>

            </div>

            {/* ================= BUTTON ================= */}

            <button
              className="
                w-fit
                rounded-lg
                border-2
                border-red-900
                bg-red-900
                px-6
                py-2.5
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-red-950
                active:scale-95
              "
            >
              Explore Our Store
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;