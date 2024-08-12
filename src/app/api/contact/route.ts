import { NextResponse } from "next/server";

import { sendEmail } from "../../service/contact.service";

type emailResponse = {
  status: number;
  message: string;
};

function timeout(ms: number) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
}

export async function POST(req: Request): Promise<Response> {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    //  Timeout after 10 seconds
    const response = await Promise.race([sendEmail(name, email, message), timeout(5000)]);
    // if(response!=='timeout') console.log(response);
    // else console.log('Timeout');
    return new Response(JSON.stringify({ status: 200, message: "Email sent successfully" }));


    // const response: emailResponse = await sendEmail(name, email, message);

    // if(response){
    //   return new Response(JSON.stringify(response));
    // }
  }
  catch (error) {
    return new Response(JSON.stringify(error));
  }
};
