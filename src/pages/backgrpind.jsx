export default function Backgrind() {
  return (
    <section>
      {/* Full-screen background */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/greenimg.jpeg')`,
        }}
      >
        {/* Navigation */}
        <nav className="pt-6">
          <ul className="flex flex-wrap gap-4 justify-center text-white font-semibold capitalize text-sm sm:text-base md:text-lg">
            <li>about</li>
            <li>services</li>
            <li>projects</li>
            <li>contact</li>
            <li>blog</li>
          </ul>
        </nav>

        {/* Hero Text */}
        <div className="flex flex-col justify-center items-center h-full bg-black/40">
          <p className="capitalize text-3xl sm:text-5xl md:text-6xl font-bold text-center text-green-600 px-4">
            anime.com
          </p>
        </div>
      </div>

      {/* Featured section */}
      <section className="py-8">
    <div className="flex justify-center gap-6 ">
            <div
          className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 bg-green-600 border-2 rounded-md shadow-md border-green-400  sm:w-3/4 md:w-1/2 mx-auto h-[40vh]"
          style={{
            backgroundImage: `url('/Air Fryer Whole Tandoori Chicken.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white font-semibold capitalize text-lg sm:text-xl">
            delicious food
          </p>
          <p className="text-sm sm:text-base text-white">
            Grilled chicken
          </p>
        </div>
            <div
          className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 bg-green-600 border-2 rounded-md shadow-md border-green-400 w-[90%] sm:w-3/4 md:w-1/2 mx-auto"
          style={{
            backgroundImage: `url('/Air Fryer Whole Tandoori Chicken.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white font-semibold capitalize text-lg sm:text-xl">
            delicious food
          </p>
          <p className="text-sm sm:text-base text-white">
            Grilled chicken
          </p>
        </div>
            <div
          className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 bg-green-600 border-2 rounded-md shadow-md border-green-400 w-[90%] sm:w-3/4 md:w-1/2 mx-auto"
          style={{
            backgroundImage: `url('/Air Fryer Whole Tandoori Chicken.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white font-semibold capitalize text-lg sm:text-xl">
            delicious food
          </p>
          <p className="text-sm sm:text-base text-white">
            Grilled chicken
          </p>
        </div>
        <div
          className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 bg-green-600 border-2 rounded-md shadow-md border-green-400 w-[90%] sm:w-3/4 md:w-1/2 mx-auto"
          style={{
            backgroundImage: `url('/Air Fryer Whole Tandoori Chicken.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white font-semibold capitalize text-lg sm:text-xl">
            delicious food
          </p>
          <p className="text-sm sm:text-base text-white">
            Grilled chicken
          </p>
        </div>
    </div>
      </section>
    </section>
  );
}
