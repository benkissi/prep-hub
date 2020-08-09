const endpoints = {
    GET_QUIZES: `https://ddd19baea9d9.ngrok.io/quiz`,
    SET_QUESTIONS: `https://ddd19baea9d9.ngrok.io/quiz`,
    FETCH_QUESTIONS: (amount, category, difficulty, type) => `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}${type !== 'any'? '&type='+type: '' }`
}

export default endpoints