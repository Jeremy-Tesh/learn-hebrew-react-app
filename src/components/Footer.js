import React from "react";

function Footer() {
  return (
    <footer className="relative bottom-0 bg-[#23282d] text-white  shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-white sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a
          href="https://flowbite.com"
          className="text-white no-underline mr-4 hover:underline md:mr-6"
        >
          Hooked on Hebrew
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm  text-white sm:mt-0">
        <li>
          <a
            href="/about"
            className="text-white no-underline mr-4 hover:underline md:mr-6 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-white no-underline mr-4 hover:underline md:mr-6"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-white no-underline mr-4 hover:underline md:mr-6"
          >
            Licensing
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white no-underline hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
