import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { signInRequest } from '~/store/modules/auth/actions';
// import { Container } from './styles';
import logo from '~/pages/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido.')
    .required(),
  password: Yup.string().required('A senha e obrigatoria.'),
});

export default function Signin() {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
