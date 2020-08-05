import endpoints from './endpoints'


export async function getQuestions (number) {
    const url = endpoints.MATHS(number)
    const res = await fetch(url)
    const data = await res.json()

    return data
}