import React from 'react';
import '../styles/Contact.css';

function Contact() {
    return (
        <section id="contact" class="p-2 text-center">
            <h2>Contact Me</h2>
            <form>
                <label for="name">Name: </label><br />
                <input type="text" id="name" name="name" placeholder='John Doe'/><br /><br />
                <label for="lname">Email:</label><br />
                <input type="email" id="email" name="email" placeholder='johndoe@gmail.com'/><br /><br />
                <label for="lname">Message:</label><br />
                <input type="text" id="message" name="message" placeholder='Hello John Doe.'/><br /><br />
                <button>Submit</button>
            </form>
        </section>
    );
}

export default Contact;