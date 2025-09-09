import { motion } from "framer-motion";
//import profilePic from "../assets/";
import { HERO_CONTENT } from "../constants";

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
};

const ChildVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, }
    }
};

function Hero() {
    return (
        <div className="pb-4 lg:mb-36">
            {/* Flex container for image + content */}
            {/* <div className="flex flex-wrap lg:flex-row-reverse items-center"> */}
            <div className="flex justify-center">

                {/* Profile Image */}
                {/* <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Armel Kevin"
                            className="border border-stone-900 rounded-3xl"
                            width={650}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>
                </div> */}

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center mt-10 lg:mt-0"
                    //className="flex flex-col items-center lg:items-start mt-10 lg:mt-0"
                    >
                        <motion.h2
                            variants={ChildVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                        >
                            Armel Kevin
                        </motion.h2>
                        <motion.span
                            variants={ChildVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={ChildVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            variants={ChildVariants}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full px-6 py-3 text-sm font-medium text-stone-800 shadow"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default Hero;