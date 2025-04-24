import { z } from "zod";

export const formSchema = z.object({
  nomeCompleto: z
    .string()
    .min(
      3,
      "O nome completo é obrigatório e deve ter pelo menos 3 caracteres."
    ),
  email: z.string().email("Por favor, insira um email válido."),
  telefone: z.string().min(8, "O telefone deve ter pelo menos 8 caracteres."),
  dataNascimento: z.coerce.date().refine((data) => data > new Date(), {
    message: "Data invalida",
  }),
  cpf: z
    .string()
    .max(11, "O CPF deve ter 11 caracteres.")
    .min(11, "O CPF deve ter 11 caracteres."),
  endereco: z.string(),
  cidade: z.string(),
  estado: z.string(),
  profissao: z.string(),
  salario: z.coerce.number(),
  aceitaTermos: z.boolean(),
});
