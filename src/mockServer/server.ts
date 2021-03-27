const user = {
  id: 1,
  name: 'fulano',
  username: 'asd',
  password: 'asd',
  status: 'Ok',
};

export const Login = async (username: string, password: string) :Promise<any> => {
  if (username !== user.username) {
    return { status: 'WRONG_USER' };
  }

  if (password !== user.password) {
    return { status: 'WRONG_PASSWORD' };
  }

  return {
    status: 'OK',
    result: {
      id: user.id,
      name: user.name,
      username: user.username,
      token: 'superUltraLongToken',
    },
  };
};
