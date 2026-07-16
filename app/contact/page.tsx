"use client"

import { SubmitEvent  } from "react";

export default function Contact() {
    async function handleOnSubmit(event: SubmitEvent <HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)

        await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({
                name: String(formData.get('userName') || ''),
                email: String(formData.get('userEmail') || ''),
                message: String(formData.get('userMessage') || ''),
            })
        });
    };
    return (
        <section>
            <h1>This is the Contact page</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Name</label>
                <input type="text" name="userName" required />
                <br />
                <label>Email</label>
                <input type="text" name="userEmail" required />
                <br />
                <label>Message</label>
                <textarea name="userMessage" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};