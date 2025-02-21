export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#162f93] text-white">
      <div className="max-w-[1140px] mx-auto px-5">
        {/* Flex container for sections */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Brand and Description Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">
              Urgentcare
              <span className="block mt-1 text-sm font-normal text-white opacity-80">
                every seconds count
              </span>
            </h2>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="mailto:contact@urgentcare.com"
                  className="hover:text-white transition-colors"
                >
                  contact@urgentcare.com
                </a>
              </li>
              <li>Algiers, Algeria</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="/legal-notice"
                  className="hover:text-white transition-colors"
                >
                  Legal Notice
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="https://instagram.com/urgentcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/urgentcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/urgentcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-600" />

        {/* Copyright and Developer Section */}
        <div className="text-center text-sm opacity-80">
          © {year} Urgentcare. All rights reserved.
          <br />
          Designed and developed by{" "}
          <a
            href="https://z3c.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Z3C
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
