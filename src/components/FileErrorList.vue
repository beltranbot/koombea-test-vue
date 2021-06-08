<template>
    <table>
        <thead>
            <th>Line</th>
            <th>Field</th>
            <th>Description</th>
            <th>Error message</th>
        </thead>
        <tbody>
            <tr v-for="file_error in file_errors" :key="file_error.id">
                <td>{{ file_error.line }}</td>
                <td>{{ file_error.field }}</td>
                <td>{{ file_error.description }}</td>
                <td>{{ file_error.error_message }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "FileErrorList",
    props: ["file_errors"],
    setup(props) {
        console.log("testerino", props.file_errors)
    }
}
</script>

<style>

</style>
