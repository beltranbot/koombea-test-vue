<template>
    <h1>Uploaded Files</h1>
    <FileList v-if="files" :files="files" @filedownload="fileDownload"/>
    <Paginator v-if="files" :total="total" :current_page="current_page" :last_page="last_page" 
        @movetopage="moveToPage"/>
</template>

<script>
import { ref } from '@vue/reactivity'
import FileService from "../composables/FileService"
import FileList from "../components/FileList"
import { onMounted } from '@vue/runtime-core'
import Paginator from "../components/Paginator"

export default {
    name: "FilesView",
    setup() {
        const total = ref(0)
        const current_page = ref(0)
        const last_page = ref(0)
        const files = ref(null)
        const { getPaginated, downloadFile } = FileService()
        const mapData = (jsonResponse) => {
            files.value = jsonResponse.data
            total.value = +jsonResponse.total
            current_page.value = +jsonResponse.current_page
            last_page.value = +jsonResponse.last_page
        }
        const moveToPage = async (page) => mapData(await getPaginated(page))
        onMounted(async () => mapData(await getPaginated()))
        const fileDownload = async (file) => await downloadFile(file)

        return {
            files,
            total,
            current_page,
            last_page,
            moveToPage,
            fileDownload
        }
    },
    components: {
        FileList,
        Paginator
    }
}
</script>

<style>

</style>
