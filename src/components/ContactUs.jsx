import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "56096c15-18ff-4c11-8880-bb4f651603b2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              required
              className="w-full p-3 text-sm outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-400"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              required
              className="w-full p-3 text-sm outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-400"
              type="text"
              placeholder="Enter your email"
              name="email"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            required
            className=" w-full p-3 text-sm outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-400 rounded-lg border border-gray-300  dark:border-gray-600"
            rows={8}
            placeholder="Enter your message"
            name="message"
          />
        </div>

        <button
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          type="submit"
        >
          Submit <img className="w-4" src={assets.arrow_icon} alt="" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
