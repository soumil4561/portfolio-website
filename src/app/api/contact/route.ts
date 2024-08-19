import { sendEmail } from "../../service/contact.service";

type messageBody = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request): Promise<Response> {
  const body: messageBody = (await req.json()) as messageBody;
  const { name, email, message } = body;
  try {
    const response = await sendEmail(name, email, message);
    return new Response(JSON.stringify(response));
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error }));
  }
}