import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { contacts } from '../constants';
import styles from '../style';

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
    return (
        <section id="contact" className={`contact ${styles.section}`}>
            <div className="contact-area">
                <div className={`${styles.container}`}>
                    <div className="contact-content grid grid-cols-12 justify-between items-center gap-4">
                        <div className="contact-details col-span-6">
                            <h2 className={`${styles.heading3} mb-5`}>Contact Me</h2>
                            {contacts.map((item) => (
                                <div
                                    key={item.id}
                                    className="single-details flex items-center mb-4"
                                >
                                    <div className="sd-icons text-[24px] dark:text-sky-500 mr-6">
                                        {item.icon}
                                    </div>
                                    <div className="sd-text dark:text-white">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="contact-right col-span-6">
                            <form id="contact-form" className="contact-form">
                                <div className="input-group mb-6">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={nameHandler}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div className="input-group mb-6">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="email"
                                        name="email"
                                        value={email}
                                        onChange={emailHandler}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div className="input-group mb-6">
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Your message..."
                                        name="message"
                                        value={message}
                                        onChange={messageHandler}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="text-[18px] border-sky-500 border-2 rounded-md text-white px-6 py-2 capitalize bg-sky-500 mr-4 flex items-center"
                                >
                                    Send{' '}
                                    <span className="ml-1">
                                        <AiOutlineSend />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
