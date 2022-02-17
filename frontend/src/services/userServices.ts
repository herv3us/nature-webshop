const fetchDataByUrl = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsers = async () => {
  const fetchUrl = '/api/users';
  return fetchDataByUrl(fetchUrl);
};