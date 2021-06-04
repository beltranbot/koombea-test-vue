import QueryBuilderService from './QueryBuilderService'
import store from '../store'
import { ref } from '@vue/reactivity'

const ContactService = () => {
    const contacts = ref(null)
    const total = ref(0)
    const current_page = ref(0)
    const last_page = ref(0)
    const getPaginated = async (page = 0, per_page = 10) => {
        const user = store.getters.user
        const query = QueryBuilderService.queryString({page, per_page})
        const response = await fetch(store.getters.urls.contacts + query, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token_type + " " + user.access_token
            }
        })
        const json = await response.json()
        contacts.value = json.data
        total.value = +json.total
        current_page.value = +json.current_page
        last_page.value = +json.last_page
    }
    return { contacts, total, current_page, last_page, getPaginated }
}

export default ContactService