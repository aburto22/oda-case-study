const baseUrl = 'http://localhost:3000/';

export async function fetchProducts(search = '', page = 1): Promise<ApiRes> {
  const url = new URL('/search', baseUrl);

  url.searchParams.set('q', search);

  if (page >= 1) {
    url.searchParams.set('page', page.toString());
  }

  const res = await fetch(url);

  return await res.json();
}
