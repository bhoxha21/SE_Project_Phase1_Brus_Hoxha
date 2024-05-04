const getanswer = require("./getanswer");
const questions = require("./db");

test("get the answer for a given question at index (questions, question_index, answer_index)", () => {
  const expectedAnswer = questions[2].answers[0].text;
  expect(getanswer(questions, 2, 0)).toBe(expectedAnswer);
});
