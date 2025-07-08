"use client"

import { cn } from "@/lib/utils";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  const pages = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Skills", 
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Education",
      href: "#education",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="border-t border-gray-200 px-8 py-20 bg-white w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-gray-600 justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-gray-700 text-gray-600 list-none gap-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-[var(--color-deep-teal)] font-[var(--font-body)]"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-gray-600 mb-8 sm:mb-0 font-[var(--font-body)]">
            &copy; {new Date().getFullYear()} Dr. Sarah Mitchell, PhD
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com/in/sarah-mitchell" className="transition-colors hover:text-[var(--color-sage-green)]">
              <Linkedin className="h-6 w-6 text-[var(--color-deep-teal)]" />
            </Link>
            <Link href="https://github.com/sarah-mitchell" className="transition-colors hover:text-[var(--color-sage-green)]">
              <Github className="h-6 w-6 text-[var(--color-deep-teal)]" />
            </Link>
            <Link href="mailto:sarah.mitchell@health-informatics.org" className="transition-colors hover:text-[var(--color-sage-green)]">
              <Mail className="h-6 w-6 text-[var(--color-deep-teal)]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(15, 118, 110, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-[var(--color-deep-teal)] px-2 py-1 relative z-20"
    >
      <div className="w-8 h-8 bg-[var(--color-deep-teal)] text-white rounded-lg flex items-center justify-center font-[var(--font-display)] font-semibold text-lg">
        SM
      </div>
      <span className="font-medium text-[var(--color-deep-teal)] font-[var(--font-display)]">Dr. Sarah Mitchell</span>
    </Link>
  );
};
