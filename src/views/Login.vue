<template>
  <div class="menuLogin">
    <div class="username">Username</div>
    <input
      v-model="username"
      ref="usernameEl"
      type="text"
      @keyup="usernameHandler"
    />

    <div class="password">Password</div>
    <input
      v-model="password"
      ref="passwordEl"
      @keyup="passwordHandler"
      type="password"
    />

    <div class="btnLogin">
      <button @click="login">Login</button>
    </div>

    <div class="signup">
      Não tem conta? <router-link to="/signup">Cadastre-se aqui</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import {
  defineComponent, reactive, ref, toRefs,
} from 'vue';

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();
    const usernameEl = ref();
    const passwordEl = ref();
    const state = reactive({
      username: '',
      password: '',
    });

    const login = async () => {
      console.log('vamos fazer o login', state.username, state.password);
      if (state.username && state.password) {
        const res = await auth.actions.login(state.username, state.password);
        console.log('res do login', res);

        if (res.status === 'WRONG_USER') {
          // seta uma msg de erro
          // console.log('ERROR');
        }
      }
    };

    const usernameHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username) {
        console.log('apertou enter, vai pro password', passwordEl.value);
        passwordEl.value.focus();
      }
    };

    const passwordHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && state.password) {
        login();
      }
    };

    return {
      ...toRefs(state),
      login,
      usernameHandler,
      passwordHandler,
      usernameEl,
      passwordEl,
    };
  },
});
</script>

<style lang="scss" scoped>
.menuLogin {
  color: magenta;
}
.username {
  margin-top: 20px;
  margin-bottom: 10px;
}
.password {
  margin-top: 20px;
  margin-bottom: 10px;
}
.btnLogin {
  margin-top: 20px;
  margin-bottom: 10px;
}
.signup {
  margin-top: 20px;
}
</style>
