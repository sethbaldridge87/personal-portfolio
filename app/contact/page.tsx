"use client"

import { SubmitEvent, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Contact() {
    const router = useRouter();
    const [messageSending, setMessageSending] = useState(false);
    async function handleOnSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            setMessageSending(true);
            await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify({
                    name: String(formData.get('userName') || ''),
                    email: String(formData.get('userEmail') || ''),
                    message: String(formData.get('userMessage') || ''),
                }),
            });
            router.push("/thankyou");
            
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    }
    return (
        <section className={styles.contact}>
            <h1>Contact Me</h1>
            <p>You can email me at <a href="mailto:sethbaldridge87@gmail.com">sethbaldridge87@gmail.com</a>.</p>
            <p>Or if you'd rather, send me a message via the form below!</p>
            <form onSubmit={handleOnSubmit} className={styles.form}>
                <fieldset>
                    <div>
                        <label htmlFor="userName">Name</label>
                        <br />
                        <input autoComplete="name" type="text" name="userName" id="userName" required />
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor="userEmail">Email</label>
                        <br />
                        <input autoComplete="email" type="email" name="userEmail" id="userEmail" required />
                        <br />
                        <br />
                    </div>
                </fieldset>
                <label htmlFor="userMessage">Message</label><br />
                <textarea rows={12} name="userMessage" id="userMessage" required></textarea>
                <br /><br />
                <button type="submit" disabled={messageSending}>{messageSending ? "Sending Message..." : "Send"}</button>
            </form>
        </section>
    );
};