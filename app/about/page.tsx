import Image from "next/image";
import React from "react";
import style from './styles.module.css'
const About = () => {
  return (
    <div>
      <div className={`${style.container} bg-[#F4F5F7] flex flex-col justify-center items-center dark:bg-[#0D1829]`}>
        <div className="aboutBox w-72">
          <div className=" sm:w-1/3 sm:flex sm:flex-col sm:items-center sm:justify-center hidden">
            <Image
              className="w-44 h-44 rounded-full"
              unoptimized
              src="/personImage.JPG"
              alt="personImage"
              width={80}
              height={80}
            />
          </div>
          <div className="sm:w-2/3 w-full">
            <h1 className="text-3xl p-4 mt-3">About Me</h1>
            <p className="p-4">
              Hello! I&apos;m Milad, a passionate software developer and tech
              enthusiast. I created this blog to share my experiences, tips, and
              tutorials on various programming languages and technologies. I
              believe that learning should be a continuous journey, and Im here
              to help others on their path to mastering the art of coding.
            </p>
            <p className="p-4">
              Whether you&apos;re just starting out or looking to sharpen your
              skills, you&apos;ll find a variety of resources and insights here.
              Let&apos;s explore the world of programming together!
            </p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default About;
