"use client";

import { Checkbox, Input } from "../components/forms";
import ThemeSwitch from "../components/ThemeSwitch";
import { useFormHandler } from "../hooks/useFormHandler";

export default function FormularioPage() {
  const { register, handleSubmit, onSubmit, errors, status, isSubmitting } =
    useFormHandler();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center">
            Formulário de Cadastro
          </h1>
          <ThemeSwitch />
        </div>

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
            maxLength={14}
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
            className={`w-full p-3 rounded-lg font-semibold transition-colors duration-300 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 dark:focus:ring-lime-300
              ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-lime-600 hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-600"
              }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-center">{status}</p>}
      </div>
    </div>
  );
}
