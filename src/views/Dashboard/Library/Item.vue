<template>
    <div class="form-holder form-item">
        <div class="image-holder">
            <label for="fileInput"></label>
            <input id="fileInput" class="hidden-input" type="file">
            <i class="material-icons">add_a_photo</i>
            <p class="body-one">Adicionar foto de capa</p>
        </div>
        <div class="form-info-holder">
            <div class="input-holder">
                <label>Nome</label>
                <input :value="item ? item.name : ''" placeholder="O Pequeno Príncipe" type="text">
            </div>

            <div class="input-holder">
                <label>Autor</label>
                <input :value="item ? item.author : ''" placeholder="Antoine de Saint-Exupéry" type="text">
            </div>

            <div class="input-holder">
                <label>Total de páginas</label>
                <input :value="item ? item.pages : ''" placeholder="200" type="number">
            </div>

            <div class="input-holder">
                <label>Número da estante</label>
                <input :value="item ? item.shelf : ''" placeholder="2" type="text">
            </div>

            <div class="form-buttons">
                <button class="button success-button ripple" v-if="item == null">
                    <i class="material-icons">add</i>
                    CRIAR
                </button>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>