<template>
    <div>
        <div class="action-holder">
            <div class="input-holder icon-input">
                <Icon name="search" />
                <input type="text" placeholder="Buscar por livros...">
            </div>
            <button class="primary-button button-icon">
                <Icon name="add" />
                CADASTRAR
            </button>
        </div>

        <div class="spinner-holder" v-if="isLoading">
            <Spinner :hasColor="true" size="large" v-if="isLoading" />
        </div>
        <EmptyState v-else-if="books.length == 0" />
        <table class="table-responsive" v-else>
                <thead>
                    <tr>
                        <td>#ID</td>
                        <td>Nome</td>
                        <td>Autor</td>
                        <td>Categoria</td>
                        <td>Páginas</td>
                        <td>Estante</td>
                        <td>Data de Criação</td>
                        <td>Ação</td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="book in books" :key="book.bookId">
                        <td>{{ book.bookId }}</td>
                        <td>{{ book.name }}</td>
                        <td>{{ book.author }}</td>
                        <td>{{ book.category }}</td>
                        <td>{{ book.pages }}</td>
                        <td>{{ book.shelf }}</td>
                        <td>{{ book.createdAt }}</td>
                        <td>
                            <Icon name="more_vert"/>
                        </td>
                    </tr>
                </tbody>

            </table>
    </div>
</template>

<script>
import booksMock from '../../mocks/books.json'

export default {
    data() {
        return {
            books: [],
            isLoading: false
        }
    },
    methods: {
        loadData() {
            this.isLoading = true
            this.books = booksMock
            setTimeout(() => {
                this.isLoading = false
            }, this.$fakeDelay)
        }
    },
    beforeMount() {
        this.loadData()
    }
}
</script>