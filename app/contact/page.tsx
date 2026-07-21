"use client"

import { SubmitEvent  } from "react";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Contact() {
    async function handleOnSubmit(event: SubmitEvent <HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)

        const sendMail = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({
                name: String(formData.get('userName') || ''),
                email: String(formData.get('userEmail') || ''),
                message: String(formData.get('userMessage') || ''),
            })
        });
        console.log(sendMail.status);
        if (sendMail.status === 200) {
            redirect('/thankyou'); 
        }
    };
    return (
        <section>
            <h1>Contact Me</h1>
            <p>You can email me at <a href="mailto:sethbaldridge87@gmail.com">sethbaldridge87@gmail.com</a>.</p>
            <p>Or if you'd rather, send me a message via the form below!</p>
            <form onSubmit={handleOnSubmit} className={styles.form}>
                <label htmlFor="userName">Name</label><br />
                <input autoComplete="name" type="text" name="userName" id="userName" required />
                <br /><br />
                <label htmlFor="userEmail">Email</label><br />
                <input autoComplete="email" type="email" name="userEmail" id="userEmail" required />
                <br /><br />
                <label htmlFor="userMessage">Message</label><br />
                <textarea rows={12} name="userMessage" id="userMessage" required></textarea>
                <br /><br />
                <button type="submit">Send</button>
            </form>
        </section>
    );
};