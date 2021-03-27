import { readonly } from 'vue';
import { Login } from '@/mockServer/server';

interface State {
  id: number;
  name: string;
  username: string;
  token: string;
}

const state: State = {
  id: 0,
  name: '',
  username: '',
  token: '',
};

const mutations = {
  login(obj: any) {
    state.id = obj.id;
    state.name = obj.name;
    state.username = obj.username;
    state.token = obj.token;
  },
};

const actions = {
  async login(username: string, password: string): Promise<any> {
    console.log('sou action, vamos logar', username, password);

    const res = await Login(username, password);

    if (res.status === 'OK') {
      mutations.login(res.result);
    }

    return res;
  },

  login2(username: string, password: string) {
    return new Promise((resolve) => {
      console.log('sou action, vamos logar', username, password);

      setTimeout(() => {
        resolve('hello');
      }, 3000);
    });
  },
};

export default function useAuth(): any {
  return readonly({
    state,
    actions,
  });
}
