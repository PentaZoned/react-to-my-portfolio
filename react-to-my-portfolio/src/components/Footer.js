import React from 'react';

const styles = {
    links: {
        color: "blue"
    }
}

function Footer() {
    return (
        <div>
            <p className="text-center">
                <hr />
                Business Email: <a href="mailto:vle.bradley@gmail.com" style={styles.links}>vle.bradley@gmail.com</a><br />
                Github: <a href="https://github.com/PentaZoned" style={styles.links}>PentaZoned</a><br />
                LinkedIn: <a href="https://www.linkedin.com/in/bradley-le-/" style={styles.links}>Bradley Le</a><br />
                Phone Number: <span className="underline"><strong>510-414-7197</strong></span><br />
                Medium: <a href='https://medium.com/@brabrele' style={styles.links}>@brabrele</a>
        </p>
        </div>
    );
}

export default Footer;