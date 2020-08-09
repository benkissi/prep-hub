import endpoints from "./endpoints";

export async function getQuizes(number) {
  const url = endpoints.GET_QUIZES;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function getQuestions(amount, category, difficulty, type) {
  const url = endpoints.FETCH_QUESTIONS(amount, category, difficulty, type)

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function setQuestions({
  type,
  difficulty,
  category,
  amount,
  duration,
  title,
}) {
  if (!title || !amount || !difficulty || !category || !type || !duration) {
    return { error: "Missing fields" };
  }

  try {
    const url = endpoints.SET_QUESTIONS;
    const data = {
      type,
      difficulty,
      category,
      amount,
      duration,
      title
    };

    console.log('data', data)
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data),
    });

    // const response = await res.json();

    // return response;
  } catch (error) {
    console.log(error);
  }
}
