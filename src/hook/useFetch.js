import { useState, useEffect } from "react";
import axios from "axios"

export const useFetch = (path, params = {}, deps = []) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get(path, { params })
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [...deps])
    return { data, error, loading }
}
