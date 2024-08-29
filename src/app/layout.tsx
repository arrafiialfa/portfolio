import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Portfolio Arrafii Alfa",
  description:
    "Web Portfolio Fullstack Developer by Arrafii Alfa made by Next.js, React.js, and Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body className={inter.className}>
        {children}
        <Layout className="pt-32 bg-brandDarkGrey">
          <footer className=" py-6">
            <div className="container mx-auto px-4 sm:px-20">
              <div className="flex justify-between gap-4">
                {/* Address */}
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p>123 Main Street, City, Country</p>
                </div>

                {/* Contact Information */}
                <div>
                  <h4 className="text-lg font-semibold">Contact</h4>
                  <p>WhatsApp: +1234567890</p>
                  <p>Email: example@example.com</p>
                </div>

                {/* Social Media */}
                <div className="">
                  <h4 className="text-lg font-semibold">Follow Me</h4>
                  <p>
                    <a
                      href="https://github.com/yourusername"
                      className="hover:text-gray-400"
                    >
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://instagram.com/yourusername"
                      className="hover:text-gray-400"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-24 text-center text-lime-100">
                <p>
                  &copy; {new Date().getFullYear()} Ar Rafii Alfa. All rights
                  reserved.
                </p>
                <p>Website made using Next.js, React, and Tailwindcss</p>
              </div>
              <p className="text-center pt-24 text-sm">
                Take a look at the repo{" "}
                <span className="font-semibold">
                  here.{" "}
                  <a href="https://github.com/yourgithub" className="">
                    <FontAwesomeIcon
                      className="h-5  hover:text-slate-300 text-slate-50"
                      icon={faGithub}
                    />
                  </a>
                </span>
              </p>
            </div>
          </footer>
        </Layout>
      </body>
    </html>
  );
}
