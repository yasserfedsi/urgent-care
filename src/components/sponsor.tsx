import { sponsors } from "../lib/sponsors";
import { motion } from "framer-motion";

export default function Sponsor() {
  return (
    <section className="py-24 mb-28">
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium text-center text-primary mb-20">
          OUR SPONSORS
        </h1>

        {/* Smooth scrolling container */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex gap-16"
            initial={{ x: "100%" }} // Start off-screen to the right
            animate={{ x: "-100%" }} // Move off-screen to the left
            transition={{
              duration: 6, // Adjust speed (lower = faster)
              ease: "linear",
              repeat: Infinity, // Infinite loop
            }}
          >
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex-shrink-0">
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  className="w-32 h-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
