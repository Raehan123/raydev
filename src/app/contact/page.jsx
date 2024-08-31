"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 856 9404 9xxx",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nurrayhan62@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Depok, West Java, Indonesia",
  },
];

import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json",
      },
      body: JSON.stringify({
        access_key: "f50cb80a-3843-486f-b702-c5bc4f2536b3",
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        service: e.target.service.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Message Failed to Send!",
        icon: "error",
      });
    }
  }
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
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-yellow-300">Let's work together</h3>
              <p className="text-white/60">
                I'm excited to connect with individuals and organizations who
                share the same passion for driving engagement and development.
                If you would like to collaborate or have an interesting question
                or suggestion, I would love to hear from you, please fill out
                the question or suggestion below.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  name="firstname"
                />
                <Input type="lastname" placeholder="Lastname" name="lastname" />
                <Input type="email" placeholder="Email Address" name="email" />
                <Input type="phone" placeholder="Phone Number" name="phone" />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-center text-2xl">
                      Select a service
                    </SelectLabel>
                    <SelectItem value="web development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[62px] h-[62px] xl:w-[82px] xl:h-[82px] bg-[#27272c] text-yellow-300 rounded-md flex items-center justify-center">
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
