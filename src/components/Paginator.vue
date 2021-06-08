<template>
    <p>Total: {{ total }}</p>
    <ul>
        <li v-for="page in pages" :key="page">
            <span v-if="current_page === page" class="current_page">{{page}}</span>
            <span v-else><a href="" @click.prevent="moveToPage(page)">{{page}}</a></span>
        </li>
    </ul>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: "Paginator",
    props: ["total", "current_page", "last_page"],
    emits: ["movetopage"],
    setup: (props, { emit }) => {
        const pages = ref([])
        for (let i = 1; i <= props.last_page; i++) {
            pages.value.push(i)
        }
        const moveToPage = page => emit("movetopage", page)

        return {
            pages,
            moveToPage
        }
    },
}
</script>

<style>
.current_page {
    color: crimson;
}
</style>
