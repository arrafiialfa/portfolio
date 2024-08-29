"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFilePdf,
  faDatabase,
  faComputer,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faReact,
  faNodeJs,
  faGithubAlt,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "@/components/common/Navigation";
import { projects } from "@/contents/projects";

import Image from "next/image";
import Infographic from "@/components/Infographic";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons/faSquareGithub";

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

  const MISHighlights: {
    title: string;
    source: string;
    description?: string;
  }[] = [
    {
      title: "Dashboard",
      source: "/MIS/dashboard.png",
    },
    {
      title: "Search And Export",
      source: "/MIS/pmilist.png",
      description:
        "Robust search bar that searches for multiple worker criteria with an export to excel functions that helps managers make data-driven decisions",
    },
    {
      title: "Process Tracking",
      source: "/MIS/processtracking2.png",
      description:
        "Progress tracking system of worker processes that helps managers keep tracks of their processes' completion time/rates",
    },
    {
      title: "User Defined Processes",
      source: "/MIS/userdefinedprocessflow.png",
      description:
        "Adaptable process flow that takes user defined flow graph and use it as the baseline for the progress tracking of worker processes. This system is currently being researched to better suit the application and stakeholders",
    },
    {
      title: "Robust Authentication & Authorization",
      source: "/MIS/userrolepermissions.png",
      description:
        "Autenthication and authorization method to make sure the system only gives information to authenticated and authorized users",
    },
  ];

  return (
    <main>
      <Layout className="sticky top-0 shadow-md bg-gradient-to-r from-brandBlack to-brandDarkGrey z-40 ">
        <Navigation />
      </Layout>
      <Layout className="bg-gradient-to-r from-brandBlack to-brandDarkGrey">
        <section className="py-20">
          <div
            style={{ letterSpacing: "0.2em" }}
            className="lato-bold py-28 text-8xl sm:text-9xl text-brandLime text-center "
          >
            <div className="flex justify-center gap-8 ">
              <div className="bg-blue-700 pr-8 ml-8 text-white intersect:animate-bounce animate-ease-out  ">
                H
              </div>{" "}
              <div className="">E</div> <div className="">L</div>
            </div>
            <div className="flex justify-center gap-8">
              <div className="">L</div> <div className="">O</div>{" "}
            </div>
          </div>
          <div className="flex flex-wrap  justify-center gap-2 text-center text-xl">
            <div className="basis-full">I&apos;m Rafi, </div>
            <div className="font-semibold text-blue-200">
              {"<"}Fullstack software engineer{"/>"}
            </div>
          </div>
          <div className="text-center text-xl">
            <div className="font-light text-lg mt-4 text-slate-200">
              <p className="px-20 lg:w-2/3 mx-auto text-center">
                I plan, build, and maintain solution for your businesses as a
                fullstack developer.
                {/* With over 2 years
                experience working in the industry transforming clients&apos;
                needs into solution. */}
              </p>
              <p className=""></p>
            </div>
          </div>
          <div className=" my-12 flex gap-2 items-center  gap-x-9 shadow-md px-8 py-2 max-w-fit mx-auto rounded-md intersect:animate-fade-left animate-once animate-ease-out ">
            <a href="https://github.com/arrafiialfa" className="">
              <FontAwesomeIcon
                className="h-8  hover:text-slate-300 text-slate-50"
                icon={faGithub}
              />
            </a>
            <a href="https://wa.me/+6282123587778" className="">
              <FontAwesomeIcon
                className="h-8  hover:text-green-700 text-green-500"
                icon={faWhatsapp}
              />
            </a>
            <a href="mailto:arrafiialfa.m@gmail.com" className="">
              <FontAwesomeIcon
                className="h-8  hover:text-slate-300 text-slate-50 "
                icon={faEnvelope}
              />
            </a>
            <a href="https://www.linkedin.com/in/arafii-alfa/" className="">
              <FontAwesomeIcon
                className="h-8  hover:text-blue-600 text-blue-400"
                icon={faLinkedin}
              />
            </a>
            <a href="/ArrafiiAlfa_CV.pdf" className="">
              <FontAwesomeIcon
                className="h-8  hover:text-slate-300 text-slate-50"
                icon={faFilePdf}
              />
            </a>
          </div>
        </section>
      </Layout>
      <Layout className="pt-24 bg-gradient-to-b  from-brandDarkGrey bg-brandBlack ">
        <section className="my-12 text-xl">
          <div className="pb-20 px-3 md:px-20 xl:px-32 2xl:px-52">
            <p className="lato-thin-italic  mb-6 mt-6 text-center px-4 text-lime-100 intersect:animate-fade-down animate-once animate-ease-out">
              I am passionate in creating impactful solutions that satisfies
              stakeholders and add values for businesses.{" "}
              <span className="font-semibold">
                And it is reflected in one of my latest project,{" "}
              </span>{" "}
            </p>
          </div>
          <div className="text-lg font-semibold text-center p-6  md:px-20  bg-brandBlack rounded">
            A Management Information System of Migrant Worker Placement Company
          </div>
          <div className="col-span-1 px-4 pt-8 ">
            <div className="text-base text-justify my-4">
              A project where I implemented a comprehensive management
              information system that significantly improved company operations.
              With features such as progress tracking of each worker, monitoring
              and reporting, and robust user authentication and authorization
              mechanisms
              <span className="font-semibold">
                See below for feature details
              </span>
            </div>
          </div>
          <div className="pt-12">
            <div className="relative intersect:animate-fade-right animate-once animate-ease-out">
              <div
                className="flex overflow-x-auto space-x-4 w-full scroll-container"
                ref={scrollContainerRef}
              >
                {MISHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="flex-none w-[calc(100%-1.5rem)] md:w-1/2 rounded-sm "
                  >
                    <div
                      style={{ height: "24rem" }}
                      className="relative w-full cursor-pointer bg-white rounded-sm shadow-md overflow-clip "
                    >
                      <Image
                        className="rounded-sm p-1"
                        alt={highlight.title}
                        src={highlight.source}
                        fill={true}
                        objectFit="cover"
                      />
                      <div className="cursor-pointer h-52 bg-white/50 backdrop-blur-2xl rounded-t-sm text-slate-800  text-xl px-8 py-6 absolute bottom-0 -right-1 -left-1 shadow">
                        <div className=" text-slate-100 px-5 py-0.5 bg-brandBlue rounded-md shadow">
                          {highlight.title}
                        </div>
                        <div className="animate-fade-up animate-once animate-ease-out text-sm text-justify my-4 px-2">
                          {highlight.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Left Scroll Button */}
              <button
                onClick={scrollLeft}
                className="absolute top-1/2 -left-10 transform -translate-y-1/2  hover:bg-slate-300 p-2  rounded-full shadow-md"
              >
                &#9664;
              </button>

              {/* Right Scroll Button */}
              <button
                onClick={scrollRight}
                className="absolute top-1/2 -right-10 transform -translate-y-1/2  hover:bg-slate-300 p-2  rounded-full shadow-md"
              >
                &#9654;
              </button>
            </div>
            <div className=" my-12 flex justify-between gap-2 items-center  gap-x-9 shadow-md px-8 py-2  rounded-md">
              <div className="flex justify-around gap-2 gap-x-9">
                Tech Stack{" "}
                <FontAwesomeIcon
                  className="cursor-pointer text-2xl hover:text-slate-300 text-blue-300"
                  icon={faReact}
                />
                <FontAwesomeIcon
                  className="cursor-pointer text-2xl hover:text-green-700 text-green-500"
                  icon={faDatabase}
                />
                <FontAwesomeIcon
                  className="cursor-pointer text-2xl hover:text-slate-300 text-slate-50 "
                  icon={faNodeJs}
                />
              </div>

              <div className="flex gap-4 text-right text-base font-semibold text-lime-200">
                <Link
                  className=""
                  href="https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/13866/6170"
                >
                  Read More
                  <FontAwesomeIcon
                    className="px-2 hover:text-blue-600 text-white"
                    icon={faBook}
                  />
                </Link>
                <Link
                  className="intersect:animate-bounce animate-once"
                  href="https://abkcms-git-dev-arrafiialfas-projects.vercel.app/"
                >
                  Demo
                  <FontAwesomeIcon
                    className="px-2 hover:text-blue-600 text-white"
                    icon={faComputer}
                  />
                </Link>
              </div>
            </div>

            <div className="py-32 px-3 md:px-20 xl:px-32 2xl:px-52">
              <p className="lato-thin-italic  mb-6 mt-6 text-center px-4 text-lime-100 intersect:animate-fade-up animate-once animate-ease-out">
                The development process followed Iterative SDLC methodology,
                from business process modeling and requirements engineering to
                design, implementation, rigorous functional and unit testing to
                user review for further development iterations.
              </p>
            </div>
            <Infographic />
          </div>
        </section>
      </Layout>
      <div className="px-6 lg:px-32  mx-auto bg-gradient-to-r from-brandBlack to-black">
        <section className="text-xl pb-24">
          <div className="py-24">
            <div className="text-center text-2xl  py-20 text-slate-200 font-bold">
              Explore Other Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => {
                return (
                  <div
                    key={project.id}
                    className="flex flex-col  justify-between grow p-6 border border-solid  border-opacity-70 border-slate-100 rounded-md"
                  >
                    <div>
                      <div className="font-semibold mb-4">
                        {project.projectName}
                      </div>
                      <div className="text-slate-100 font-light text-base ">
                        {project.description}
                      </div>
                    </div>
                    <div className="flex gap-4 text-right text-base font-semibold text-slate-300 mt-8">
                      <Link className="" href={project.repository ?? "#"}>
                        Repository
                        <FontAwesomeIcon
                          className="px-2 hover:text-blue-600 text-blue-300 "
                          icon={faGithub}
                        />
                      </Link>
                      {project.demo && (
                        <Link className="" href={project.demo ?? "#"}>
                          Demo
                          <FontAwesomeIcon
                            className="px-2 hover:text-blue-600 text-blue-300"
                            icon={faComputer}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
