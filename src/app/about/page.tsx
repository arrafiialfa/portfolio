"use client";

import React, { useRef } from "react";
import Layout from "@/components/common/Layout";

import Navigation from "@/components/common/Navigation";
import Timeline from "@/components/Timeline";

import { experiences, organizations } from "@/contents/experiences";

export default function About() {
  return (
    <main>
      <Layout className="sticky top-0 shadow-md bg-gradient-to-r from-brandBlack to-brandDarkGrey z-40 py-5">
        <Navigation />
      </Layout>

      <Layout className="bg-brandBlack">
        <section className="text-xl">
          <div className="py-12">
            <div className="w-2/4 md:w-3/5 mx-auto mb-12 py-24">
              <p className="lato-thin    text-center px-4">Work Experiences</p>
              <p className="lato-thin-italic  mb-6 mt-6 text-center px-4 ">
                I am passionate in creating impactful solutions that satisfies
                stakeholders and add values for businesses,
              </p>
            </div>
            <div className="">
              <Timeline
                bannerClassName="bg-gradient-to-r from-brandBlue to-brandGrey"
                experiences={experiences}
              />
            </div>
          </div>
        </section>
      </Layout>

      <Layout className="bg-brandBlack pb-52">
        <section className="text-xl">
          <div className="pb-20 px-3 md:px-20 xl:px-32 2xl:px-52">
            <p className="lato-thin-italic  mb-6 mt-6 text-center px-4 text-lime-100">
              I am also an easygoing extrovert with a lot of leadership
              experiences. If you are curious you can click here
            </p>
          </div>
          <div className="">
            <Timeline
              bannerClassName=" bg-gradient-to-r from-orange-500 to-brandBlue "
              experiences={organizations}
            />
          </div>
        </section>
      </Layout>
    </main>
  );
}
