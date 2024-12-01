import React from "react";
import { BookMinus, ChartColumnIncreasing, Navigation, Shrub } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[700px]" id="about">
      {/* Heading Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the section is visible
        transition={{ duration: 0.8 }}
      >
        <span className="rounded-full text-sm font-medium uppercase px-2 py-1 bg-neutral-900 text-orange-500 h-6">
          About Us
        </span>
        <h1 className="mt-5 text-3xl lg:text-4xl tracking-wide">
          Empowering{" "}
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Tomorrow's Innovators
          </span>
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="w-full">
        {/* First Row */}
        <motion.div
          className="flex flex-col lg:flex-row m-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the row is visible
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* First Box */}
          <motion.div
            className="flex justify-center items-center mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full mt-5"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          >
            <BookMinus />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            <h5 className="mt-1 mb-6 text-xl">Learning by Doing: Turning Ideas into Action</h5>
            <p>
              Hands-on experience is at the core of our approach. Through projects and workshops, we
              ensure that students apply what they learn, gaining confidence and skills that are
              useful in the real world.
            </p>
          </motion.div>

          {/* Second Box */}
          <motion.div
            className="flex justify-center items-center mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full mt-5"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          >
            <ChartColumnIncreasing />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            <h5 className="mt-1 mb-6 text-xl">Collaboration: Achieving More Together</h5>
            <p>
              We thrive on teamwork, bringing students together to share ideas and create innovative
              solutions. Collaboration allows us to combine our strengths and achieve greater
              results than working alone.
            </p>
          </motion.div>
        </motion.div>

        {/* Second Row */}
        <motion.div
          className="flex flex-col lg:flex-row m-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Third Box */}
          <motion.div
            className="flex justify-center items-center mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full mt-5"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          >
            <Navigation />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            <h5 className="mt-1 mb-6 text-xl">Inclusivity: A Community for Everyone</h5>
            <p>
              We welcome students from all backgrounds and skill levels. Whether you’re a beginner
              or an expert, GDSC GGCT provides a supportive environment where everyone can grow and
              contribute.
            </p>
          </motion.div>

          {/* Fourth Box */}
          <motion.div
            className="flex justify-center items-center mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full mt-5"
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          >
            <Shrub />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            <h5 className="mt-1 mb-6 text-xl">Empowering Growth Through Collaboration</h5>
            <p>
              Collaboration goes beyond the club, connecting students with industry experts and
              alumni. This network helps members expand their horizons and work on impactful
              projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
