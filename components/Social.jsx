import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Shiyam2002", label: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/shiyamks07/", label: "LinkedIn" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/ShiyamKS/", label: "Leetcode" }, // Provide a valid YouTube link
  { icon: <FaInstagram />, path: "https://www.instagram.com/_s_h_i_y_a_m_7/", label: "Instagram" },
];

const Social = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={`flex items-center justify-center md:justify-start gap-4 md:gap-6 ${containerStyles}`}>
      {socials
        .filter((item) => item.path) // Ensures empty paths are filtered out
        .map((item, index) => (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-primary ${iconStyles}`}
          >
            {item.icon}
          </Link>
        ))}
    </div>
  );
};

export default Social;
