import { NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formSchema = z.object({
  nomeCompleto: z.string().min(3),
  email: z.string().email(),
  telefone: z.string().min(8),
  dataNascimento: z.string(),
  cpf: z.string().length(11),
  endereco: z.string(),
  cidade: z.string(),
  estado: z.string(),
  profissao: z.string(),
  salario: z.coerce.number(),
  aceitaTermos: z.boolean(),
});

export async function POST(req: Request) {
  const data = await req.json();
  const parsed = formSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const usuario = await prisma.usuario.create({ data: parsed.data });
    return NextResponse.json(usuario);
  } catch {
    return NextResponse.json(
      { error: "Erro ao salvar no banco" },
      { status: 500 }
    );
  }
}
