import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Raehan123" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/raehan-nur-9476472a4/" },
  { icon: <FaInstagram />, path: "https://instagram.com/rryyhhnnn_" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@Raehahahan" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
