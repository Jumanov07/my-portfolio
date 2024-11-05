"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { NAVIGATIONS } from "@/utils/constants";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  useEffect(() => {
    const savedLink = localStorage.getItem("activeLink");

    if (savedLink) {
      setActiveLink(savedLink);
    }
  }, []);

  const handleLinkSelected = (href: string) => {
    setActiveLink(href);

    localStorage.setItem("activeLink", href);
    router.push(href);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            setActiveLink(`#${id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="mt-16 w-max">
      <ul className="hidden flex-col gap-6 lg:flex">
        {NAVIGATIONS?.map(({ href, label }) => (
          <li
            key={href}
            className={`flex items-center group cursor-pointer w-max ${
              activeLink === href && "text-slate-200"
            }`}
            onClick={() => handleLinkSelected(href)}
          >
            <span
              className={`${
                activeLink === href ? "w-16 bg-slate-200" : "w-8 bg-slate-500"
              } h-[1px] inline-block transition-all duration-150 ease-in-out group-hover:w-16 group-hover:bg-slate-200`}
            />

            <button
              className={`ml-4 text-xs font-bold tracking-widest transition-all duration-150 ease-in-out ${
                activeLink === href
                  ? "text-slate-200 ml-6"
                  : "text-slate-500 group-hover:ml-6 group-hover:text-slate-200"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-10 p-4 bg-[rgba(81,200,190,0.03)] rounded-lg shadow-md text-slate-200 text-sm flex flex-col gap-1">
        <li>
          <Link href="tel:+966551130187" className="hover:text-[#51c8be] w-max">
            +966 551 130 187
          </Link>
        </li>
        <li>
          <Link
            href="mailto:zumanovaliser814@gmail.com"
            className="hover:text-[#51c8be] w-max"
          >
            zumanovaliser814@gmail.com
          </Link>
        </li>
        <li>
          <Link
            href="https://2gis.kg/bishkek?m=74.553811%2C42.873155%2F11"
            className="hover:text-[#51c8be] w-max"
          >
            Bishkek, Kyrgyzstan
          </Link>
        </li>
      </ul>

      <ul className="flex justify-between space-x-4 mt-10 text-slate-400 text-xl">
        <li>
          <Link
            href="https://t.me/minimentor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            <FaTelegramPlane size={28} />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Jumanov07/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            <FaGithub size={28} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/alisher-jumanov/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            <FaLinkedin size={28} />
          </Link>
        </li>
        <li>
          <Link
            href="https://instagram.com/jumanov16_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            <FaInstagram size={28} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
