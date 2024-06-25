"use client";
import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import { FileText } from "react-feather";
import { useTranslations } from "next-intl";


function InscriptionCondidates() {
  const t = useTranslations("Candidates");

  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tele: "",
    email: "",
    pdf: null,
  });

  const fileInputRef = useRef(null);

  const registrationCandidates = async (e) => {
    e.preventDefault();

    setValidation(true);

    if (
      formData.firstName &&
      formData.lastName &&
      formData.tele &&
      formData.email &&
      formData.pdf
    ) {
      setIsLoading(true);
      const loadingToast = toast.loading("registering ...");
      const formDataToSend = new FormData();
      formDataToSend.append("file", formData.pdf);
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("tele", formData.tele);
      formDataToSend.append("email", formData.email);
      try {
        const response = await fetch("/api/condidatesInscription", {
          method: "POST",
          body: formDataToSend,
        });
        if (response.ok) {
          setFormData({
            firstName: "",
            lastName: "",
            tele: "",
            email: "",
            pdf: null,
          });
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          setValidation(false);
          toast.dismiss(loadingToast);
          toast.success("Your registration was successful !");
        } else {
          toast.dismiss(loadingToast);
          throw new Error("Failed to send message");
        }
      } catch (error) {
        toast.dismiss(loadingToast);
      
        toast.error("Failed to register candidate.");
      } finally {
        setIsLoading(false);
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      pdf: file,
    });
  };

  return (
    <div className="space-y-4">
      <div className=" flex justify-center ">
        <h2 className="flex gap-1 items-center">
          <span className=" capitalize text-center font-bold text-md lg:text-2xl text-[#0149a6]">
            {t("inscriptionCondidates.title")}
          </span>
          <FileText size={30} className=" stroke-[#0149a6] min-w-12" />
        </h2>
      </div>
      <form
        className="container flex flex-col gap-4"
        onSubmit={registrationCandidates}
      >
        <Toaster
          toastOptions={{
            className: "bg-white text-black",
          }}
        />
        <label className="block space-y-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {t("inscriptionCondidates.firstName")}
          </span>

          <input
            value={formData.firstName}
            onChange={handleInputChange}
            type="text"
            name="firstName"
            className={`${!formData.firstName && validation && "border-red-500 "} bg-[#ffffff] h-10 w-full font-semibold border p-4 rounded text-xs`}
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.firstName &&
              validation &&
              "Please enter your First Name"}
          </p>
        </label>
        <label className="block space-y-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {t("inscriptionCondidates.lastName")}
          </span>

          <input
            value={formData.lastName}
            onChange={handleInputChange}
            type="text"
            name="lastName"
             className={`${!formData.lastName && validation && "border-red-500 "} bg-[#ffffff] h-10 w-full font-semibold border p-4 rounded text-xs`}
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.lastName && validation && "Please enter your Last Name"}
          </p>
        </label>
        <label className="block space-y-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {t("inscriptionCondidates.email")}
          </span>

          <input
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            name="email"
             className={`${!formData.email && validation && "border-red-500 "} bg-[#ffffff] h-10 w-full font-semibold border p-4 rounded text-xs`}
            placeholder="example@email.com"
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.email && validation && "Please enter your Email"}
          </p>
        </label>
        <label className="block space-y-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {t("inscriptionCondidates.tele")}
          </span>

          <input
            value={formData.tele}
            onChange={handleInputChange}
            type="tel"
            name="tele"
             className={`${!formData.tele && validation && "border-red-500 "} bg-[#ffffff] h-10 w-full font-semibold border p-4 rounded text-xs`}
            placeholder="+212"
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.tele && validation && "Please enter your phone number"}
          </p>
        </label>
        <label className="block space-y-2">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {t("inscriptionCondidates.pdf")}
          </span>

          <input
            id="pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            type="file"
            name="pdf"
            accept="application/pdf"
            className={`${!formData.pdf && validation && "border-red-500"} bg-[#ffffff] w-full font-semibold  border p-4 rounded text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold`}
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.pdf && validation && "Please upload your pdf"}
          </p>
        </label>
        <button
          title="Join Explorem - Make Butter"
          type="submit"
          className="px-12 py-1 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
          disabled={isLoading}
        >
          {isLoading ? "registering..." :  t("inscriptionCondidates.Submit")}
        </button>
      </form>
    </div>
  );
}

export default InscriptionCondidates;
