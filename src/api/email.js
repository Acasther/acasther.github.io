import { contactTemplate } from './emails/template';

export async function sendContactEmail(name, email, message, subject) {
  const params = {
    from: `Costa Legal <${process.env.REACT_APP_MAIL_FROM_FORM}>`,
    to: ['costalegalcr@gmail.com'],
    subject,
    html: contactTemplate(name, email, message),
  }

  try {
    const res = await fetch('https://resend.liv-sap92.workers.dev/', {
      method: 'POST',
      body: JSON.stringify(params)
    });
    return res;
  } catch (e) {
    console.log('Error Sending Email', e);
    return {
      error: 'Internal server error',
      status: 500
    }
  }
}
