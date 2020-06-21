<template>
    <div>
        <div class="action-holder">
            <div class="input-holder icon-input">
                <Icon name="search" />
                <input type="text" placeholder="Buscar por livros ou filmes...">
            </div>
            <router-link to="/dashboard/library/create">
                <button class="button primary-button ripple">
                    <Icon name="add" />
                    CADASTRAR
                </button>
            </router-link>
        </div>

        <div class="spinner-holder" v-if="isLoading">
            <Spinner :hasColor="true" size="large" v-if="isLoading" />
        </div>
        <EmptyState 
        image="login-placeholder.png" 
        title="Nenhum livro encontrado..." 
        content="Sua biblioteca de livros aparece aqui, clique no botão CADASTRAR para adicionar um livro" 
        v-else-if="items.length == 0" />
        <div v-else>
            <table class="table-responsive">
                <thead>
                    <tr>
                        <td>#ID</td>
                        <td>Tipo</td>
                        <td>Nome</td>
                        <td>Autor</td>
                        <td>Categoria</td>
                        <td>Status</td>
                        <td>Data de Criação</td>
                        <td>Ação</td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in items" :key="item.itemId">
                        <td>{{ item.itemId }}</td>
                        <td>
                            <Icon :name="item.type.icon" />
                        </td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.author }}</td>
                        <td>{{ item.category }}</td>
                        <td>
                            <span class="status status-success">DISPONÍVEL</span>
                        </td>
                        <td>{{ item.createdAt }}</td>
                        <td>
                            <Icon type="action-icon" name="more_vert">
                                <router-link :to="`/dashboard/library/${item.itemId}`"><Icon name="create" /> Editar</router-link>
                                <a @click="copyItemLink(item)"><Icon name="link" /> Compartilhar link</a>
                                <a @click="deleteItem(item)" class="danger-link"><Icon name="delete" /> Deletar</a>
                            </Icon>
                        </td>
                    </tr>
                </tbody>

            </table>
            <div class="table-pagination">
                <div class="back ripple">
                    <i class="material-icons">chevron_left</i>
                </div>
                <p class="body-one">Página 1</p>
                <div class="forward ripple">
                    <i class="material-icons">chevron_right</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Snackbar from '@/components/Snackbar'

import itemsMock from '@/mocks/item.json'

export default {
    data() {
        return {
            items: [],
            isLoading: false
        }
    },
    methods: {
        loadData() {
            this.isLoading = true
            this.items = itemsMock
            setTimeout(() => {
                this.isLoading = false
            }, this.$fakeDelay)
        },

        deleteItem(item) {
            Snackbar.show(`Você realmente deseja deletar o item ${item.name}?`, 'DELETAR', 6000, () => {
                this.items = this.items.filter(i => i.itemId != item.itemId)
                Snackbar.show(`O item ${item.name} foi removido da sua biblioteca.`)
            })
        },

        copyItemLink(item) {
            console.log(item)
        }
    },
    beforeMount() {
        this.loadData()
    }
}
</script>