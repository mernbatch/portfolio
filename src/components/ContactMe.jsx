import React, { useState } from "react";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import Container from "./Container";
import { contact1, imgOne } from "../assets/getImage";

import SocialIcon from "./ui/SocialIcon";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [err, setErr] = useState("");

  const handleSubmit = () => {
    if (userName === "") {
      setErr("Please Enter your name");
    } else if (phone === "") {
      setErr("Please enter your phone number!");
    } else if (email === "") {
      setErr("Please enter your email!");
    } else if (subject === "") {
      setErr("Please enter the subject!");
    } else if (messages === "") {
      setErr("Please enter your messages!");
    } else {
      setLoading(true);
      axios
        .post("https://getform.io/f/kaz1GmeJ", {
          name: userName,
          phone: phone,
          email: email,
          subject: subject,
          messages: messages,
        })
        .then((res) => {
          if (res?.status === 200) {
            toast.success("Message send succesfully!");
            setErr("");
            setLoading(false);
            setSuccess(true);
          } else {
            console.log("Data submitting error from getform");
            setLoading(false);
          }
        });
    }
  };

  return (
    <section name="contact" className="px-4">
      <Container className="border-b border-black">
        <div className="flex flex-col items-center">
          <Subtitle title="Contact" />
          <Title title="Contact With Me" />
        </div>
        <div className="flex flex-col md:flex-row gap-10 pt-10">
          <div className="w-full md:w-1/3 bg-stone-950/50 p-10 rounded-lg group">
            <div className="overflow-hidden rounded-lg">
              <img
                src={contact1}
                alt="contact image"
                className="rounded-md group-hover:scale-110 duration-500"
              />
            </div>
            <div className="py-5 flex flex-col gap-2">
              <p className="text-2xl text-white font-bold">Nevine Acotanza</p>
              <p className="text-lg font-medium">Chief Operating Officer</p>
              <p className="text-base font-medium">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <p className="text-base">
                phone: <span className="text-white">+88010000000000</span>
              </p>
              <p className="text-base">
                Email: <span className="text-white">mern@people&tech.com</span>
              </p>
              <p className="uppercase">Find with me</p>
            </div>
            <SocialIcon />
          </div>
          <div className="w-full md:w-2/3 bg-stone-950/50 p-10 rounded-lg ">
            {!loading && success && (
              <div className="h-full flex flex-col items-center justify-center">
                <p className="text-2xl text-green-300 font-semibold mb-5">
                  {`Your messages sent successfully. ${userName}, Thank you very
                much!`}
                </p>
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam minus rerum ducimus incidunt recusandae inventore
                  autem officia, nulla dolorem ut!
                </p>
              </div>
            )}
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
                <p className="text-xl font-semibold text-white">
                  Your messages is sending ...
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-10">
                {err && (
                  <div className="text-orange-600 bg-zinc-950 py-2 px-4 font-semibold">
                    <p>{err}</p>
                  </div>
                )}
                <div className="flex flex-col md:flex-row justify-between gap-7">
                  <div className="flex flex-1 flex-col gap-3 relative">
                    <p className="text-sm uppercase">Your name</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="inputStyle"
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 relative">
                    <p className="text-sm uppercase">Phone Number</p>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="inputStyle"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 relative">
                  <p className="text-sm uppercase">Email</p>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="inputStyle"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex flex-col gap-3 relative">
                  <p className="text-sm uppercase">Subject</p>
                  <input
                    type="text"
                    placeholder="Define a subject"
                    className="inputStyle"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </div>
                <div className="flex flex-col gap-3 relative">
                  <p className="text-sm uppercase">Your Message</p>
                  <textarea
                    type="text"
                    placeholder="Enter your messages..."
                    className="inputStyle"
                    cols={1}
                    rows={3}
                    onChange={(e) => setMessages(e.target.value)}
                    value={messages}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="border-[1px] border-gray-500 py-2 rounded-md hover:border-designColor duration-300 uppercase hover:text-white"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
        <Toaster position="top-center" />
      </Container>
    </section>
  );
};

export default ContactMe;
