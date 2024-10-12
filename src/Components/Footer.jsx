// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex gap-6 font-lato text-gray-400">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./images/Help-Avatar.png" alt="Help" />
        <div>
          <p className="font-playfair font-thin">Have any Questions</p>
          <a className="font-lato font-medium" href="#">
            {" "}
            Talk to a Specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
