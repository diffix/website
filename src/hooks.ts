import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (response.headers.get("content-type") !== "text/html") {
    return response;
  }

  const lang = event.url.pathname.startsWith("/de") ? "de" : "en";
  const text = await response.text();
  return new Response(text.replace("%lang%", lang), {
    headers: response.headers,
    status: response.status,
    statusText: response.statusText
  });
};
