import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { contactImg } from '../assets';
import styles from '../style';
import SectionTitle from './SectionTitle';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };
    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };
    const messageHandler = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    //emailjs
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kh4cjgr', 'template_e0uiz27', form.current, 'Lah0XMBm6ydf3tznZ')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <section id="contact" className={`contact ${styles.section}`}>
            <div className="contact-area">
                <div className={`${styles.container}`}>
                    <SectionTitle title="Contact" />
                    <div className="contact-content grid grid-cols-12 justify-between items-center gap-4">
                        <div className="sm:h-[460px] contact-details col-span-12 sm:col-span-6">
                            <img
                                className="sm:h-[100%] object-cover rounded-xl w-full"
                                src={contactImg}
                                alt="contact-img"
                            />
                        </div>
                        <div className="contact-right col-span-12 sm:col-span-6">
                            <div className="form-box sm:h-[460px] bg-[#1d293a] px-5 py-8 rounded-xl">
                                <h2
                                    className={`${styles.heading3} capitalize dark:text-primary font-bold mb-3 text-primary`}
                                >
                                    Get in touch
                                </h2>
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    id="contact-form"
                                    className="contact-form"
                                >
                                    <div className="input-group mb-6 relative">
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5 text-primary dark:text-primary"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            placeholder="Name"
                                            name="name"
                                            value={name}
                                            onChange={nameHandler}
                                            className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary outline-primary dark:outline-primary dark:focus:outline"
                                        ></input>
                                    </div>

                                    <div className="input-group mb-6 relative">
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5 text-primary dark:text-primary"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={emailHandler}
                                            className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary outline-primary dark:outline-primary dark:focus:outline"
                                        ></input>
                                    </div>
                                    <div className="input-group mb-6 relative">
                                        <div className="flex absolute inset-y-0 left-0 top-3 pl-3 pointer-events-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5 text-primary dark:text-primary"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                                />
                                            </svg>
                                        </div>
                                        <textarea
                                            required
                                            id="message"
                                            rows="6"
                                            placeholder="Your message..."
                                            name="message"
                                            value={message}
                                            onChange={messageHandler}
                                            className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary outline-primary dark:focus:outline"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-[18px] border-primary border-2 rounded-md text-white px-6 py-2 capitalize bg-primary mr-4 flex justify-center items-center"
                                    >
                                        Send Message
                                        <span className="ml-1">
                                            <AiOutlineSend />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
