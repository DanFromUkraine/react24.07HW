
export const constants = {
    NEWS: {
        API_KEY: "c089e3c37c1c4afda3cbc168423e9907",
        GET_API_URL: (q) => {
            return `https://newsapi.org/v2/everything?${q? "q=" + q : ""}&sortBy=popularity&apiKey=${constants.NEWS.API_KEY}&pageSize=20`
        }
    }
}   