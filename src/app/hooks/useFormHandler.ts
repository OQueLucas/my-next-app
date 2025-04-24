import { useEffect, useState } from "react";
import { cpfMask } from "../components/masks/cpf"; // Importe a máscara do CPF do seu componente de máscara
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "../formulario/schema";

type FormData = z.infer<typeof formSchema>;

export const useFormHandler = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // const cpf = watch("cpf");

  // useEffect(() => {
  //   if (cpf) {
  //     setValue("cpf", cpfMask(cpf));
  //   }
  // }, [cpf, setValue]);

  // Define a função onSubmit com o tipo específico
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setIsSubmitting(false);

      if (res.ok) {
        setStatus("Formulário enviado com sucesso!");
      } else {
        setStatus("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch {
      setIsSubmitting(false);
      setStatus("Erro de conexão. Tente novamente.");
    }
  };

  return { register, handleSubmit, onSubmit, errors, status, isSubmitting };
};
