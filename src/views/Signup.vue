<template>
  <div class="login">
    <div class="name">Name</div>
    <input v-model="name" type="text" @keyup="nameHandler" />
    <div class="username">Username</div>
    <input
      v-model="username"
      ref="usernameEl"
      type="text"
      @keyup="usernameHandler"
    />
    <div v-if="error.type === 'USERNAME'" class="signup-error">
      {{ error.msg }}
    </div>

    <div class="password">Password</div>
    <input
      v-model="password1"
      ref="password1El"
      @keyup="passwordHandler($event, 1)"
      type="password"
    />

    <div class="conf">Conf. Password</div>
    <input
      v-model="password2"
      ref="password2El"
      @keyup="passwordHandler($event, 2)"
      type="password"
    />
    <div v-if="error.type === 'PASSWORD'" class="signup-error">
      {{ error.msg }}
    </div>

    <div class="btn">
      <button @click="signup">Signup</button>
    </div>

    <div class="conta">
      Já tem conta ? <router-link to="/login">Login</router-link>
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
    const password1El = ref();
    const password2El = ref();
    const state = reactive({
      name: '',
      username: '',
      password1: '',
      password2: '',
      error: { type: '', msg: '' },
    });

    const signup = async () => {
      state.error.type = '';
      state.error.msg = '';

      if (!state.username) {
        state.error.type = 'USERNAME';
        state.error.msg = 'Please enter your username';
        return;
      }

      if (!state.password1) {
        state.error.type = 'PASSWORD';
        state.error.msg = 'Please enter your password';
        return;
      }

      if (state.password1 !== state.password2) {
        state.error.type = 'PASSWORD';
        state.error.msg = 'Password mismatch';
        return;
      }

      console.log('vamos fazer o signup', state.username, state.password1);
      const res = await auth.actions.signup(
        state.name,
        state.username,
        state.password1,
      );
      if (res.status === 'OK') {
        console.log('ok');
      }
      // verifica se tem erro e mostra na tela
    };

    const nameHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.name) {
        usernameEl.value.focus();
      }
    };

    const usernameHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username) {
        password1El.value.focus();
      }
    };

    const passwordHandler = (e: KeyboardEvent, x: number) => {
      if (e.key !== 'Enter' || !state.username) {
        return;
      }

      if (x === 1 && state.password1) {
        password2El.value.focus();
      } else if (x === 2 && state.password1 && state.password2) {
        signup();
      }
    };

    return {
      ...toRefs(state),
      signup,
      nameHandler,
      usernameHandler,
      passwordHandler,
      usernameEl,
      password1El,
      password2El,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  background: lightgreen;
  color: darkmagenta;
}
.name {
  margin-top: 10px;
}
.username {
  margin-top: 10px;
}
.password {
  margin-top: 10px;
}
.conf {
  margin-top: 10px;
}
.btn {
  margin-top: 10px;
}
.conta {
  margin-top: 10px;
}
.signup-error {
  color: red;
}
</style>
