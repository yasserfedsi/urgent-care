// Import your screenshots
import screenshot1 from "../assets/screenshots/screenshot1.png";
import screenshot2 from "../assets/screenshots/screenshot2.png";
import screenshot3 from "../assets/screenshots/screenshot3.png";
import screenshot4 from "../assets/screenshots/screenshot4.png";
import screenshot5 from "../assets/screenshots/screenshot5.png";

export default function Screens() {
  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
  ];

  return (
    <section id="screens" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h6 className="text-3xl font-bold text-black">
            Checkout Our Application Interface Look
          </h6>
          <p className="mt-4 text-lg text-gray-600">
            Explore the sleek and intuitive design of our mobile app.
          </p>
        </div>

        {/* Center the Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden transition-shadow duration-300"
              >
                <img
                  src={screenshot}
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
