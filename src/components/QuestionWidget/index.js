/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Button from '../Button';

export default function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  screenStates,
  setCurrentQuestion,
  setScreenState,
}) {
  const questionId = `question__${questionIndex}`;

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <form onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          handleSubmit();
        }}
        >
          {question.alternatives.map((alternatives, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternatives}
              </Widget.Topic>
            );
          })}
          <Button tipe="submit">
            Confirmar
          </Button>

          <p>Você Acertou!</p>
        </form>
      </Widget.Content>
    </Widget>
  );
}

// QuestionWidget.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   questions: PropTypes.array.isRequired,
//   totalQuestions: PropTypes.number.isRequired,
// };
