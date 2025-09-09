import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di"
import { SiSocketdotio } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { RiTailwindCssFill } from "react-icons/ri";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

function Technologies() {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies

            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 2.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400  transform hover:scale-110 transition duration-300" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4"
                >
                    <TbBrandNextjs className="text-7xl text-white transform hover:scale-110 transition duration-300" />
                </motion.div >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4"
                >
                    <RiTailwindCssFill className="text-7xl text-sky-400 transform hover:scale-110 transition duration-300" />
                </motion.div >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4"
                >
                    <SiMongodb className="text-7xl text-green-500 transform hover:scale-110 transition duration-300" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4"
                >
                    <SiSocketdotio className="text-7xl text-white transform hover:scale-110 transition duration-300" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4"
                >
                    <FaNodeJs className="text-7xl text-green-700 transform hover:scale-110 transition duration-300" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4"
                >
                    <BiLogoPostgresql className="text-7xl hover:text-blue-500 transform hover:scale-110 transition duration-300" />
                </motion.div>
            </motion.div >
        </div >
    );
}

export default Technologies;