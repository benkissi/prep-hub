import endpoints from "./endpoints";

export async function getQuizes(number) {
  const url = endpoints.GET_QUIZES;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function getQuestions(amount, category, difficulty, type) {
  const url = endpoints.FETCH_QUESTIONS(amount, category, difficulty, type);

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function createQuiz({
  type,
  difficulty,
  category,
  amount,
  duration,
  title,
  teacherCode,
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
      title,
      teacherCode,
    };

    console.log("data", data);
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

export const signUp = async (
  name,
  password,
  teacherCode,
  studentCode,
  schoolCode,
  role
) => {
  try {
    const url = endpoints.SIGN_UP;

    const data = {
      name,
      password,
      teacherCode,
      studentCode,
      schoolCode,
      role,
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
};

export const signIn = async (code, password, type) => {
  try {
    const url = endpoints.SIGN_IN;
    const data = {
      code,
      password,
      role: type,
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
};

export const getTeacherQuizes = async (teacherCode) => {
  try {
    
    const query = {
      teacherCode,
    };

    const url = endpoints.GET_QUIZES + '?' + new URLSearchParams(query)
    console.log('urllll',url)
    
    const res = await fetch(url)
    const data = res.json()
    return data
  } catch (error) {}
};

export const getCategoryQuizes = async (category) => {
  try {
    
    const query = {
      category
    };

    const url = endpoints.GET_QUIZES + '?' + new URLSearchParams(query)
    console.log('urllll',url)
    
    const res = await fetch(url)
    const data = res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const setScore = async (studentCode, testId, subject, score, total, duration) => {
  try {
    const url = endpoints.SET_SCORE
    const data = {
      studentCode,
      testId,
      subject,
      score,
      total,
      duration
    }

    console.log('scores data', data)
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    console.log('scores response data', response)
    return response;
  } catch (error) {
    console.log(error)
  }
}
