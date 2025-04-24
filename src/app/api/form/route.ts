import { NextResponse } from "next/server";
import { z } from "zod";
import { getDbConnection } from "@/lib/db"; // ajuste o caminho conforme sua estrutura

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
    const db = await getDbConnection();

    const {
      nomeCompleto,
      email,
      telefone,
      dataNascimento,
      cpf,
      endereco,
      cidade,
      estado,
      profissao,
      salario,
      aceitaTermos,
    } = parsed.data;

    await db
      .request()
      .input("nomeCompleto", nomeCompleto)
      .input("email", email)
      .input("telefone", telefone)
      .input("dataNascimento", dataNascimento)
      .input("cpf", cpf)
      .input("endereco", endereco)
      .input("cidade", cidade)
      .input("estado", estado)
      .input("profissao", profissao)
      .input("salario", salario)
      .input("aceitaTermos", aceitaTermos).query(`
        INSERT INTO Usuarios (
          nomeCompleto, email, telefone, dataNascimento, cpf, endereco,
          cidade, estado, profissao, salario, aceitaTermos
        )
        VALUES (
          @nomeCompleto, @email, @telefone, @dataNascimento, @cpf, @endereco,
          @cidade, @estado, @profissao, @salario, @aceitaTermos
        )
      `);

    return NextResponse.json({ message: "Dados salvos com sucesso" });
  } catch (error) {
    console.error("Erro ao salvar no banco:", error);
    return NextResponse.json(
      { error: "Erro interno ao salvar no banco" },
      { status: 500 }
    );
  }
}
