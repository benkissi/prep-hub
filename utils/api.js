import endpoints from "./endpoints";

export async function getQuestions(number) {
  const url = endpoints.MATHS(number);
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function setQuestions({
  testTitle,
  total,
  level,
  subject,
  questionType,
  duration,
}) {
  if (!testTitle || !total || !level || !subject || !questionType || !duration) {
    return { error: "Missing fields" };
  }

  try {
    const url = endpoints.SET_QUESTIONS;
    const data = {
      title,
      number,
      level,
      subject,
      type,
      duration,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}
