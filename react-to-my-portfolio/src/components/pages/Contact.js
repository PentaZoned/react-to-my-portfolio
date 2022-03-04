import React from 'react';
import '../styles/Contact.css';

const styles = {
    background: {
        background: "white"
    }
}
function Contact() {
    return (
        <section id="contact" className="p-2">
            <h2 className='text-center'>Contact Me</h2>
            <form className='px-5'>
                <label for="name">Name: </label><br />
                <input type="text" id="name" name="name" placeholder='John Doe' style={styles.background}/><br /><br />
                <label for="lname">Email:</label><br />
                <input type="email" id="email" name="email" placeholder='johndoe@gmail.com' style={styles.background}/><br /><br />
                <label for="lname">Message:</label><br />
                <textarea type="text" id="message" name="message" placeholder='Hello John Doe.' cols='50' style={styles.background}/><br /><br />
                <button style={styles.background}>Submit</button>
            </form>
        </section>
    );
}

export default Contact;