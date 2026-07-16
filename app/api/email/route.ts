import { Resend } from "resend";
import { ContactEmail } from "@/app/emails/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const data = await request.json();
    await resend.emails.send({
        from: 'sethbaldridge.dev <incoming@contact.sethbaldridge.dev>',
        to: 'sethbaldridge87@gmail.com',
        subject: `${data.name} has sent you an email from your website!`,
        react: ContactEmail({
            name: data.name,
            email: data.email,
            message: data.message,
        })
    });

    return new Response(null, { status: 200 });
}