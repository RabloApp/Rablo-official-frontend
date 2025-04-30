'use server';

import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECIEVER;


interface SendMailArgs {
    name: string;
    email: string;
    phoneNum: string;
    subject?: string;
    text: string;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
})


export async function SendMail({ name, email, phoneNum, text }: SendMailArgs) {
    try {
        const isVerified = await transporter.verify();
        console.log("Verified:", isVerified);
    } catch (error) {
        console.error("Something went wrong while sending the email", SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error)
        return;
    }

    const info = await transporter.sendMail({
        from: email,
        to: SITE_MAIL_RECEIVER,
        subject: "Contact From " + name,
        text: "Phone No: " + phoneNum + "\n" + text,
    })

    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', SITE_MAIL_RECEIVER);
    return info;
}