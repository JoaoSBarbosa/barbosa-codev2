import React, {useState} from 'react';
import {Layout, TextColor} from "@/app/components/Layout/Layout";

export const ContactForm = () => {
    const [emailSent, setEmailSent] = useState(false); // Estado para controlar se o email foi enviado com sucesso
    const [emailError, setEmailError] = useState(false); // Estado para controlar se houve erro ao enviar o email

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
        fetch('https://barbosacode-server.vercel.app:5500/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => {
            if (response.ok) {
                setEmailSent(true); // Define o estado para indicar que o email foi enviado com sucesso
                setEmailError(false); // Reseta o estado de erro
                console.log('Email enviado com sucesso!');
            } else {
                setEmailSent(false); // Define o estado para indicar que houve uma falha no envio do email
                setEmailError(true); // Define o estado para indicar que houve um erro ao enviar o email
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
        <Layout
            marginTop={100}
            sectionTitle={"Contato"}
            textColor={TextColor.TEXT_WHITE}
            sectionSubTitle={"Vamos bater um papo! Estou aqui para ouvir suas ideias e projetos."}
        >
            <div className="flex items-start justify-center p-4 2xl:p-0  w-full">
                <form onSubmit={handleSubmit} className="w-full  p-8 space-y-6 bg-dark-gray rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-purple-custom">Contato</h2>
                    {emailSent && <p className="text-green-500">Email enviado com sucesso!</p>}
                    {!emailSent && <p className="text-red-500">Falha ao enviar o email.</p>}
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-dark-gray w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-dark-gray w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Assunto"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="bg-dark-gray w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Telefone (opcional)"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-dark-gray w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                        />
                        <textarea
                            name="message"
                            placeholder="Messagem"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-dark-gray w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-custom"
                        />
                        <button
                            type="submit"
                            className="max-w-max px-4 py-2 font-bold text-white bg-purple-custom
                            rounded-md hover:bg-purple-gray-custom focus:outline-none focus:ring-2 focus:ring-purple-custom"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>

        </Layout>
    );
};
