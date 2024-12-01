import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import video1 from "../assets/gdgvideo.mp4";
import video2 from "../assets/gdgvideo.mp4";

const HeroSection = () => {
  return (
    <div id="home">
      {/* Title Section */}
      <motion.div
        className="flex justify-center flex-col lg:mt-20 sm:mt-[60px] mt-20 text-3xl lg:text-7xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the section is visible
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center">
          GDG On Campus{" "}
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Gyan
          </span>
        </h1>
        <h1 className="text-center lg:text-5xl bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
          Ganga College of Technology
        </h1>
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="flex justify-center items-center flex-col text-center flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <p className="text-neutral-600 max-w-4xl mt-4 md:text-1xl sm:px-2 py-2 lg:m-4 m-5">
          Google Developer Groups (GDG) On Campus is a university-based
          initiative that empowers students to grow in technology <br />
          through events, workshops, and networking. It provides a platform to
          learn, collaborate, and innovate <br />
          with Google's technologies while connecting with a vibrant community
          of developers!
        </p>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        className="flex justify-center items-center flex-row gap-10 mt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded bg-gradient-to-r from-blue-500 to-orange-500 px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5"
        >
          <a href="https://www.instagram.com/gdg_ggct/">Connect With Us</a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded bg-gradient-to-r border px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5"
        >
          <a href="#contact">Contact Us</a>
        </motion.button>
      </motion.div>

      {/* Videos Section */}
      <motion.div
        className="flex justify-center items-center flex-col gap-10 mt-10 lg:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-2/3 border-orange-700 shadow-orange-400 mx-2 my-4 lg:w-1/3"
          whileHover={{ scale: 1.05 }}
        >
          <source src={video1} type="video/mp4" />
          Your browser doesn't support video.
        </motion.video>
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-2/3 border-orange-700 shadow-orange-400 mx-2 my-4 lg:w-1/3"
          whileHover={{ scale: 1.05 }}
        >
          <source src={video2} type="video/mp4" />
          Your browser doesn't support video.
        </motion.video>
      </motion.div>
    </div>
  );
};

export default HeroSection;
