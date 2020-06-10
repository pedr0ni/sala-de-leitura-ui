<template>
    <div>
        <h1 class="login-title">SALA DE LEITURA</h1>
        <img src="~@/assets/img/login-placeholder.png" alt="">
        <div class="login-card-form">
            <div class="input-holder">
                <label>Email</label>
                <input type="text" placeholder="exemplo@exemplo.com">
            </div>
            <div class="input-holder mt-20">
                <label>SENHA</label>
                <input type="password" placeholder="********">
            </div>

            <div class="md-checkbox mt-15">
                <input id="test" type="checkbox" checked>
                <label for="test">Mantenha-me logado</label>
            </div>

            <button v-if="!isLoading" class="primary-button ripple mt-20" @click="login">
                ACESSAR
            </button>
            <button v-else class="primary-button ripple mt-20">
                <Spinner size="small" />
            </button>

            <router-link to="register" class="centered-link">Não possui uma conta? Registrar</router-link>
        </div>
    </div>
</template>

<script>
import Snackbar from '../../components/Snackbar'
export default {
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        login() {
            
            this.isLoading = true
            setTimeout(() => {
                Snackbar.show('Nome de usuário ou senha incorreto(s)...')
                this.isLoading = false
            }, 3000)
        }
    }
}
</script>