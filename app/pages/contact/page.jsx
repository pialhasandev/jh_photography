"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BsSendArrowUpFill } from "react-icons/bs";

import Container from "@/(components)/common/Container";

const inter = Inter({
  subsets: ["latin"],
});

export default function Page() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      phone,
      eventType: e.target.event_type.value,
      eventDate: e.target.event_date.value,
      eventLocation: e.target.event_location.value,
      message: e.target.message.value,
    };

    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="bg-white pt-35 text-black dark:bg-black dark:text-gray-300 py-10">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-[#fbb01a] border-b-2 inline-block  ">
          Contact Us
        </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <h5 className="py-5 text-center font-semibold">
              STAY CONNECTED
            </h5>

            <p className={`text-lg pb-5 ${inter.className}`}>
              As a dedicated professional wedding photographer, JH Photography
              is committed to capturing and preserving your most cherished
              moments. Get in touch to discuss your vision and create a
              customized photography package tailored to your special day.
            </p>

            <PhotoProvider>
              <PhotoView src="/cont.jpg">
                <Image
                  src="/cont.jpg"
                  width={500}
                  height={300}
                  alt="Project"
                  className="cursor-pointer rounded-2xl w-full"
                />
              </PhotoView>
            </PhotoProvider>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-4xl mb-8">
              Whether you have a question or are planning a project, we would be
              delighted to help bring your vision to life.
            </h3>

            <div
              className={`bg-black text-white p-8 rounded-2xl shadow-lg ${inter.className}`}
            >
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {/* Full Name */}
                <div>
                  <label className="text-gray-300 text-sm">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full mt-2 p-3 rounded-md bg-black text-white border border-gray-700 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-300 text-sm">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    required
                    className="w-full mt-2 p-3 rounded-md bg-black text-white border border-gray-700 outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-gray-300 text-sm">
                    Phone Number
                  </label>

                  <div className="mt-2">
                    <PhoneInput
                      country={"bd"}
                      value={phone}
                      onChange={setPhone}
                      enableSearch
                      inputStyle={{
                        width: "100%",
                        height: "48px",
                        background: "#000",
                        color: "#fff",
                        border: "1px solid #374151",
                        borderRadius: "6px",
                      }}
                      buttonStyle={{
                        background: "#000",
                        color: "#fff",
                        border: "1px solid #374151",
                      }}
                      dropdownStyle={{
                        background: "#000",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="text-gray-300 text-sm">
                    Event Type
                  </label>

                  <select
                    name="event_type"
                    required
                    className="w-full mt-2 p-3 rounded-md bg-black text-gray-300 border border-gray-700 outline-none"
                  >
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Reception">Reception</option>
                    <option value="Mehendi">Mehendi</option>
                    <option value="Haldi">Haldi</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate Event">
                      Corporate Event
                    </option>
                    <option value="Couple Shoot">Couple Shoot</option>
                    <option value="Family Portrait">
                      Family Portrait
                    </option>
                    <option value="Product Photography">
                      Product Photography
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label className="text-gray-300 text-sm">
                    Event Date
                  </label>

                  <input
                    type="date"
                    name="event_date"
                    className="w-full mt-2 p-3 rounded-md bg-black text-gray-300 border border-gray-700 outline-none"
                  />
                </div>

                {/* Event Location */}
                <div>
                  <label className="text-gray-300 text-sm">
                    Event Location
                  </label>

                  <input
                    type="text"
                    name="event_location"
                    placeholder="Dhaka, Bangladesh"
                    className="w-full mt-2 p-3 rounded-md bg-black text-white border border-gray-700 outline-none"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="text-gray-300 text-sm">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Tell me about your event..."
                    required
                    className="w-full mt-2 p-3 rounded-md bg-black text-white border border-gray-700 outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-white text-black flex items-center px-6 py-3 rounded-md font-medium hover:scale-105 duration-300"
                  >
                    Send Message
                    <BsSendArrowUpFill className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}