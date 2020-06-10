<template>
    
    <div>
        <header class="dashboard-header shadow-two">
            <div class="logo-holder">
                <h6 class="logo">SALA DE LEITURA</h6>
                <div class="vertical-separator"></div>
            </div>
            <div class="menu-items">
                <router-link to="overview">PAINEL</router-link>
                <router-link to="books">LIVROS</router-link>
                <router-link to="movies">FILMES</router-link>
                <router-link to="students">ALUNOS</router-link>
            </div>
            <div class="menu-icons">
                <router-link to="profile/my">
                    <i class="material-icons">account_circle</i>
                </router-link>
            </div>
        </header>

        <router-view class="dashboard" />
    </div>

</template>