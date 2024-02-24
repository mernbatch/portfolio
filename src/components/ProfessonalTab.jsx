import React from "react";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { motion } from "framer-motion";

const ProfessonalTab = () => {
  const skillArray = [
    {
      title: "Photoshot",
      score: "100%",
    },
    {
      title: "Figma",
      score: "90%",
    },
    {
      title: "ADOBE XD.",
      score: "80%",
    },
    {
      title: "ADOBE ILLUSTRATOR",
      score: "70%",
    },
    {
      title: "DESIGN",
      score: "90%",
    },
  ];

  return (
    <div className="flex justify-between gap-20">
      <div className="w-1/2">
        <div className="flex flex-col items-start">
          <Subtitle title="Features" className="capitalize text-start mb-2" />
          <Title title="My Skills" className="text-[40px]" />
        </div>
        <div className="mt-10">
          <div>
            <p className="text-sm font-base text-start">Photoshot</p>
            <div className="w-full overflow-hidden py-2">
              <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className={`w-[100%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-400`}
                >
                  <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
                    {/* {item?.score} */}
                    100%
                  </span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-base text-start">Figma</p>
            <div className="w-full overflow-hidden py-2">
              <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className={`w-[90%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-400`}
                >
                  <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
                    {/* {item?.score} */}
                    90%
                  </span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-base text-start">ADOBE XD.</p>
            <div className="w-full overflow-hidden py-2">
              <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className={`w-[70%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-400`}
                >
                  <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
                    70%
                  </span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-base text-start">ADOBE ILLUSTRATOR</p>
            <div className="w-full overflow-hidden py-2">
              <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className={`w-[75%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-400`}
                >
                  <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
                    75%
                  </span>
                </motion.span>
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-base text-start">DESIGN</p>
            <div className="w-full overflow-hidden py-2">
              <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className={`w-[90%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-400`}
                >
                  <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
                    90%
                  </span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <div className="flex flex-col items-start">
            <Subtitle title="Features" className="capitalize text-start mb-2" />
            <Title title="Development Skill" className="text-[40px]" />
          </div>
          <div className="mt-10">
            {skillArray.map((item) => (
              <div key={item?.title}>
                <p className="text-sm font-base text-start">{item?.title}</p>
                <div className="w-full overflow-hidden py-2">
                  <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
                    <motion.span
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className={`w-[80%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-400`}
                    >
                      <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
                        {/* {item?.score} */}
                        80%
                      </span>
                    </motion.span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessonalTab;
