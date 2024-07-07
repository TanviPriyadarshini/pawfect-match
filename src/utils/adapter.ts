export const get = async (url: string) => {
    let response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        },
    })

    let data = response.json();
    return data
}