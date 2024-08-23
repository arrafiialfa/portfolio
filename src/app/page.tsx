"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFilePdf,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faReact,
  faNodeJs,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "@/components/common/Navigation";
import Timeline from "@/components/Timeline";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const titleStyle = "";
  return (
    <main>
      <Layout className="bg-gradient-to-b bg-brandDarkGrey">
        <React.Fragment>
          <Navigation />
          <section className="py-20">
            <div
              style={{ letterSpacing: "0.2em" }}
              className="lato-bold py-28 text-8xl sm:text-9xl text-brandLime text-center"
            >
              <div>HEL</div>
              <div>LO</div>
            </div>
            <div className="flex flex-wrap  justify-center gap-2 text-center text-xl">
              <div className="basis-full">I&apos;m Rafi, </div>
              <div className="font-semibold text-blue-200">
                {"<"}Fullstack software engineer{"/>"}
              </div>
            </div>
            <div className="text-center text-xl">
              <div className="font-light text-lg mt-4 text-slate-200">
                <p className="px-20 lg:w-2/3 mx-auto text-justify">
                  I plan, build, and maintain solution for your business as a
                  fullstack developer and solution architect. With over 2 years
                  experience working in the industry transforming clients&apos;
                  needs into solution.
                </p>
                <p className=""></p>
              </div>
            </div>
            <div className=" my-12 flex gap-2 items-center  gap-x-9 shadow-md px-8 py-2 max-w-fit mx-auto rounded-md">
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="h-8 md:h-10 hover:text-slate-300 text-slate-50"
                  icon={faGithub}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="h-8 md:h-10 hover:text-green-700 text-green-500"
                  icon={faWhatsapp}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="h-8 md:h-10 hover:text-slate-300 text-slate-50 "
                  icon={faEnvelope}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="h-8 md:h-10 hover:text-blue-600 text-blue-400"
                  icon={faLinkedin}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="h-8 md:h-10 hover:text-slate-300 text-slate-50"
                  icon={faFilePdf}
                />
              </a>
            </div>
          </section>
        </React.Fragment>
      </Layout>
      <Layout className="pt-24 bg-gradient-to-b  from-brandDarkGrey bg-brandBlack ">
        <section className="my-12 text-xl">
          <p className="lato-thin  mb-6 mt-6 text-center px-4">
            Some catchy introduction About My latest project,
          </p>
          <div className="pt-12">
            <p className="lato-thin  mb-6 mt-6 text-center px-4">
              Management Information System for Worker Placement Company,
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <div className=" w-full h-52 bg-white">CARDs</div>
              </div>
              <div className="col-span-1">
                <div className=" w-full h-52 bg-white">CARDs</div>
              </div>
              <div className="col-span-1">
                <div className=" w-full h-52 bg-white">CARDs</div>
              </div>
            </div>
            <div className=" my-12 flex gap-2 items-center  gap-x-9 shadow-md px-8 py-2 max-w-fit mx-auto rounded-md">
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-slate-300 text-blue-300"
                  icon={faReact}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-green-700 text-green-500"
                  icon={faDatabase}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-slate-300 text-slate-50 "
                  icon={faNodeJs}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-blue-600 text-blue-400"
                  icon={faLaravel}
                />
              </a>
            </div>
            <div className="text-base text-justify my-4">
              Of the garden was nothing short of enchanting. Vibrant flowers of
              every hue danced in the breeze, their petals glistening with
              morning dew. The air was filled with the sweet scent of blooming
              jasmine and the earthy aroma of freshly turned soil. Butterflies
              flitted from blossom to blossom, adding splashes of color with
              their delicate wings. A cobblestone path wound through the garden,
              inviting visitors to explore its hidden nooks and crannies. In the
              center, a quaint stone fountain bubbled cheerfully, its gentle
              splashes creating a peaceful melody. Benches were strategically
              placed under the shade of ancient oaks, providing the perfect spot
              to sit and soak in the beauty of this serene haven.Starting from
              management information system, nestjs api, motobuddies app
            </div>
            <div className="text-right text-base font-semibold pt-12 text-blue-100">
              <Link className="" href="#">
                Read More ...
              </Link>
            </div>
          </div>
        </section>
      </Layout>
      <Layout className="bg-brandBlack">
        <section className="text-xl">
          <div className="py-12">
            <div className="w-2/4 md:w-3/5 mx-auto mb-24">
              <p className="lato-thin  mt-6 text-center px-4">
                My other project
              </p>
            </div>
            <div className="text-base text-justify my-12">
              Of the garden was nothing short of enchanting. Vibrant flowers of
              every hue danced in the breeze, their petals glistening with
              morning dew. The air was filled with the sweet scent of blooming
              jasmine and the earthy aroma of freshly turned soil
            </div>
            <div className="relative">
              <div
                className="flex overflow-x-auto space-x-6 w-full scroll-container"
                ref={scrollContainerRef}
              >
                <div className="flex-none w-[calc(100%-1.5rem)] md:w-1/2">
                  <div className="w-full h-96 bg-white rounded-md shadow-md">
                    CARDs
                  </div>
                </div>
                <div className="flex-none w-[calc(100%-1.5rem)] md:w-1/2">
                  <div className="w-full h-96 bg-white rounded-md shadow-md">
                    CARDs
                  </div>
                </div>
                <div className="flex-none w-[calc(100%-1.5rem)] md:w-1/2">
                  <div className="w-full h-96 bg-white rounded-md shadow-md">
                    CARDs
                  </div>
                </div>
                <div className="flex-none w-[calc(100%-1.5rem)] md:w-1/2">
                  <div className="w-full h-96 bg-white rounded-md shadow-md">
                    CARDs
                  </div>
                </div>
              </div>

              {/* Left Scroll Button */}
              <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
              >
                &#9664;
              </button>

              {/* Right Scroll Button */}
              <button
                onClick={scrollRight}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
              >
                &#9654;
              </button>
            </div>
          </div>
        </section>
      </Layout>

      <Layout className="bg-brandBlack">
        <section className="text-xl">
          <div className="py-12">
            <div className="w-2/4 md:w-3/5 mx-auto mb-24">
              <p className="lato-thin  mt-6 text-center px-4">
                Work Experiences
              </p>
            </div>
            <div>
              <Timeline />
            </div>
          </div>
        </section>
      </Layout>

      <Layout className="pt-24 bg-brandBlack">
        <div className="">
          <section className=" mt-24 max-w-6xl mx-auto text-white">
            <h2 className="text-xl  mb-4 ">Footer</h2>
          </section>
        </div>
      </Layout>
    </main>
  );
}
