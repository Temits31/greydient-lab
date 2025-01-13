import React from 'react';
import Image from 'next/image';

export default function ArticleSix() {
  return (
    <div className="my-28 flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Left Article */}
      <article className="flex-1 flex flex-col items-center md:items-start justify-between gap-8">
        <div>
          <span className="text-pink-500 text-lg font-medium">KEY FEATURES</span>
          <h1 className="text-3xl font-bold text-gray-800">We offer best services</h1>
          <p className="text-gray-600 mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-6">
          {[
            { bg: 'bg-orange-600', title: 'We offer best services', description: 'It has roots in a piece of classical' },
            { bg: 'bg-yellow-300', title: 'Best quality assurance', description: 'Contrary to popular belief' },
            { bg: 'bg-pink-400', title: 'Explore unique features', description: 'Lorem Ipsum is not random text' },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 border rounded-3xl shadow-lg"
            >
              <div className={`p-4 rounded-3xl ${feature.bg}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="solid"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">{feature.title}</h2>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Right Article */}
      <article className="flex-1 flex justify-center items-center relative">
        <div className="relative">
          <Image
            loading="lazy"
            src="/assets/bg-offers.svg"
            alt="Background Illustration"
            width={300}
            height={300}
            className="absolute top-0 -right-20 -z-10"
          />
          <Image
            loading="lazy"
            src="/assets/img-offers.webp"
            alt="Main Offer"
            width={443}
            height={665}
            className="z-10 -left-20"
          />
          <Image
            loading="lazy"
            src="/assets/img-offers2.webp"
            alt="Main Offer"
            width={443}
            height={665}
            className="absolute -bottom-28 -right-20"
          />
        </div>
      </article>
    </div>
  );
}
