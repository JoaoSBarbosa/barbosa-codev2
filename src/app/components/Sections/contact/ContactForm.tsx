// import React, {useState} from 'react';
// import {Layout, TextColor} from "@/app/components/Layout/Layout";
// import styles from "./ContactForm.module.css";
// export const ContactForm = () => {
//     const [emailSent, setEmailSent] = useState(false);
//     const [emailError, setEmailError] = useState(false);
//     const [loading, setLoading] = useState(false);
//
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         phone: '',
//         message: ''
//     });
//
//     const validateEmail = (email:string) => {
//         // Regex para validar formato de email
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     };
//
//     const formatPhoneNumber = (value: string) => {
//         // Remove tudo que não for dígito
//         let cleaned = ('' + value).replace(/\D/g, '');
//
//         // Adiciona o primeiro parêntese após o DDD
//         cleaned = cleaned.replace(/^(\d{2})/, '($1) ');
//
//         // Verifica se é celular ou fixo
//         if (cleaned.length > 13) {
//             // Se for celular, adiciona o nono dígito
//             cleaned = cleaned.replace(/(\d{5})(\d{4})/, '$1-$2');
//         } else {
//             // Se for fixo, mantém o padrão (xxxx-xxxx)
//             cleaned = cleaned.replace(/(\d{4})(\d{4})/, '$1-$2');
//         }
//
//         return cleaned;
//     };
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };
//
//     const handlePhoneChange = (e:any) => {
//         let phone = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
//         if (phone.length === 11) {
//             // Adiciona a máscara para celular (DD) 9 9999-9999
//             phone = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
//         } else if (phone.length === 10) {
//             // Adiciona a máscara para telefone fixo (DD) 4444-4444
//             phone = phone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
//         }
//         setFormData({
//             ...formData,
//             phone: phone
//         });
//     };
//
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);
//         // fetch('http://localhost:5500/send-email', {
//         fetch('https://barbosacode-server.vercel.app/send-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         }).then((response) => {
//             if (response.ok) {
//                 setLoading(false);
//                 setEmailSent(true); // Define o estado para indicar que o email foi enviado com sucesso
//                 setEmailError(false); // Reseta o estado de erro
//                 console.log('Email enviado com sucesso!');
//             } else {
//                 setLoading(false);
//                 setEmailSent(false); // Define o estado para indicar que houve uma falha no envio do email
//                 setEmailError(true); // Define o estado para indicar que houve um erro ao enviar o email
//                 console.log('Falha ao enviar o email.');
//             }
//         }).catch((error) => {
//             console.error('Error:', error);
//         });
//
//         setFormData({
//             name: '',
//             email: '',
//             subject: '',
//             phone: '',
//             message: ''
//         });
//         setLoading(false);
//     };
//
//     return (
//         <Layout
//             id={"contact"}
//             marginTop={100}
//             sectionTitle={"Contato"}
//             textColor={TextColor.TEXT_WHITE}
//             sectionSubTitle={"Vamos bater um papo! Estou aqui para ouvir suas ideias e projetos."}
//         >
//             <div className={`rounded-md flex items-start justify-center p-4 2xl:p-0  w-full`}>
//                 <form onSubmit={handleSubmit} className={`${styles.neuralAnimation} w-full  p-8 space-y-6 rounded-md shadow-md`}>
//                     <h2 className="text-2xl font-bold text-purple-custom">Contato</h2>
//                     {loading && <p className="text-yellow-500">Enviando email...</p>}
//                     {emailSent && <p className="text-green-500">Email enviado com sucesso!</p>}
//                     {emailError && <p className="text-red-500">Falha ao enviar o email.</p>}
//                     <div className="flex flex-col space-y-4">
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Nome"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="bg-dark-gray w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-custom"
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="E-mail"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="bg-dark-gray w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-custom"
//                         />
//                         <input
//                             type="text"
//                             name="subject"
//                             placeholder="Assunto"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                             className="bg-dark-gray w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-custom"
//                         />
//                         <input
//                             type="text"
//                             name="phone"
//                             placeholder="Telefone (opcional)"
//                             value={formData.phone}
//                             // onChange={handleChange}
//                             onChange={handlePhoneChange}
//                             maxLength={15}
//                             className="bg-dark-gray w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-custom"
//                         />
//                         <textarea
//                             name="message"
//                             placeholder="Messagem"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             className="bg-dark-gray w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-custom"
//                         />
//                         <button
//                             type="submit"
//                             className="max-w-max px-4 py-2 font-bold text-white bg-purple-custom
//                             rounded-md hover:bg-purple-gray-custom focus:outline-none focus:ring-1 focus:ring-purple-custom"
//                         >
//                             {loading ? 'Enviando...' : 'Enviar'}
//
//                         </button>
//                     </div>
//                 </form>
//             </div>
//
//         </Layout>
//     );
// };



import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Layout, TextColor } from "@/app/components/Layout/Layout";
import styles from "./ContactForm.module.css";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    subject: string;
    phone: string;
    message: string;
}

export const ContactForm = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
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
            phone: phone
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
                nome: formData.name,
                email: formData.email,
                assunto: formData.subject,
                telefone: formData.phone,
                mensagem: formData.message
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
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });
    };

    return (
        <Layout
            id={"contact"}
            marginTop={100}
            sectionTitle={"Contato"}
            textColor={TextColor.TEXT_WHITE}
        >
            {/*<div className={`rounded-md flex items-start justify-center p-4 2xl:p-0 w-full`}>*/}

            <div className={` grid grid-cols-2 w-full mt-20`}>

                <div>

                    <h1 className={"text-4xl"}>Do you have any questions?</h1>
                    <p>Vamos bater um papo! Estou aqui para ouvir suas ideias e projetos.</p>
                    <div>
                        <img src={"/assets/header-img.svg"} className={"w-80"}/>
                    </div>
                </div>

                <form onSubmit={handleSubmit}
                      className={` w-full p-8 space-y-6 rounded-md shadow-md`}>
                    {/*<h2 className="text-3xl font-bold text-purple-custom text-center">Entre em Contato</h2>*/}
                    {loading && <p className="text-yellow-500 text-center">Enviando email...</p>}
                    {emailSent && <p className="text-green-500 text-center">Email enviado com sucesso!</p>}
                    {emailError && <p className="text-red-500 text-center">Falha ao enviar o email.</p>}
                    <div className="space-y-4">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="bg-dark-gray w-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-custom"
                            />
                        </div>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="bg-dark-gray w-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-custom"
                            />
                        </div>
                        <div className="relative">
                            <FaRegCommentDots className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Assunto"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="bg-dark-gray w-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-custom"
                            />
                        </div>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-3 text-gray-500"/>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Telefone (opcional)"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                maxLength={15}
                                className="bg-dark-gray w-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-custom"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Mensagem"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-dark-gray w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-custom"
                        />
                        <div className="flex justify-start w-full">
                            <button
                                type="submit"
                                className="text-start w-full px-4 py-2 font-bold text-white bg-purple-custom rounded-md hover:bg-purple-gray-custom focus:outline-none focus:ring-2 focus:ring-purple-custom"
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
