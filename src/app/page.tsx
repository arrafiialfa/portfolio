import Image from "next/image";
import React from "react";
import Timeline from "@/components/Timeline";
import { experiences } from "@/contents";
import Layout from "@/components/common/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMoon,
  faSun,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "@/components/common/Navigation";

export default function Home() {
  const titleStyle = "";
  return (
    <main>
      <Layout className="bg-gradient-to-b from-brandBlue to-brandDarkGrey">
        <React.Fragment>
          <Navigation />
          <section className="py-12">
            <div className=" lato-bold  py-28 text-9xl text-brandLime w-1/3 text-center mx-auto">
              <div>HEL</div>
              <div>LO</div>
            </div>
            <div className="text-center">
              <div className=" text-2xl lato-thin-italic">I&apos;m Rafi,</div>
              <div className="font-light text-xl mt-2 text-slate-200">
                <p className="">I plan, build, and maintain solution</p>
                <p>
                  for your business as a fullstack developer and solution
                  architect
                </p>
              </div>
            </div>
            <div className=" my-12 flex gap-2 items-center  gap-x-9 shadow-md px-8 py-2 max-w-fit mx-auto rounded-md">
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-slate-300 text-slate-50"
                  icon={faGithub}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-green-700 text-green-500"
                  icon={faWhatsapp}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-slate-300 text-slate-50 "
                  icon={faEnvelope}
                />
              </a>
              <a href="https://github.com/yourgithub" className="">
                <FontAwesomeIcon
                  className="w-8 hover:text-blue-700 text-blue-500"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </section>
        </React.Fragment>
      </Layout>
      <Layout className="pt-24 bg-gradient-to-b from-brandDarkGrey to-indigo-950">
        <section className="my-12 text-xl">
          <div className="w-2/4 md:w-3/5 mx-auto mb-24">
            <p className="lato-thin mb-6 mt-6 text-center px-4">
              With over 2 years experience developing and maintaining{" "}
              <span className="font-semibold">relationships</span> AND web based
              application
            </p>
          </div>
          <div className="pt-12">
            Here,
            <p className="font-semibold">Browse some of my works</p>
            <div className="mt-12">CARDs</div>
          </div>
        </section>
      </Layout>

      <div className="bg-gradient-to-b from-brandBlue to-brandDarkGrey">
        <section className="mb-12  py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
          <h2 className="text-2xl font-semibold mb-4">Completed Projects</h2>
        </section>
      </div>
    </main>
  );
}
