import React, {useState} from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // fetch('http://localhost:5500/send-email', {
        fetch('https://joaobarbosadev.vercel.app:5500/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => {
            if (response.ok) {
                console.log('Email enviado com sucesso!');
            } else {
                console.log('Falha ao enviar o email.');
            }
        }).catch((error) => {
            console.error('Error:', error);
        });

        setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-deep-gray">
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-purple-custom">Contact Us</h2>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone (optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-purple-custom rounded-md hover:bg-purple-gray-custom focus:outline-none focus:ring-2 focus:ring-purple-custom"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};
