const FeatureCard = ({ title, description, imageSrc, altText }) => {
  return (
    <div className="p-6 rounded-lg shadow-md border border-gray-700">
      <img
        src={imageSrc}
        alt={altText}
        className="mx-auto mb-4 w-16 h-16 object-cover rounded-full"
      />
      <h2 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export const About = () => {
  return (
    <div className="container mx-auto my-10 p-8 shadow-lg rounded-lg text-center text-white">
      <h1 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">About our url shortener</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeatureCard
          title="Create short urls"
          description="Easily shorten your long URLs with our user-friendly interface. Create custom short URLs for your links in seconds."
          imageSrc={'https://t4.ftcdn.net/jpg/01/00/76/57/360_F_100765796_hVO2AGkofuyqsiiPGd4rdEkjq1FaC11k.jpg'}
          altText="Create Short URLs"
        />

        <FeatureCard
          title="Track visitors by ip"
          description="Gain insights into your link traffic. Our URL shortener provides IP tracking, allowing you to see the geographic location of your visitors."
          imageSrc={'https://cdn4.vectorstock.com/i/1000x1000/42/88/analytics-logo-data-business-technology-finance-vector-34674288.jpg'}
          altText="Track Visitors by IP"
        />

        <FeatureCard
          title="Tech support"
          description="Our dedicated tech support team is available 24/7 to assist you with any issues or questions you may have. We're here to ensure a smooth experience for our users."
          imageSrc={'https://t4.ftcdn.net/jpg/01/78/52/87/360_F_178528715_8m5PK4gcHYMrlRIxOGSSLxOAUOejrHgq.jpg'}
          altText="Tech Support"
        />

        <FeatureCard
          title="Reliability"
          description="Count on us for reliable URL shortening services. Our platform is designed to deliver consistent and dependable performance."
          imageSrc={'https://t3.ftcdn.net/jpg/02/02/81/62/360_F_202816286_pz50FFvEEUvSy2FHy4IxYOuQmviHUg99.jpg'}
          altText="Reliability"
        />

        <FeatureCard
          title="Usage statistics"
          description="Track the usage of your short URLs with detailed statistics. Monitor click-through rates, analyze user behavior, and make informed decisions."
          imageSrc={'https://static.vecteezy.com/system/resources/thumbnails/000/609/739/small/3-19.jpg'}
          altText="Usage Statistics"
        />
      </div>
      <div className="mt-8">
        <p>
          Join us and experience the power of efficient URL shortening. We are
          committed to providing top-notch services to meet all your needs.
        </p>
      </div>
    </div>
  );
};
