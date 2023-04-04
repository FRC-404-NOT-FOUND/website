import { APIRoute } from 'astro';

export const get: APIRoute = async ({ redirect, request }) => {
  const search = new URL(request.url).searchParams;
  const email = search.get('email');
  if (!email) {
    return redirect('/');
  }
  console.log(`${email} signed up for the newsletter`);
  return redirect(`/newsletter-thank-you?email=${email}`);
};
