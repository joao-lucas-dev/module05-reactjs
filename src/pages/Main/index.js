import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Contianer, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Contianer>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButton>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Contianer>
  );
}
