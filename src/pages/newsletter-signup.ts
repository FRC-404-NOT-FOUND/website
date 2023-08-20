import { APIRoute } from 'astro';

export const get: APIRoute = async ({ redirect, request }) => {
  const search = new URL(request.url).searchParams;
  const email = search.get('email');
  if (!email) {
    return redirect('/');
  }
  // TODO: Newsletter signup implementation
  // Possibilities:
  // - Google Sheets
  // - Newsletter Service
  // - Hacky stuff (Gmail API and loops with a dedicated email, SMTP, etc.)
  console.log(`${email} signed up for the newsletter`);
  return redirect(`/newsletter-thank-you?email=${email}`); // Email param "verifies"
};
