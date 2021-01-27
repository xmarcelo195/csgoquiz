import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    margin-top: 10px;
    height: 30px;
  }

  button:disabled,
  button[disabled]{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export default function FormContent() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <FormContainer
        style={{ display: 'flex' }}
        // eslint-disable-next-line react/jsx-no-bind
        onSubmit={function (infosDoEvento) {
          infosDoEvento.preventDefault();
          router.push(`/quiz?name=${name}`);
        }}
      >
        <input
          onChange={function (infoDoEvento) {
            setName(infoDoEvento.target.value);
          }}
          placeholder="Digite seu nome"
        />
        <button type="submit" disabled={name.length === 0}>
          Jogar
        </button>
        <p>
          Olá
          {' '}
          {name}
        </p>
        <p>Teste os seus conhecimentos sobre CS:GO e vamos ver o quanto você sabe sobre o jogo</p>
      </FormContainer>
    </>
  );
}
