import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
  <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
            <h1 className="text-4xl font-bold">
              Welcome to User Management <br />

              <br />
              Diving deep into Everything you need to know to know about a user.All in one place.
            </h1>

            <p>
              Enhance your personal user management with user Managents, offering a simple
              and
              efficient way to track user informations, albums, photos and access files from 
              anywhere.
              Securely check important informations, and experience
              convinience of easy file management in one
                solution.
            </p>

            <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Check It out for free!
            <ArrowRight className="ml-10" />
            </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
           <video autoPlay loop muted className="rounded-lg">
            <source 
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4" 
              />
              Your browser does not support the video tag.
           </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This app is made for informational  purposes 
        only.We 
        do not own or afffilate with user management or/any of its 
        subsidiaries in 
        any form.Copyright Disclaimer under section 107 of the copyright 
        Act
        1976, allowance is made for fair use of this video for education
        purposes.

      </p>

      
    </main>
  );
}
