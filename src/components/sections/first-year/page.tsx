import { firstYear } from "../../../lib/drives";

export default function page({ title }: { title: string }) {
  return (
    <section id="drives" className="py-14">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Top Content */}
        <div className="text-center mb-12">
          <h6 className="text-2xl font-medium text-primary">{title}</h6>
        </div>

        {/* Items Wrapper */}
        <div className="flex flex-wrap justify-evenly gap-8">
          {firstYear.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#0f123d] via-[#0f123d] to-[#0b2945] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)] p-8 text-center rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <span className="w-16 h-16 mx-auto mb-6 rounded-md bg-[#151e4f] flex items-center justify-center">
                <img
                  src={item.icon}
                  alt=""
                  width={65}
                  height={65}
                  className="hidden"
                />
              </span>

              {/* Title */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-primary hover:text-white transition-colors duration-500"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
