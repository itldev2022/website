/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
const API_URL = 'https://graphql.datocms.com';
const NEXT_DATOCMS_API_TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;

export async function fetchAPI(query: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}
