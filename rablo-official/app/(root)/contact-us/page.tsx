import FormSection from "@/components/Contact-us/FormSection/FormSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team at Rablo!",
};


const page = () => {
  return <FormSection />;
};

export default page;
