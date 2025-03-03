import { motion } from "framer-motion";
import { screenshots } from "../lib/utils";

export default function Screens() {
  return (
    <section id="screens" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h6 className="text-3xl font-bold text-[#2d5baa]">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }} // Stagger effect
                viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the element is in view
                className="rounded-lg overflow-hidden transition-shadow duration-300"
              >
                <img
                  src={screenshot}
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
