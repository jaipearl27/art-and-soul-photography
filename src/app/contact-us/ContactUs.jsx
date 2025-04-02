"use client";

import { useState } from "react";
import Hero from "../../components/Homepage/Hero";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import axios from "axios";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        data
      );
      setLoading(false);
      reset();
      toast.success("Contact Us Mail Sent Successfully", {
        style: {
          color: "white",
          background: "green",
        },
      });
    } catch (error) {
      setLoading(false);
      reset();
      toast.error("Server not responsing, please try again later", {
        style: {
          color: "white",
          background: "red",
        },
      });
    }
  };

  return (
    <div>
      <Toaster />
      <Hero
        img={
          "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/02990e87-8328-4560-be34-99aac32df6ec/VKR65165.jpg"
        }
        customClass={"!h-[500px] object-cover"}
      />
      <div className="pt-10 leading-relaxed tracking-wide flex flex-colmx-auto">
        <main className="flex-grow container mx-auto px-6">
          <section className="text-center mb-12">
            <h2 className="text-4xl text-black font-semibold mb-4">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
              <div className="w-full justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between text-base md:text-lg  text-black">
                  <div className="w-[150px] font-bold text-start">Email:</div>
                  <div className="text-start font-semibold">
                    info@artandsoulphotography.com
                  </div>
                  <div className="w-[150px] font-bold text-start">Phone:</div>
                  <div className="text-start font-semibold">91+ 9999999999</div>
                  <div className="w-[150px] font-bold text-start">Address:</div>
                  <div className="text-start font-semibold">
                    XYZ, Rajpur Road, Dehradun, Uttarakhand Pin 248007
                  </div>
                  <div className="w-[150px] font-bold text-start">Social:</div>
                  <div className="text-start flex gap-2 flex-wrap">
                    <a
                      href="https://www.instagram.com/artandsoulphotography.in/"
                      className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://youtube.com/@artandsoulphotographyfilms?si=Cxa3mZH5t84mt4Wd"
                      className="flex flex-col justify-center hover:shadow-[0_2px#000000] transition duration-300 "
                    >
                      <YouTubeIcon />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full text-left">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      id="name"
                      className="bg-white border border-amber-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Full Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      id="email"
                      className="bg-white border border-amber-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      {...register("mobile", {
                        required: "Mobile number is required",
                      })}
                      id="mobile"
                      className="bg-white border border-amber-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                      placeholder="Mobile"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("aboutWedding", {
                        required: "Message is required",
                        maxLength:{value:1000,message:"maximum 1000 character allowed"}
                      })}
                      id="message"
                      rows={5}
                      className="bg-white border border-amber-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5 resize-none"
                      placeholder="Tell us more about your wedding - event flow, venues"
                    />
                    {errors.aboutWedding && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.aboutWedding.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="number"
                      {...register("guestCount",{required:"at least 1 guest is requird,",min:{value:1,message:"At least 1 guest is required"},
                      max:{value:1000000,message:"guest count maxLimit 1 lakh "}})}
                      id="guestCount"
                      className="bg-white border border-amber-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                      placeholder="Guest Count"
                    />
                    {errors.guestCount && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.guestCount.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      {...register("location", {
                        required: "Location is required",
                      })}
                      id="location"
                      className="bg-white border border-amber-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                      placeholder="Location"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div className="text-left space-y-2">
                    <label
                      htmlFor="eventDate"
                      className="text-base font-semibold"
                    >
                      Event Date:
                    </label>
                    <input
                      type="date"
                      {...register("eventDate", {
                        required: "Event Date is required",
                      })}
                      id="eventDate"
                      className="bg-white border border-amber-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                      placeholder="Event Date"
                    />
                    {errors.eventDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.eventDate.message}
                      </p>
                    )}
                  </div>

                  <div className="text-left space-y-2">
                    <label
                      htmlFor="serviceType"
                      className="text-base font-semibold"
                    >
                      What service are you looking for ?
                    </label>
                    <div className="space-y-2 ">
                      <div className="flex gap-2 w-full">
                        <input
                          type="radio"
                          {...register("serviceType", {
                            required: "Service Type is required",
                          })}
                          id="eventDate"
                          value={"Wedding Photography"}
                        />
                        <label htmlFor="">Wedding Photography</label>
                      </div>

                      <div className="flex gap-2 w-full">
                        <input
                          type="radio"
                          {...register("serviceType", {
                            required: "Service Type is required",
                          })}
                          id="EngagementPhotography "
                          value={"Engagement Photography"}
                        />
                        <label htmlFor="">Engagement Photography</label>
                      </div>
                      <div className="flex gap-2 w-full">
                        <input
                          type="radio"
                          {...register("serviceType", {
                            required: "Service Type is required",
                          })}
                          id="Pre-Wedding Photography"
                          value={"Pre-Wedding photography"}
                        />
                        <label htmlFor="">Pre-Wedding Photography</label>
                      </div>
                      <div className="flex gap-2 w-full">
                        <input
                          type="radio"
                          {...register("serviceType", {
                            required: "Service Type is required",
                          })}
                          id="Other"
                          value={"Other"}
                        />
                        <label htmlFor="">Other</label>
                      </div>
                    </div>

                    {errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.serviceType.message}
                      </p>
                    )}
                  </div>

                  {loading ? (
                    <button
                      disabled={loading}
                      type="button"
                      className="w-full text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Submit
                    </button>
                  )}
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ContactUs;
