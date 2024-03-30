import { NextResponse } from "next/server";
import { del, put } from "@vercel/blob";
import { EmailTemplateCondidates } from "@/components/emailTemplateResend/email-template-conditates";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const tele = formData.get("tele");
  const email = formData.get("email");

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const blob = await put(`${lastName}.pdf`, file, {
    access: "public",
  });

  try {
    const data = await resend.emails.send({
      from: `${lastName}onboarding@resend.dev`,
      to: "salahfatimi76@gmail.com",
      subject: "condidatios",
      attachments: [
        {
          filename: `${lastName}.pdf`,
          path: blob.downloadUrl,
        },
      ],
      react: EmailTemplateCondidates({
        firstName: firstName,
        lastName: lastName,
        Email: email,
        Phone: tele,
      }),
    });
    await del(blob.url);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
};
