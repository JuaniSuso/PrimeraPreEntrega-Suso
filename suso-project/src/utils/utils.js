import { MOCK_DATA } from "../mocks/mocks"

MOCK_DATA

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 3000)
    })
}