

import React, {useState, ChangeEvent, FormEvent} from 'react';
import {Layout, TextColor} from "@/app/components/Layout/Layout";
import styles from "./ContactForm.module.css";
import {FaUser, FaEnvelope, FaPhone, FaRegCommentDots, FaComment} from 'react-icons/fa';

interface FormData {
    nome: string;
    email: string;
    assunto: string;
    telefone: string;
    mensagem: string;
}

export const ContactForm = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        assunto: '',
        telefone: '',
        mensagem: ''
    });

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const formatPhoneNumber = (value: string): string => {
        let cleaned = ('' + value).replace(/\D/g, '');
        cleaned = cleaned.replace(/^(\d{2})/, '($1) ');
        if (cleaned.length > 13) {
            cleaned = cleaned.replace(/(\d{5})(\d{4})/, '$1-$2');
        } else {
            cleaned = cleaned.replace(/(\d{4})(\d{4})/, '$1-$2');
        }
        return cleaned;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        let phone = e.target.value.replace(/\D/g, '');
        if (phone.length === 11) {
            phone = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (phone.length === 10) {
            phone = phone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        }
        setFormData({
            ...formData,
            telefone: phone
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        fetch('https://barbosacode-server.vercel.app/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: formData.nome,
                email: formData.email,
                assunto: formData.assunto,
                telefone: formData.telefone,
                mensagem: formData.mensagem
            })
        }).then((response) => {
            if (response.ok) {
                setLoading(false);
                setEmailSent(true);
                setEmailError(false);
                console.log('Email enviado com sucesso!');
            } else {
                setLoading(false);
                setEmailSent(false);
                setEmailError(true);
                console.log('Falha ao enviar o email.');
            }
        }).catch((error) => {
            setLoading(false);
            setEmailSent(false);
            setEmailError(true);
            console.error('Error:', error);
        });

        setFormData({
            nome: '',
            email: '',
            assunto: '',
            telefone: '',
            mensagem: ''
        });
    };

    return (
        <Layout
            id={"contact"}
            marginTop={100}
            sectionTitle={"Contato"}
            sectionSubTitle={"Converse comigo sobre propostas de emprego e projetos"}
            textColor={TextColor.TEXT_WHITE}
        >

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8  w-full my-40 ${styles.background}`}>
                <div className={" px-4"}>
                    <h1 className="text-2xl font-bold">Dúvidas, propostas ou sugestões?</h1>
                    <p className="mt-4 text-base">

                        Estou pronto para colaborar em novos projetos e oportunidades. Envie-me um email e vamos
                        discutir como posso contribuir para seus objetivos.

                    </p>
                    <div className="mt-8">
                        <img src="/assets/header-img.svg" className={`${styles.image} w-36 2xl:w-60`} alt="Imagem de cabeçalho"/>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={` w-full p-4 2xl:p-0 2xl:px-8 space-y-6 rounded-md shadow-md`}>


                    {loading && <p className="text-yellow-500 text-center">Enviando email...</p>}
                    {emailSent && <p className="text-green-500 text-center">Email enviado com sucesso!</p>}
                    {emailError && <p className="text-red-500 text-center">Falha ao enviar o email.</p>}
                    <div className="space-y-4 ">

                        <div className={`${styles.inputContainer} relative`}>
                            <FaUser className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className="outline-none bg-transparent w-full pl-10 pr-4 py-2 rounded-md"
                            />
                        </div>
                        <div className={`${styles.inputContainer} relative`}>
                            <FaEnvelope className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="outline-none bg-transparent w-full pl-10 pr-4 py-2 rounded-md"
                            />
                        </div>
                        <div className={`${styles.inputContainer} relative`}>
                            <FaRegCommentDots className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="text"
                                name="assunto"
                                placeholder="Assunto"
                                value={formData.assunto}
                                onChange={handleChange}
                                required
                                className="outline-none bg-transparent w-full pl-10 pr-4 py-2 rounded-md"
                            />
                        </div>
                        <div className={`${styles.inputContainer} relative`}>
                            <FaPhone className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="text"
                                name="telefone"
                                placeholder="Telefone (opcional)"
                                value={formData.telefone}
                                onChange={handlePhoneChange}
                                maxLength={15}
                                className="outline-none bg-transparent w-full pl-10 pr-4 py-2 rounded-md"
                            />
                        </div>
                        <div className={`${styles.inputContainer} relative`}>
                            <FaComment className="absolute left-3 top-3 text-gray-500"/>
                            <textarea
                                name="mensagem"
                                placeholder="Mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                                className={`outline-none bg-transparent w-full pl-10 pr-4 py-2 rounded-md`}
                            />
                        </div>
                        <div className="flex justify-start w-full">
                            <button
                                type="submit"
                                className={`${!loading && styles.submitButton} w-full px-4 py-2 font-bold text-white bg-purple-custom rounded-md hover:bg-purple-gray-custom focus:outline-none focus:ring-2 focus:ring-purple-custom`}
                            >
                                {loading ? 'Enviando...' : 'Enviar e-mail'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};
