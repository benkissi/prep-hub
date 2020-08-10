const BASE_URL =`https://542c97b252e1.ngrok.io`

const endpoints = {
    SIGN_UP: `${BASE_URL}/signup`,
    SIGN_IN: `${BASE_URL}/signin`,
    GET_QUIZES: `${BASE_URL}/quiz`,
    SCORE: `${BASE_URL}/scores`,
    SET_QUESTIONS: `${BASE_URL}/quiz`,
    FETCH_QUESTIONS: (amount, category, difficulty, type) => `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}${type !== 'any'? '&type='+type: '' }`
}

export default endpoints