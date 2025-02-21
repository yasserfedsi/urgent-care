import studyImg from "../assets/study.png";

export default function Hero() {
  return (
    <section className="py-24" id="home">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 pr-5 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Welcome To <span className="text-primary">Tresor Uni</span>
            </h2>
            <h2 className="text-xl md:text-2xl mb-4 whitespace-nowrap">
              Empowering USTHB students with <br /> the resources to explore,
              learn, <br /> and conquer!
            </h2>
            <h2 className="text-xl md:text-2xl text-primary">
              Explore, Learn, and Succeed!
            </h2>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/3">
            <img
              src={studyImg}
              alt="StudyImg"
              className="w-full h-auto max-w-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
