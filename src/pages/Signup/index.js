import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import logo from '~/pages/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome e obrigatorio.'),
  email: Yup.string()
    .email('Insira um e-mail valido.')
    .required(),
  password: Yup.string()
    .min(6, 'A senah precisa no minimo 6 caracteres.')
    .required('A senha e obrigatoria.'),
});
export default function Signup() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar Conta</button>

        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
