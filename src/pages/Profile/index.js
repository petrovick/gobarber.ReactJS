import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereco de e-mail" />

        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmacao de senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={() => handleSignOut()}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
