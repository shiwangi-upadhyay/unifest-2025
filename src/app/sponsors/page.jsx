import Heading from "@/components/Heading";
export default function Home() {
  const sponsors = new Array(18).fill("/Frame 22.png");

  return (
    <div>
   
      <div className=" w-full flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center h-screen justify-center">
          <h2 
          className=" font-[Alinore] headingbg font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black] text-9xl ">
            OUR SPONSORS
          </h2>

          <p className=" font-poppins w-full flex items-center justify-center max-w-4xl text-center text-lg font-semibold text-[#E3ED7B] md:text-2xl lg:text-2xl">
            Meet the amazing partners who help make Uphoria possible. Their
            support drives our passion for creating unforgettable experiences.
          </p>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="mt-30 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
            {sponsors.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={src}
                  alt="Sponsor Logo"
                  className="w-[364px] h-[364px] object-contain pb-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
