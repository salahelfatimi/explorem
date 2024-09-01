import { NextResponse } from "next/server";

import { EmailTemplateCondidates } from "@/components/emailTemplateResend/email-template-conditates";
import { Resend } from "resend";
import { utapi } from "@/app/server/uploadthing";

const resend = new Resend(process.env.RESEND_API_KEY);
export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const tele = formData.get("tele");
  const email = formData.get("email");
  const response = await utapi.uploadFiles(file);
  try {
    
    await resend.emails.send({
      from: `${lastName}<brett@explorem.net>`,
      to: "explorem21@gmail.com",
      subject: "Registration Of Candidates",
      attachments: [
        {
          filename: `${lastName}.pdf`,
          path: response.data.url,
        },
      ],
      react: EmailTemplateCondidates({
        firstName: firstName,
        lastName: lastName,
        Email: email,
        Phone: tele,
      }),
    });
    await utapi.deleteFiles(response.data.key);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
