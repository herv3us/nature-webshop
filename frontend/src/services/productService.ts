const fetchDataByUrl = async (url: string) => { 
    try {
        const res = await fetch(url)
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}

export const getAllProducts = async () => { 
    const fetchUrl = '/api/products'
    return fetchDataByUrl(fetchUrl)
}
