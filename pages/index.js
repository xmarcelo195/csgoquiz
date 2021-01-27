import React from 'react';
import { useRouter } from 'next/router';
// import styled from 'styled-components';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import FormContent from '../src/components/FormContent';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Counter Strike Global Offensive</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu Nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
              <p>
                Olá
                {' '}
                {name}
              </p>
              <p>
                Teste os seus conhecimentos sobre CS:GO e vamos ver o quanto você sabe sobre o jogo
              </p>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/xmarcelo195/csgoquiz" />
      </QuizContainer>
    </QuizBackground>
  );
}
