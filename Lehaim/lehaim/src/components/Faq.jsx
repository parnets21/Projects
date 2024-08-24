import React, { useState } from 'react';
import "../styles/faq.css";

const Faq = () => {
    // Initialize with indices 0 and 4 open by default
    const [openIndex, setOpenIndex] = useState([0, 4]);

    const faqs = [
        { question: 'What medical services do you provide?', answer: 'We offer a comprehensive range of medical services across various departments, including Cardiology, Neurology, Urology, General Surgery, Orthopedics, Gynecology, Pediatrics, Internal Medicine, Oncology, ENT, Dermatology, and additional specialties. Visit our services page for more information.' },
        { question: 'Do you accept insurance?', answer: 'Yes, we accept most major insurance plans. Please contact us to verify your specific plan.' },
        { question: 'How can I schedule an appointment?', answer: 'You can schedule an appointment by calling our office or using our online booking system.' },
        { question: 'What should I bring to my appointment?', answer: 'Please bring a valid ID, insurance card, and any relevant medical records.' },
        { question: 'What medical services do you provide?', answer: 'We offer a comprehensive range of medical services across various departments, including Cardiology, Neurology, Urology, General Surgery, Orthopedics, Gynecology, Pediatrics, Internal Medicine, Oncology, ENT, Dermatology, and additional specialties. Visit our services page for more information.' },
        { question: 'Is parking available?', answer: 'Yes, we have free parking available for all patients.' },
        { question: 'Can I see a specialist without a referral?' , answer: 'In most cases, a referral is required. Please check with your insurance provider for details.' },
        { question: 'What is your cancellation policy?', answer: 'We require 24 hours notice for cancellations to avoid a cancellation fee.' },
    ];

    const handleToggle = (index) => {
        setOpenIndex(prevOpenIndex => {
            if (prevOpenIndex.includes(index)) {
                // If the clicked question is already open, remove it
                return prevOpenIndex.filter(i => i !== index);
            } else {
                // Open the clicked question and close others, but keep default open questions 0 and 4
                return [index];
            }
        });
    };

    return (
        <div>
            <section id='faq1'>
                <div className='faqheading'>
                    <h1>Faq</h1>
                    <p>Home/Faq</p>
                </div>
            </section>

            <section id='faq2'>
                <div className="container">
                    <div className='popularque'>
                        <p>POPULAR QUESTION</p>
                        <h1>Your Ultimate Medical <br /> Query Resource</h1>
                    </div>
                </div>
            </section>

            <section id='faq3'>
                <div className="faq-section">
                    <div className="faq-column">
                        {faqs.slice(0, 4).map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div
                                    className={`faq-question ${openIndex.includes(index) ? 'active' : ''}`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className="question-text">{faq.question}</span>
                                    <span className="eye-button">
                                        {openIndex.includes(index) ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                                    </span>
                                </div>
                                {openIndex.includes(index) && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="faq-column">
                        {faqs.slice(4).map((faq, index) => (
                            <div key={index + 4} className="faq-item">
                                <div
                                    className={`faq-question ${openIndex.includes(index + 4) ? 'active' : ''}`}
                                    onClick={() => handleToggle(index + 4)}
                                >
                                    <span className="question-text">{faq.question}</span>
                                    <span className="eye-button">
                                        {openIndex.includes(index + 4) ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                                    </span>
                                </div>
                                {openIndex.includes(index + 4) && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Faq;
