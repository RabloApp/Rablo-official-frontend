'use client';

import { SendMail } from "@/lib/send-mail";
import { zodResolver } from '@hookform/resolvers/zod';
import libphonenumber from "google-libphonenumber";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import { z } from "zod";

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

const phoneNumberSchema = z.string().nonempty({ message: "Mobile number is required" }).refine((number) => {
  try {
    const cleanedNumber = number.replace(/\D/g, '');
    const fullNumber = `+91${cleanedNumber}`;
    const phoneNumber = phoneUtil.parse(fullNumber);
    return phoneUtil.isValidNumber(phoneNumber);
  } catch (error) {
    return false;
  }
}, { message: "Invalid Indian mobile number" });


const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: 'Please Enter a Valid Email Address' }),
  phoneNo: phoneNumberSchema,
  message: z.string().min(10, { message: 'Please make sure your message is at least 10 characters long.' })
})

const FormSection = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNo: '',
      message: '',
    }
  });

  const onFormSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const response = await SendMail({
      name: values.name,
      email: values.email,
      phoneNum: values.phoneNo,
      text: values.message
    })

    // console.log("Response:", response)

    if (response?.messageId) {
      toast.success('Application Submitted Successfully.');
    } else {
      toast.error('Failed To send application.');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[2.5vw] mx-auto font-[Poppins] w-[70.45vw] py-[4.17vw] px-[6.25vw]">
      <div className="flex flex-col gap-[0.83vw]">
        <h1 className="text-[2.42vw] font-[600] ">Reach out to us....</h1>
        <p className="text-[0.81vw] font-[400]  ">
          You can contact us anytime via <b>admin@rablo.in</b>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="form-section flex flex-col items-center justify-center w-[58.33vw] h-[31.92vw] mx-auto gap-[1.21vw] relative"
      >
        <div className="flex flex-col gap-[0.4vw]  h-[5.66vw] w-[37.53vw] mx-auto">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="border-[0.05vw] px-4 py-2 rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[2.42vw]"
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-[0.4vw]  h-[5.66vw] w-[37.53vw] mx-auto">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="border-[0.05vw] px-4 py-2 rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[2.42vw]"
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-[0.4vw]  h-[5.66vw] w-[37.53vw] mx-auto">
          <label htmlFor="phone-number">Phone Number*</label>
          <input
            id="phone-number"
            {...register("phoneNo")}
            className="border-[0.05vw] px-4 py-2 rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[2.42vw]"
          />
          {errors.phoneNo && <span className="text-red-500 text-xs">{errors.phoneNo.message}</span>}
        </div>
        <div className="flex flex-col gap-[0.4vw]  h-[11.31vw] w-[37.53vw] mx-auto">
          <label htmlFor="how-can-we-help">How can we help?*</label>
          <textarea
            id="how-can-we-help*"
            {...register("message")}
            className="border-[0.05vw] px-4 py-2 rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[8.08vw]"
          ></textarea>
          {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
        </div>
        <button
          type="submit"
          className="w-[38.13vw] h-[3.2vw] p-[0.833vw] bg-[#5271FF] rounded-[0.4vw] gap-[0.51vw] font-[600] text-[1.21vw] text-[#FFFFFF] hover:opacity-80"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        <div className="absolute right-[5.6vw] bottom-[4.7vw] w-[5.21vw] h-[5.21vw] object-contain   ">
          <Image src="/Platform/images/Shapes.svg" alt="Contact us" fill />
        </div>
      </form>
    </div>
  );
};

export default FormSection;
