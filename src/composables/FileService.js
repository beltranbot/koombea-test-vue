import QueryBuilderService from './QueryBuilderService'
import store from '../store'

const FileService = () => {

    const getPaginated = async (page = 0, per_page = 10) => {
        const user = store.getters.user
        const query = QueryBuilderService.queryString({page, per_page})
        const response = await fetch(store.getters.urls.files + query, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token_type + " " + user.access_token
            }
        })
        return await response.json()
    }

    const getById = async (id) => {
        const user = store.getters.user
        const response = await fetch(store.getters.urls.files + "/" + id, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.token_type + " " + user.access_token
            }
        })
        return await response.json()
    }

    const downloadFile = async (file) => {
        const user = store.getters.user
        const response = await fetch(store.getters.urls.files + "/" + file.id, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.token_type + " " + user.access_token
            }
        })
        const blob = await response.blob()
        const newBlob = new Blob([blob])
        const blobUrl = window.URL.createObjectURL(newBlob)
        const link = document.createElement('a')
        link.href = blobUrl
        link.setAttribute('download', file.filename)
        document.body.appendChild(link)
        link.click()
        link.parentNode.removeChild(link)
        window.URL.revokeObjectURL(blob)
    }

    return {
        getPaginated,
        getById,
        downloadFile
    }
}

export default FileService
