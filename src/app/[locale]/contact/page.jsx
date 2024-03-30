"use client"
import { Mail, MapPin, Phone } from "react-feather";
import toast, { Toaster } from "react-hot-toast";


import { useState } from "react";
import { useTranslations } from "next-intl";


export default function Contact() {
    const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tele: "",
    email: "",
    subject: "",
    message: "",
  });
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      return toast.error("Please enter your firstName");
    }
    if (!formData.lastName) {
      return toast.error("Please enter your lastName");
    }
    if (!formData.tele) {
      return toast.error("Please enter your phone number");
    }
    if (!formData.email) {
      return toast.error("Please enter a email");
    }
    if (!formData.subject) {
      return toast.error("Please enter a subject");
    }
    if (!formData.message) {
      return toast.error("Please enter a message");
    }
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      setFormData({
        firstName: "",
        lastName: "",
        tele: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success(
        `Hey ${formData.firstName}, your message was sent successfully! I Will Contact you soon! 👋`,
        {
          position: "bottom-right",
          duration: 7000,
        }
      );
    } else {
      toast.error(
        `Hello ${formData.firstName}, it appears that your previous message was not sent successfully. Please try sending it again later. `,
        {
          position: "bottom-right",
          duration: 7000,
        }
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="">
        <Toaster
          toastOptions={{
            className: "dark:bg-[#121212] dark:text-white bg-white text-black ",
          }}
        />

        <div className="relative w-full h-96 ">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d849.2267858554978!2d-8.0121684!3d31.6363927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8fca7a678f%3A0x7c1f72dd20c997ac!2s6%20Rue%20des%20Vieux%20Marrakechis%2C%20Marrakech%2040000!5e0!3m2!1sen!2sma!4v1710868954732!5m2!1sen!2sma"
            allowFullScreen
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className=" px-4 lg:px-[10rem]  ">
          <div className="bg-[#ffffff] drop-shadow-xl relative bottom-24 py-12 px-5 ">
            <div className=" grid grid-cols-1  lg:grid-cols-2 gap-4">
              <form className="space-y-3 " onSubmit={sendEmail}>
                <div className="pb-4">
                  <span className="text-[#0149a6] font-bold  text-xl ">
                    {t("GetInTouch.title")}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <input
                    value={formData.firstName}
                    onChange={handleInputChange}
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="bg-[#ffffff] h-8 w-1/2 border p-4 font-mono text-xs"
                    placeholder={t("GetInTouch.firstName")}
                  />
                  <input
                    value={formData.lastName}
                    onChange={handleInputChange}
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="bg-[#ffffff] w-1/2 h-8 border p-4 font-mono text-xs"
                    placeholder={t("GetInTouch.lastName")}
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-[#ffffff] w-1/2 h-8 border p-4 font-mono text-xs"
                    placeholder={t("GetInTouch.email")}
                  />
                  <input
                    value={formData.tele}
                    onChange={handleInputChange}
                    type="tel"
                    name="tele"
                    id="tele"
                    className="bg-[#ffffff] w-1/2 h-8 border p-4 font-mono text-xs"
                    placeholder={t("GetInTouch.tele")}
                  />
                </div>

                <input
                  value={formData.subject}
                  onChange={handleInputChange}
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-[#ffffff] w-full h-8 border p-4 font-mono text-xs"
                  placeholder={t("GetInTouch.subject")}
                />
                <textarea
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-control bg-[#ffffff] border  py-2 px-4 w-full font-mono text-xs"
                  name="message"
                  id="message"
                  rows="16"
                  placeholder={t("GetInTouch.message")}
                ></textarea>
                <button className="  px-12 py-1 w-full rounded font-bold border-4 duration-700  hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white ">
                  {t("GetInTouch.send")}
                </button>
              </form>
              <div className=" space-y-3">
                <div className="pb-4">
                  <span className="text-[#0149a6] font-bold  text-xl ">
                    {t("Information.title")}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2     text-black">
                    <span className="flex gap-2 font-semibold  items-center border-[#0149a6] border-2 w-auto text-[#0149a6]  rounded p-1 pl-4">
                      <MapPin size={20} className=" stroke-[#0149a6] min-w-8" />
                      <span className="">{t("Information.location")}</span>
                    </span>
                    <div className="gap-2  border-l-8 pl-2 border-white flex flex-col ">
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto  rounded-r p-1 pl-4">
                        <a
                          href="https://maps.app.goo.gl/djcimpjqdNjy9pcZ6"
                          className=" text-sm   "
                        >
                          6 Rue des Vieux Marrakech, Bureau Nr 7 Gueliz,
                          Marrakech, Morocco
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2     text-black">
                    <span className="flex gap-2 font-semibold  items-center border-[#0149a6] border-2 w-auto text-[#0149a6]  rounded p-1 pl-4">
                      <Phone
                        size={20}
                        className=" stroke-[#0149a6] min-w-8  "
                      />
                      <span className="">{t("Information.mobile.title")}</span>
                    </span>
                    <div className="gap-2  border-l-8 pl-2 border-white flex flex-col ">
                      <div className="flex flex-col  gap-1 ">
                        <span className="  bg-[#0149a6] w-fit p-1 text-white ">
                        {t('Information.mobile.formationCenter')}
                        </span>
                        <div className="border-l-4 border-[#0149a6] p-1 ml-3 pl-2  flex flex-col gap-2">
                          <span className="flex gap-2  w-auto   ">
                            <a
                              href="tel:+212668-676518"
                              className=" flex flex-row gap-1 text-sm "
                            >
                              (+212) 6 68 67 65 18{" "}
                              <span className="font-semibold ">
                                {t("Information.mobile.whatsappAvailable")}
                              </span>{" "}
                            </a>
                          </span>
                          <span className="flex gap-2 w-auto ">
                            <a
                              href="tel:+212809-891297"
                              className="flex flex-row gap-1 text-sm "
                            >
                              (+212) 8 09 89 12 97{" "}
                              <span className="font-semibold ">{t("Information.mobile.landline")}</span>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col  gap-1 ">
                        <span className="  bg-[#0149a6] w-fit p-1 text-white  ">{t('Information.mobile.administration')}</span>
                        <div className="border-l-4 border-[#0149a6] p-1 ml-3 pl-2   flex flex-col gap-2">
                          <span className="flex gap-2  w-auto   ">
                            <a href="tel:+212650-656897" className="  text-sm ">
                              (+212) 6 50 65 68 97 <span className="font-semibold ">(ABDESSAMAD)</span>
                            </a>
                          </span>
                          <span className="flex gap-2  w-auto   ">
                            <a href="tel:+212608-789360" className="  text-sm ">
                              (+212) 6 08 78 93 60 <span className="font-semibold ">(GRACILA)</span>
                            </a>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2     text-black">
                    <span className="flex gap-2 font-semibold  items-center border-[#0149a6] border-2 w-auto text-[#0149a6]  rounded p-1 pl-4">
                      <Mail size={20} className=" stroke-[#0149A6] min-w-8" />
                      <span className="">{t("Information.email.title")}</span>
                    </span>
                    <div className="gap-2  border-l-8  border-white flex flex-col pl-1 md:pl-4 ">
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto  rounded-r p-1 md:pl-4 pl-2 ">
                        <a
                          href="mailto: explorem21@gmail.com"
                          className="  text-sm "
                        >
                          {t("Information.email.administration")} :
                          explorem21@gmail.com
                        </a>
                      </span>
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto  rounded-r p-1 md:pl-4 pl-2">
                        <a
                          href="mailto: erecruit21@gmail.com"
                          className="  text-sm "
                        >
                          {t("Information.email.recruitment")} :
                          erecruit21@gmail.com
                        </a>
                      </span>
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto  rounded-r p-1 md:pl-4 pl-2 ">
                        <a
                          href="mailto: explorem.documents@gmail.com"
                          className="  text-sm "
                        >
                          {t("Information.email.documents")} :
                          explorem.documents@gmail.com
                        </a>
                      </span>
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto  rounded-r p-1 md:pl-4 pl-2 ">
                        <a
                          href="mailto: explorem.nursing@gmail.com"
                          className="  text-sm "
                        >
                          {t("Information.email.nursing")} :
                          explorem.nursing@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
