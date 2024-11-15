const baseUrl = 'http://localhost:3000/';

export async function fetchProducts(search = ''): Promise<ApiRes> {
  const url = new URL('/search', baseUrl);

  url.searchParams.set('q', search);

  const res = await fetch(url);

  return await res.json();
}
