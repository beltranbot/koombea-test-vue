<template>
    <table>
        <thead>
            <th>ID</th>
            <th>Location</th>
            <th>Filename</th>
            <th>Upload date</th>
            <th>actions</th>
        </thead>
        <tbody>
            <tr v-for="file in files" :key="file.id">
                <td>{{ file.id }}</td>
                <td>{{ file.location }}</td>
                <td>{{ file.filename }}</td>
                <td>{{ file.created_at }}</td>
                <td>
                    <a href="#" @click.prevent="fileDownload(file)">download</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "FileList",
    props: ["files"],
    emits: ["filedownload"],
    setup(_, { emit }) {
        const fileDownload = (file) => emit("filedownload", file)

        return {
            fileDownload
        }
    }
}
</script>

<style>

</style>
