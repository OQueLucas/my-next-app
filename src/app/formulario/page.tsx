"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Checkbox, Input } from "../components/Input";

const formSchema = z.object({
  nomeCompleto: z.string().min(3),
  email: z.string().email(),
  telefone: z.string().min(8),
  dataNascimento: z.coerce.date(),
  cpf: z.string().length(11),
  endereco: z.string(),
  cidade: z.string(),
  estado: z.string(),
  profissao: z.string(),
  salario: z.coerce.number(),
  aceitaTermos: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

export default function FormularioPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [status, setStatus] = useState("");

  console.log(errors);

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Formulário enviado com sucesso!");
    } else {
      setStatus("Erro ao enviar.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Formulário</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Nome completo" {...register("nomeCompleto")} />
        <Input label="Email" {...register("email")} />
        <Input label="Telefone" {...register("telefone")} />
        <Input
          label="Data de nascimento"
          type="date"
          {...register("dataNascimento")}
        />
        <Input label="CPF" {...register("cpf")} />
        <Input label="Endereço" {...register("endereco")} />
        <Input label="Cidade" {...register("cidade")} />
        <Input label="Estado" {...register("estado")} />
        <Input label="Profissão" {...register("profissao")} />
        <Input label="Salário" type="number" {...register("salario")} />
        <Checkbox {...register("aceitaTermos")} label="Aceita os termos?" />
        <button type="submit">Enviar</button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
