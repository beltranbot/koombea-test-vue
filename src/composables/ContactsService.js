import QueryBuilderService from './QueryBuilderService'
import store from '../store'

const ContactService = () => {

    const getPaginated = async (page = 0, per_page = 10) => {
        const user = store.getters.user
        const query = QueryBuilderService.queryString({page, per_page})
        const response = await fetch(store.getters.urls.contacts + query, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token_type + " " + user.access_token
            }
        })
        return await response.json()
    }

    const getById = async (id) => {
        const user = store.getters.user
        const response = await fetch(store.getters.urls.contacts + "/" + id, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.token_type + " " + user.access_token
            }
        })
        return await response.json()
    }

    return {
        getPaginated,
        getById
    }
}

export default ContactService
