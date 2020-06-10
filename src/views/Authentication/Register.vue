<template>
    <div>
        <h1 class="login-title">Nova Conta</h1>
        <img src="~@/assets/img/register-placeholder.png" alt="">
        <div class="login-card-form">
            <div class="input-holder">
                <label>Nome Completo</label>
                <input type="text" placeholder="Jonh Doe">
            </div>
            <div class="input-holder mt-20">
                <label>Email</label>
                <input type="text" placeholder="exemplo@exemplo.com">
            </div>
            <div class="input-holder mt-20">
                <label>SENHA</label>
                <input type="password" placeholder="********">
            </div>

            <button v-if="!isLoading" class="primary-button ripple mt-20" @click="login">
                CRIAR
            </button>
            <button v-else class="primary-button ripple mt-20">
                <Spinner size="small" />
            </button>

            <router-link to="login" class="centered-link">Já possui uma conta? Entrar</router-link>
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
                this.isLoading = false
                this.$router.push({
                    name: 'Complete'
                })
            }, 3000)
        }
    }
}
</script>