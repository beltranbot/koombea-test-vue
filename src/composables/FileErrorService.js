import QueryBuilderService from './QueryBuilderService'
import store from '../store'

const FileErrorService = () => {

    const getPaginated = async (id, page = 0, per_page = 10) => {
        const user = store.getters.user
        const query = QueryBuilderService.queryString({page, per_page})
        const response = await fetch(store.getters.urls.files + "/" + id + "/errors" + query, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token_type + " " + user.access_token
            }
        })
        return await response.json()
    }

    return {
        getPaginated
    }
}

export default FileErrorService
