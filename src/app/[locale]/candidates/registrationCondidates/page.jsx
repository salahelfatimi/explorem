"use client";
import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import { FileText } from "react-feather";
import { useTranslations } from "next-intl";

function InscriptionCondidates() {
  const t = useTranslations("Candidates");
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
    const formDataToSend = new FormData();
    formDataToSend.append("file", formData.pdf);
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("tele", formData.tele);
    formDataToSend.append("email", formData.email);

    if (!formData.firstName) {
      return toast.error("Please enter your First Name");
    }
    if (!formData.lastName) {
      return toast.error("Please enter your Last Name");
    }
    if (!formData.tele) {
      return toast.error("Please enter your phone number");
    }
    if (!formData.pdf) {
      return toast.error("Please upload your pdf");
    }

    try {
      toast.promise(
        (async () => {
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
          } else {
            throw new Error("Failed to send message");
          }
        })(),
        {
          loading: "Registering ...",
          success: <b>Your registration was successful !</b>,
          error: <b>Failed to register candidate.</b>,
        }
      );
    } catch (error) {
      console.error(error);
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
            className: "  bg-white text-black ",
          }}
        />
        <input
          value={formData.firstName}
          onChange={handleInputChange}
          type="text"
          name="firstName"
          className="bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.firstName")}
        />
        <input
          value={formData.lastName}
          onChange={handleInputChange}
          type="text"
          name="lastName"
          className="bg-[#ffffff] w-full font-semibold h-8 border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.lastName")}
        />

        <input
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          name="email"
          className="bg-[#ffffff] w-full font-semibold h-8 border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.email")}
        />
        <input
          value={formData.tele}
          onChange={handleInputChange}
          type="tel"
          name="tele"
          className="bg-[#ffffff] w-full font-semibold h-8 border p-4 rounded-md text-xs"
          placeholder={t("inscriptionCondidates.tele")}
        />
        <div className="flex flex-col gap-2 items-center capitalize">
          <label htmlFor="pdf" className=" font-bold">
            {" "}
            {t("inscriptionCondidates.pdf")}
          </label>
          <input
            id="pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            type="file"
            name="pdf"
            accept="application/pdf"
            className="bg-[#ffffff] w-full font-semibold  border p-4 rounded-md text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold"
          />
        </div>

        <button
          type="submit"
          className="px-12 py-1 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
        >
          {t("inscriptionCondidates.Submit")}
        </button>
      </form>
    </div>
  );
}

export default InscriptionCondidates;
