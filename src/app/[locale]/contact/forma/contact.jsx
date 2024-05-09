"use client";
import { Mail, MapPin, Phone } from "react-feather";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contactform() {
 
  const t = useTranslations("Contact");
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(false);
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
    
    setValidation(true);

    if (
      formData.firstName &&
      formData.lastName &&
      formData.tele &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setIsLoading(true);
      const loadingToast = toast.loading("Sending ...");
      try {
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
          setValidation(false);
          setIsLoading(false);
          toast.dismiss(loadingToast);
          toast.success("Message was sent successfully!");
        }
      } catch {
        toast.dismiss(loadingToast);
        setIsLoading(false);
        toast.error("Failed to Send Email.");
      }
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
      <div className=" pt-[6rem] ">
        <Toaster
          toastOptions={{
            className: " bg-white text-black",
          }}
        />

        <div className="relative w-full h-[32rem] ">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698.460433438157!2d-8.01355266142035!3d31.636016977168037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef18e190e9a7%3A0xfe589957f732f57!2sExplorem%20SARL!5e0!3m2!1sen!2sma!4v1715278921548!5m2!1sen!2sma"
            allowFullScreen
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="px-4 lg:px-[10rem]  ">
          <div className="bg-[#ffffff] drop-shadow-xl relative bottom-24 py-12 px-5 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <form className="space-y-3" onSubmit={sendEmail}>
                <div className="pb-4">
                  <span className="text-[#0149a6] font-bold  text-xl ">
                    {t("GetInTouch.title")}
                  </span>
                </div>
                <div className="flex lg:flex-row flex-col justify-between  gap-4">
                  <label className="block space-y-2 lg:w-1/2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      {t("GetInTouch.firstName")}
                    </span>
                    <input
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type="text"
                      name="firstName"
                      id="firstName"
                      className={`${
                        !formData.firstName && validation && "border-red-500 "
                      } bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs`}
                    />
                    <p className="text-red-500 text-xs font-medium">
                      {!formData.firstName &&
                        validation &&
                        "Please enter your First Name"}
                    </p>
                  </label>
                  <label className="block space-y-2 lg:w-1/2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      {t("GetInTouch.lastName")}
                    </span>
                    <input
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text"
                      name="lastName"
                      id="lastName"
                      className={`${
                        !formData.lastName && validation && "border-red-500 "
                      } bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs`}
                    />
                    <p className="text-red-500 text-xs font-medium">
                      {!formData.lastName &&
                        validation &&
                        "Please enter your Last Name"}
                    </p>
                  </label>
                </div>
                <div className="flex justify-between lg:flex-row flex-col gap-4">
                  <label className="block space-y-2 lg:w-1/2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      {t("GetInTouch.email")}
                    </span>
                    <input
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@email.com"
                      className={`${
                        !formData.email && validation && "border-red-500 "
                      } bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs`}
                    />
                    <p className="text-red-500 text-xs font-medium">
                      {!formData.email &&
                        validation &&
                        "Please enter your Email"}
                    </p>
                  </label>
                  <label className="block space-y-2 lg:w-1/2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      {t("GetInTouch.tele")}
                    </span>
                    <input
                      value={formData.tele}
                      onChange={handleInputChange}
                      type="tel"
                      name="tele"
                      id="tele"
                      className={`${
                        !formData.tele && validation && "border-red-500 "
                      } bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs`}
                    />
                    <p className="text-red-500 text-xs font-medium">
                      {!formData.tele &&
                        validation &&
                        "Please enter your phone"}
                    </p>
                  </label>
                </div>
                <label className="block space-y-2 ">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    {t("GetInTouch.subject")}
                  </span>
                  <input
                    value={formData.subject}
                    onChange={handleInputChange}
                    type="text"
                    name="subject"
                    id="subject"
                    className={`${
                      !formData.subject && validation && "border-red-500 "
                    } bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs`}
                  />
                  <p className="text-red-500 text-xs font-medium">
                    {!formData.subject &&
                      validation &&
                      "Please enter your subject"}
                  </p>
                </label>
                <label className="block space-y-2">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    {t("GetInTouch.message")}
                  </span>
                  <textarea
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${
                      !formData.subject && validation && "border-red-500 "
                    }  bg-[#ffffff] border  py-2 px-4 w-full rounded-md font-mono text-xs`}
                    name="message"
                    id="message"
                    rows="16"
                  ></textarea>
                  <p className="text-red-500 text-xs font-medium">
                    {!formData.message &&
                      validation &&
                      "Please enter your message"}
                  </p>
                </label>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="px-12 py-1 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
                >
                  {isLoading ? "sending..." : t("GetInTouch.send")}
                </button>
              </form>
              <div className="space-y-3">
                <div className="pb-4">
                  <span className="text-[#0149a6] font-bold  text-xl ">
                    {t("Information.title")}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2 text-black">
                    <span className="flex gap-2 font-semibold items-center border-[#0149a6] border-2 w-auto text-[#0149a6] rounded p-1 pl-4">
                      <MapPin size={20} className="stroke-[#0149a6] min-w-8" />
                      <span>{t("Information.location")}</span>
                    </span>
                    <div className="gap-2 border-l-8 pl-2 border-white flex flex-col">
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto rounded-r p-1 pl-4">
                        <a
                          href="https://maps.app.goo.gl/djcimpjqdNjy9pcZ6"
                          className="text-sm"
                        >
                          6 Rue des Vieux Marrakech, Bureau Nr 7 Gueliz,
                          Marrakech, Morocco
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-black">
                    <span className="flex gap-2 font-semibold items-center border-[#0149a6] border-2 w-auto text-[#0149a6] rounded p-1 pl-4">
                      <Phone size={20} className="stroke-[#0149a6] min-w-8" />
                      <span>{t("Information.mobile.title")}</span>
                    </span>
                    <div className="gap-2 border-l-8 pl-2 border-white flex flex-col">
                      <div className="flex flex-col gap-1">
                        <span className="bg-[#0149a6] w-fit p-1 text-white">
                          {t("Information.mobile.formationCenter")}
                        </span>
                        <div className="border-l-4 border-[#0149a6] p-1 ml-3 pl-2 flex flex-col gap-2">
                          <span className="flex gap-2 w-auto">
                            <a href="tel:+212668-676518" className="text-sm">
                              (+212) 6 68 67 65 18{" "}
                              <span className="font-semibold">
                                {t("Information.mobile.whatsappAvailable")}
                              </span>{" "}
                            </a>
                          </span>
                          <span className="flex gap-2 w-auto">
                            <a href="tel:+212809-891297" className="text-sm">
                              (+212) 8 09 89 12 97{" "}
                              <span className="font-semibold">
                                {t("Information.mobile.landline")}
                              </span>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="bg-[#0149a6] w-fit p-1 text-white">
                          {t("Information.mobile.administration")}
                        </span>
                        <div className="border-l-4 border-[#0149a6] p-1 ml-3 pl-2 flex flex-col gap-2">
                          <span className="flex gap-2 w-auto">
                            <a href="tel:+212650-656897" className="text-sm">
                              (+212) 6 50 65 68 97{" "}
                              <span className="font-semibold">
                                (ABDESSAMAD)
                              </span>
                            </a>
                          </span>
                          <span className="flex gap-2 w-auto">
                            <a href="tel:+212608-789360" className="text-sm">
                              (+212) 6 08 78 93 60{" "}
                              <span className="font-semibold">(GRACILA)</span>
                            </a>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-black">
                    <span className="flex gap-2 font-semibold items-center border-[#0149a6] border-2 w-auto text-[#0149a6] rounded p-1 pl-4">
                      <Mail size={20} className="stroke-[#0149A6] min-w-8" />
                      <span>{t("Information.email.title")}</span>
                    </span>
                    <div className="gap-2 border-l-8 border-white flex flex-col pl-1 md:pl-4">
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto rounded-r p-1 md:pl-4 pl-2">
                        <a
                          href="mailto:explorem21@explorem.net"
                          className="text-sm"
                        >
                          {t("Information.email.administration")} :
                          explorem21@explorem.net
                        </a>
                      </span>
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto rounded-r p-1 md:pl-4 pl-2">
                        <a
                          href="mailto:erecruit21@explorem.net"
                          className="text-sm"
                        >
                          {t("Information.email.recruitment")} :
                          erecruit21@explorem.net
                        </a>
                      </span>
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto rounded-r p-1 md:pl-4 pl-2">
                        <a
                          href="mailto:explorem.documents@explorem.net"
                          className="text-sm"
                        >
                          {t("Information.email.documents")} :
                          explorem.documents@explorem.net
                        </a>
                      </span>
                      <span className="flex gap-2 border-l-4 border-[#0149a6] w-auto rounded-r p-1 md:pl-4 pl-2">
                        <a
                          href="mailto:explorem.nursing@explorem.net"
                          className="text-sm"
                        >
                          {t("Information.email.nursing")} :
                          explorem.nursing@explorem.net
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
