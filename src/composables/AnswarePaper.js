import { useState } from "react";

export function AnswarePaper() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const {user} = JSON.parse(localStorage.getItem('user')) || {user: null};

  const [answers, setAnswers] = useState([]);
  /**
   * Saves the answer to the state
   * @param {string} examId - The id of the exam
   * @param {object} question - The question object
   * @param {string} optionId - The id of the selected option
   */
  const saveAnswers = (examId, question, optionId) => {
    setAnswers((prev) => {
      const alreadyAnsweredSet = [...prev];

      const findGivingExam = alreadyAnsweredSet.find(
        (item) => item.examId === examId,
      );
      const findGivingQuestion = findGivingExam
        ? findGivingExam.answers.find(
            (item) => item.questionId === question.questionNumber,
          )
        : null;

      if (question.questionType === "Checkbox") {
        if (!findGivingExam && !findGivingQuestion) {
          alreadyAnsweredSet.push({
            examId: examId,
            user: "can@gmail.com",
            answers: [
              {
                questionId: question.questionNumber,
                selectedOptions: [optionId], // checkbox → multiple
              },
            ],
          });
        } else if (findGivingExam && !findGivingQuestion) {
          findGivingExam.answers.push({
            questionId: question.questionNumber,
            selectedOptions: [optionId],
          });
        } else if (findGivingExam && findGivingQuestion) {
          if (findGivingQuestion.selectedOptions.includes(optionId)) {
            findGivingQuestion.selectedOptions =
              findGivingQuestion.selectedOptions.filter(
                (item) => item !== optionId,
              );
          } else {
            findGivingQuestion.selectedOptions.push(optionId);
          }
        }
        return alreadyAnsweredSet;
      } else if (question.questionType === "Radio") {
        if (!findGivingExam && !findGivingQuestion) {
          alreadyAnsweredSet.push({
            examId: examId,
            user: "can@gmail.com",
            answers: [
              {
                questionId: question.questionNumber,
                selectedOptions: optionId, // radio → single
              },
            ],
          });
        } else if (findGivingExam && !findGivingQuestion) {
          findGivingExam.answers.push({
            questionId: question.questionNumber,
            selectedOptions: optionId,
          });
        } else if (findGivingExam && findGivingQuestion) {
          findGivingQuestion.selectedOptions = optionId;
        }
        return alreadyAnsweredSet;
      }
    });
  };
  const skipQuestion = (exam, currentQuestion) => {
    
    if (currentQuestion.questionType === "Radio") {
      setAnswers((prev) => {
        const alreadyAnsweredSet = [...prev];
        const findGivingExam = alreadyAnsweredSet.find(
          (item) => item.examId === exam,
        );
        const findGivingQuestion = findGivingExam
          ? findGivingExam.answers.find(
              (item) => item.questionId === currentQuestion.questionNumber,
            )
          : null;
       
        // if first question want to skip and there is no exam and question in the state, then push new one with null answer
        if (answers.length === 0) {
          alreadyAnsweredSet.push({
            examId: exam,
            user: "can@gmail.com",
            answers: [
              {
                questionId: currentQuestion.questionNumber,
                selectedOptions: null, // radio → single
              },
            ],
          });
        } else if (findGivingExam && findGivingQuestion) {
          findGivingQuestion.selectedOptions = null;
        }else if (findGivingExam && findGivingQuestion === undefined) {
          findGivingExam.answers.push({
            questionId: currentQuestion.questionNumber,
            selectedOptions: null,
          });
        }
        return alreadyAnsweredSet;
      });
    } else if (currentQuestion.questionType === "Checkbox") {
      // Handle checkbox logic for skipping
      setAnswers((prev) => {
        const alreadyAnsweredSet = [...prev];
        const findGivingExam = alreadyAnsweredSet.find(
          (item) => item.examId === exam,
        );
        const findGivingQuestion = findGivingExam
          ? findGivingExam.answers.find(
              (item) => item.questionId === currentQuestion.questionNumber,
            )
          : null;
       
        // if first question want to skip and there is no exam and question in the state, then push new one with null answer
        if (answers.length === 0) {
          alreadyAnsweredSet.push({
            examId: exam,
            user: "can@gmail.com",
            answers: [
              {
                questionId: currentQuestion.questionNumber,
                selectedOptions: [], // checkbox → multiple
              },
            ],
          });
        } else if (findGivingExam && findGivingQuestion === undefined) {
          findGivingExam.answers.push({
            questionId: currentQuestion.questionNumber,
            selectedOptions: [],
          });
        }
        else if (findGivingExam && findGivingQuestion) {
          findGivingQuestion.selectedOptions = [];
        }
        return alreadyAnsweredSet;
      });

    }

    setQuestionNumber((prev) => prev + 1);
  };

  return {
    questionNumber,
    setQuestionNumber,
    saveAnswers,
    answers,

    skipQuestion,
  };
}
