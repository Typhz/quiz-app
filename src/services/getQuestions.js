import api from "./api";
async function Questions(difficulty) {
  const questions = {
    data: [],
  };
  let value = 0;
  while (value < 10) {
    await api
      .get("/questions", {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          difficulty: difficulty,
          limit: 1,
        },
      })
      .then(function (response) {
        let obj = response.data[0].answers;
        let withoutNull = Object.keys(obj)
          .filter((k) => obj[k] != null)
          .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});

        if (Object.keys(withoutNull).length >= 4 & response.data[0].correct_answer != null) {
          questions.data.push({
            question: response.data[0].question,
            answers: response.data[0].answers,
            correct_answer: response.data[0].correct_answer
          });

          localStorage.setItem("quiz", JSON.stringify(questions));
          value++;
        }
      })
      .catch(function (error) {
        return error;
      })
      .then(function () {});
  }
}

export default Questions;
