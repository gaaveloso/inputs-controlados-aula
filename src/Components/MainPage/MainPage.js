import React, {useState} from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const onChangeNome = (event) => {
    // console.log(event.target.value)
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    // console.log(event.target.value)
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) => {
    // console.log(event.target.value)
    setEmail(event.target.value)
  }

  const enviarDados = (event) => {
    const dadosUsuario = {
      nome,
      idade,
      email,
    }
    console.log(dadosUsuario)
    setNome("")
    setIdade("")
    setEmail("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input 
            type={'text'}
            placeholder={'Nome'}
            value={nome}
            onChange={onChangeNome}
          />
        </label>
        <label>
          Idade:
          <Input
            type={'number'}
            placeholder={'Idade'}
            value={idade}
            onChange={onChangeIdade}
          />
        </label>
        <label>
          E-mail:
          <Input 
            type={'email'}
            placeholder={'usuario@usuario.com'}
            value={email}
            onChange={onChangeEmail}
          />
        </label>
      <button onClick={enviarDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage