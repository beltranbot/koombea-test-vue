export default {
    queryString: (params) => {
        let output = []
        for (const key of Object.keys(params)) {
            output.push(key + "=" + params[key])
        }
        return "?" + output.join("&")
    }
}
