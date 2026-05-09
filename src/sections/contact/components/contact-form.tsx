"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Loader2, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { toast } from "sonner";
import { ContactField } from "@/sections/contact/components/contact-field";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};

const contactApiUrl = "https://barbosa-codev2-node.vercel.app/api";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const loading = status === "loading";

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    let phone = e.target.value.replace(/\D/g, "").slice(0, 11);

    if (phone.length === 11) {
      phone = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (phone.length === 10) {
      phone = phone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    }

    setFormData((current) => ({
      ...current,
      phone,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar email");
      }

      setFormData(initialFormData);
      setStatus("success");
      toast.success("Email enviado com sucesso.");
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error("Falha ao enviar o email. Tente novamente em instantes.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-5 shadow-sm md:p-8"
    >
      <div className="mb-6 border-b border-border pb-5">
        <h3 className="text-xl font-semibold text-foreground">Envie uma mensagem</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Use este canal para oportunidades de contratação, processos seletivos e contatos profissionais.
        </p>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <ContactField
            icon={<User className="h-5 w-5" />}
            label="Nome"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <ContactField
            icon={<Mail className="h-5 w-5" />}
            label="E-mail"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <ContactField
            icon={<Phone className="h-5 w-5" />}
            label="Telefone"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={15}
          />

          <ContactField
            icon={<MessageSquare className="h-5 w-5" />}
            label="Assunto"
            name="subject"
            placeholder="Sobre o que vamos conversar?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <ContactField
          kind="textarea"
          icon={<MessageSquare className="h-5 w-5" />}
          label="Mensagem"
          name="message"
          placeholder="Conte um pouco sobre a oportunidade ou processo."
          value={formData.message}
          onChange={handleChange}
          required
        />

        {status === "success" ? (
          <p className="rounded-lg border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
            Email enviado com sucesso.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            Falha ao enviar o email. Tente novamente em instantes.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Enviar email
            </>
          )}
        </button>
      </div>
    </form>
  );
}
