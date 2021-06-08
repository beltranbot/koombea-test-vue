<template>
    <ContactDetails v-if="contact" :contact="contact"/>
</template>

<script>
import ContactsService from "../composables/ContactsService"
import ContactDetails from "../components/ContactDetails.vue"
import { onMounted, ref } from '@vue/runtime-core'

export default {
    name: "ContactDetailsView",
    props: ["id"],
    setup(props) {
        const { getById } = ContactsService()
        const contact = ref(null)
        onMounted(async () => contact.value = await getById(props.id))

        return { contact }
    },
    components: { ContactDetails }
}
</script>

<style>

</style>
