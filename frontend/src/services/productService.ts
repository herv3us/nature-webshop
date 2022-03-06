const fetchDataByUrl = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async () => {
  const fetchUrl = '/api/products';
  return fetchDataByUrl(fetchUrl);
};

export const getProductById = async (urlId: string) => {
  const fetchUrl = `/api/products/${urlId}`;
  return fetchDataByUrl(fetchUrl);
};

export const updateProduct = async (
  product: object,
  id: string,
  token: string
) => {
  const res = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Autorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const createProduct = async (product: object, token: string) => {
  const newProduct = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(product)
  })

  const productData = await newProduct.json()
  return productData;
}

export const deleteProduct = async (productId: string, token: string) => {
  const res = await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
  const data = await res.json()
  return data
}