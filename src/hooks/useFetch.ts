
const useFetch = async (url: string) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export default useFetch