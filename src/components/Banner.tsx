import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-6 lg:px-8 py-2 mb-2 lg:mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 ">
        <div className="lg:col-span-8 flex flex-col justify-center items-center lg:items-start">
          <h1 className="font-inter text-[#0F172A] font-bold lg:font-black text-3xl lg:text-[60px] text-center lg:text-left lg:leading-14 mb-6">
            Build Your Ideal{" "}
            <p className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </p>
          </h1>
          <p className="font-jakarta text-center lg:text-left text-sm lg:text-lg text-[#475569] mb-5 lg:mb-10 lg:max-w-140 leading-5 max-w-[85%]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="pt-3 flex items-center gap-3">
            <button className="px-4 py-3 bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg text-white w-50 text-sm font-semibold font-inter cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-4 py-3 rounded-lg w-50 font-medium font-inter text-[#374151] border border-[#E5E7EB] cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 flex items-center justify-center">
          <img
            src={BannerImg}
            alt="Banner stack image"
            className="mt-5 lg:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
