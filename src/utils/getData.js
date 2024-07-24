import { constants } from "./constants"

export async function getData(search) {
    return fetch(constants.NEWS.GET_API_URL(search)).then(resp => resp.json())
}

