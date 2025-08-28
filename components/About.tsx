"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import CustomButtonTwo from "./CustomButtonTwo";
import { useRouter } from "next/navigation";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const router = useRouter();

  return (
    <section id="about" className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Profile photo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 40vw, 30vw"
              priority
              quality={90}
            />
          </div>
        </div>

        <div className="w-full lg:w-3/5 xl:w-2/3 lg:ml-12 xl:ml-16">
          {/* Tab Navigation */}
          <div className="flex border-b mb-8">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "about"
                  ? "border-b-4 border-current"
                  : "opacity-70"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "education"
                  ? "border-b-4 border-current"
                  : "opacity-70"
              }`}
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-lg">
            {activeTab === "about" && (
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-red-500 mb-8">
                  Software Engineer
                </h1>
                <div className="space-y-6">
                  <p className="text-lg font-light text-gray-500 ">
                    {"I'm"} a passionate Software Engineer with a sharp focus on
                    modern web development. I specialize in building fast,
                    responsive, and scalable web applications using the latest
                    technologies like React, Next.js, Node.js, and Tailwind CSS.
                    Whether {"it's"} crafting sleek user interfaces or
                    developing powerful backend systems, I bring clean code and
                    creative problem-solving to every project. Let’s turn ideas
                    into digital experiences!
                  </p>
                </div>
                <div className=" mt-10 flex items-center gap-8">
                  <a href="/cv/Kirubel Deke.pdf" download>
                    <CustomButton className="flex items-center gap-2">
                      Download CV <FaArrowDown />
                    </CustomButton>
                  </a>

                  <CustomButtonTwo
                    onClick={() => router.push("#contact")}
                    className="flex items-center gap-2"
                  >
                    Contact Me <FaArrowRight />
                  </CustomButtonTwo>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-red-500 mb-8">
                  Education Qualification
                </h1>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-medium font-light text-gray-500">
                      BSC in SE
                    </h2>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-xl font-light text-gray-500">
                      <li>Institute: Wachemo University</li>
                      <li>Session: 2021 - 25</li>
                      <li>Result: CGPA 3.71 out of 4.00</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
