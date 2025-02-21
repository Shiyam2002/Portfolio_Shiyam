"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const info = [
    {
        icon: <FaPhoneAlt />,
        titte: "Phone",
        description: "(+91) 9944117511",
    },
    {
        icon: <FaEnvelope />,
        titte: "Email",
        description: "k.s.shiyam2002@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        titte: "Address",
        description: "Salem, India",
    },
];

const Contact = () => {
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null); // "success" or "error"
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = (formData) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (!formData.get("firstname") || !formData.get("secondname")) {
            return "First and second names are required.";
        }
        if (!emailRegex.test(formData.get("email"))) {
            return "Please enter a valid email address.";
        }
        if (!phoneRegex.test(formData.get("phone"))) {
            return "Please enter a valid 10-digit phone number.";
        }
        if (!formData.get("message")) {
            return "Message cannot be empty.";
        }
        return null; // No errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target;
        const formData = new FormData(form);
        const validationError = validateForm(formData);

        if (validationError) {
            setMessageType("error");
            setMessage(validationError);
            setIsLoading(false);
            setTimeout(() => setMessage(null), 5000); // Clear message after 5 seconds
            return;
        }

        try {
            await emailjs.send(
                "service_1hxq8jm",
                "template_1n3pk0x",
                {
                    from_name: `${formData.get("firstname")} ${formData.get("secondname")}`,
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                    reply_to: formData.get("email"),
                },
                "WMBYESYCQpaK9613B"
            );

            setMessageType("success");
            setMessage("Thank you! Your message has been successfully sent. I will get back to you shortly.");
            form.reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            setMessageType("error");
            setMessage("Something went wrong while sending your message. Please try again later.");
        } finally {
            setIsLoading(false);
            setTimeout(() => setMessage(null), 5000); // Clear message after 5 seconds
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="flex-1 order-1 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-4xl text-cyan-400">Let's work together</h3>
                            <p className="text-white/60">
                                Fill out the form below to get in touch with me.
                            </p>

                            {/* Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" type="text" placeholder="Firstname" />
                                <Input name="secondname" type="text" placeholder="Secondname" />
                                <Input name="email" type="email" placeholder="Email Address" />
                                <Input name="phone" type="tel" placeholder="Phone Number" />
                            </div>

                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />

                            {/* Button */}
                            <Button size="md" className="max-w-40" type="submit" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-2 xl:order-none mb-8 xl:mb-0 relative">
                        {/* Message Display */}
                        {message && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.3, ease: "easeOut" },
                                }}
                                exit={{ opacity: 0 }}
                                className={`absolute -top-12 left-0 w-full p-4 rounded-lg shadow-lg text-center ${
                                    messageType === "success"
                                        ? "bg-[#27272c] text-cyan/90"
                                        : "bg-[#27272c] text-[#f6343e]"
                                }`}
                            >
                                <p className="text-lg font-medium">{message}</p>
                            </motion.div>
                        )}

                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-cyan-400 rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div>
                                        <p>{item.titte}</p>
                                        <h3>{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
