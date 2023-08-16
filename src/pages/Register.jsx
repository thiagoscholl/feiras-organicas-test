import React from "react";
import Input from "../components/Input";

export default function Register() {
  return (
    <div className='w-[40%] flex justify-center items-center h-screen flex-col gap-[1rem]'>
      <Input
        label='Nome do responsável pelo local'
        type='text'
        placeholder='Nome completo'
      />
      <Input label='E-mail' type='email' placeholder='Digite seu e-mail' />
      <Input label='Telefone' type='tel' placeholder='DD X XXXX-XXXX' />
      <Input label='Senha' type='password' placeholder='Digite sua senha' />
      <button type='button' className=''>
        Cadastro
      </button>
    </div>
  );
}

