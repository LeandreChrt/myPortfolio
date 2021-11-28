import React, { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import keys from '../.env.js';

export default function Contact({ Language, Text, changActive }) {
    useEffect(() => {
        changActive(2)
    }, [])
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(keys.SERVICEID, keys.TEMPLATEID, form.current, keys.USERID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="fromname" />
            <label>Email</label>
            <input type="email" name="frommail" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}