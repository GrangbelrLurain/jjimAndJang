import { json, type RequestEvent } from '@sveltejs/kit';
import dotenv from 'dotenv';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

/** @type {import('@sveltejs/kit').RequestHandler} */
// eslint-disable-next-line import/prefer-default-export
export async function POST({ request }: RequestEvent) {
  dotenv.config();
  const reqForm = await request.formData();

  const email = reqForm.get('email') as string;
  const title = reqForm.get('title') as string;
  const content = reqForm.get('content');
  const tel = reqForm.get('tel');

  const mailgun = new Mailgun(formData);

  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  });

  const mailSendResult = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
    from: email,
    to: [process.env.MAIL_ADDRESS],
    subject: title,
    text: '',
    html: `
      ${content}<br>
      연락처 : ${tel}
      `,
  });

  if (mailSendResult.status === 200) {
    return json({
      mailSendResult,
    });
  }
  return json({
    status: 200,
    message: 'API error',
  });
}
