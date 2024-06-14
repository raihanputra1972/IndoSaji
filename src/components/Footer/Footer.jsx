import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-500 dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Detail */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              IndoSaji
            </a>
            <p className="text-sm text-gray-200 dark:text-gray-300 lg:pr-24 pt-3">
              Jl. Raya Kedung jaya No.1, Kedung jaya, Kec. Kedung jaya,
              Kabupaten Kedung jaya, Jawa Barat 45262
            </p>
            <p className="text-sm text-gray-200 dark:text-gray-300 mt-4">
              Telp. (021) 788-888-888
            </p>
            <a
              href="mailto:indosaji@gmail.com"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              IndoSaji
            </a>
          </div>

          {/* Footer Links */}
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
