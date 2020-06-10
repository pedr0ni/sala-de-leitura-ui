<template>
    <div class="complete-holder">
        <h1 class="login-title">TUDO OK!</h1>
        <img src="~@/assets/img/complete-placeholder.png" alt="">
        <div class="login-card-form">
            <p class="body-one text-center">Um e-mail foi enviado para sua caixa de entrada. Verifique para completar seu registro.</p>
            <button class="primary-button ripple mt-20" @click="$router.push({name: 'Login'})">ENTRAR</button>
        </div>
    </div>
</template>
