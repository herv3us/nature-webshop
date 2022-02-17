export const login = async (username: string, password: string) => {
  try {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createNewUser = async (userObj: object) => {
  console.log('in createNewUser', userObj)

  try {
    const newUser = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    });
    const userData = await newUser.json();
    console.log(userData)
    return userData;
  } catch(err) {
    console.log(err)
  }
};
