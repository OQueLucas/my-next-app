"use client";

import { Checkbox, Input } from "../components/forms";
import { useFormHandler } from "../hooks/useFormHandler";

export default function FormularioPage() {
  const { register, handleSubmit, onSubmit, errors, status, isSubmitting } =
    useFormHandler();

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Formulário de Cadastro
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Nome completo"
          {...register("nomeCompleto")}
          helperText={errors.nomeCompleto?.message}
        />
        <Input
          label="Email"
          {...register("email")}
          helperText={errors.email?.message}
        />
        <Input
          label="Telefone"
          minLength={8}
          maxLength={11}
          {...register("telefone")}
          helperText={errors.telefone?.message}
        />
        <Input
          label="Data de nascimento"
          type="date"
          {...register("dataNascimento")}
          helperText={errors.dataNascimento?.message}
        />
        <Input
          label="CPF"
          maxLength={11}
          {...register("cpf")}
          helperText={errors.cpf?.message}
        />
        <Input
          label="Endereço"
          {...register("endereco")}
          helperText={errors.endereco?.message}
        />
        <Input
          label="Cidade"
          {...register("cidade")}
          helperText={errors.cidade?.message}
        />
        <Input
          label="Estado"
          {...register("estado")}
          helperText={errors.estado?.message}
        />
        <Input
          label="Profissão"
          {...register("profissao")}
          helperText={errors.profissao?.message}
        />
        <Input
          label="Salário"
          type="number"
          {...register("salario")}
          helperText={errors.salario?.message}
        />
        <Checkbox
          {...register("aceitaTermos")}
          label="Aceito os termos"
          helperText={errors.aceitaTermos?.message}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-3 rounded-lg font-semibold ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-lime-600 hover:bg-lime-700"
          } text-white focus:outline-none focus:ring-2 focus:ring-lime-500`}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-center">{status}</p>}
    </div>
  );
}
