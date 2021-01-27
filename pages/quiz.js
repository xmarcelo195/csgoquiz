import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
// import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

const Perguntas = styled.div`
    color: white;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.mainBg};
`;

// const { questions } = db;

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Perguntas>
          <h1>Perguntas</h1>
          {db.questions.map((questions) => (
            <>
              <img style={{ width: `${200}px`, height: `${100}px`, objectFit: 'cover' }} src={questions.image} alt="Imagem da Questão" />
              <div>{questions.title}</div>
              <div>{questions.description}</div>
            </>
          ))}
        </Perguntas>
      </QuizContainer>
    </QuizBackground>
  );
}
