<template>
    <h1>File Errors x</h1>
    <FileErrorList v-if="file_errors" :file_errors="file_errors" />
    <Paginator v-if="file_errors" :total="total" :current_page="current_page" :last_page="last_page" 
        @movetopage="moveToPage"/>
    <router-link :to="{name: 'FilesView'}">back</router-link>
</template>

<script>
import FileErrorService from "../composables/FileErrorService"
import FileErrorList from "../components/FileErrorList"
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import Paginator from "../components/Paginator"

export default {
    name: "FileErrorsView",
    components: { FileErrorList, Paginator },
    props: ["id"],
    setup(props) {
        const { getPaginated } = FileErrorService()
        const file_errors = ref(null)
        const total = ref(0)
        const current_page = ref(0)
        const last_page = ref(0)
        const mapData = (jsonResponse) => {
            file_errors.value = jsonResponse.data
            total.value = +jsonResponse.total
            current_page.value = +jsonResponse.current_page
            last_page.value = +jsonResponse.last_page
        }
        const moveToPage = async (page) => mapData(await getPaginated(props.id, page))
        onMounted(async () => mapData(await getPaginated(props.id)))
        return { file_errors, moveToPage, total, current_page, last_page }
    }
}
</script>

<style>

</style>
