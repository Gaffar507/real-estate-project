import React from 'react';
import './contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
                <div className="wrapper">
                    <div className="title">
                        <h1>CONTACT INFORMATION</h1>
                        <p>
                            We’d love to hear from you! Whether you have questions about our services, need any apartments or something else, or want to schedule a consultation, our team is ready here
                            to help.
                        </p>
                    </div>
                    <div className="office">
                        <div className="container">
                            <div className="address">
                                <h2>Main Office</h2>
                                <span>121 King Street, Melbourne Victoria 3000, Australia</span>
                            </div>
                            <div className="address">
                                <h2>New Your Office</h2>
                                <span>523 Sylvan Ave, 5th Floor Mountain View, CA 94041, USA</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="address">
                                <h2>London Office</h2>
                                <span>78 York Street, 3rd Floor London, W1H 1DP, U</span>
                            </div>
                            <div className="address">
                                <h2>Sydney Office</h2>
                                <span>200 George Street, 4th Floor Sydney, NSW 2000, Australia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <form action="#">
                    <input type="text" name="name" id="name" placeholder="Your name" />
                    <input type="text" name="name" id="name" placeholder="Your email" />
                    <textarea type="text" name="name" id="name" placeholder="Message" />
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
