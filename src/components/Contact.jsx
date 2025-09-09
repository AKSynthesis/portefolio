import { useRef, useState } from "react";
//import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

function Contact() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const text = "Say Hello";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        const email = form.current.user_email.value.trim();
        const message = form.current.user_message.value.trim();

        // Basic validation
        if (!email || !message) {
            setError("Please fill in both email and message.");
            setTimeout(() => setError(""), 5000);
            return;
        }

        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            setTimeout(() => setError(""), 5000);
            return;
        }

        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_PUBLIC_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setSuccess(true);
                    form.current.reset();
                    setTimeout(() => setSuccess(false), 5000);
                },
                () => {
                    setError("Something went wrong");
                    setTimeout(() => setError(""), 5000);
                },
            )
            .finally(() => setLoading(false));
    };

    return (
        <div className="border-t border-stone-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Get in Touch
            </motion.h2>

            <div className="h-full">
                <div className="h-full flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-12 px-4 sm:px-8 lg:px-20 py-8">
                    {/* TEXT CONTAINER */}
                    <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
                        <div>
                            {text.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity, delay: index * 0.1
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            😉
                        </div>
                    </div >
                    {/* FORM CONTAINER */}
                    <form
                        onSubmit={sendEmail}
                        ref={form}
                        className="h-1/2 lg:h-full lg:w-1/2 bg-white/10 backdrop-blur-md rounded-xl flex flex-col gap-6 
                        justify-center p-8 sm:p-12 lg:p-16 shadow-lg border border-white/20"
                    >
                        <span className="text-lg font-medium text-white">Dear Kevin</span>
                        <textarea
                            rows={6}
                            placeholder="Enter your message"
                            name="user_message"
                            className="bg-transparent border-b-2 border-b-white/50 outline-none resize-none"
                        />
                        <span className="text-lg font-medium text-white">My mail address is:</span>
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="user_email"
                            className="bg-transparent border-b-2 border-b-white/50 outline-none"
                        />
                        <span className="text-lg font-medium text-white">Regards</span>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-purple-300 hover:bg-purple-400 rounded-xl font-semibold text-black py-3"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>

                        {success && <span className="text-green-600 font-semibold">Your message has been sent successfully</span>}
                        {error && <span className="text-red-600 font-semibold">{error}</span>}
                    </form>
                </div >
            </div >
        </div>
    );
}

export default Contact;
