import React, { useState } from 'react'

import Swal from 'sweetalert2'

import Grid from '../Grid'

import * as Components from './styles'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setIsExpense] = useState(false)

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      Swal.fire({
        title: 'Erro',
        text: 'Informe a descrição e o valor!',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: 'teal',
      })
      return
    } else if (amount < 0) {
      Swal.fire({
        title: 'Erro',
        text: 'Informe um valor positivo!',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: 'teal'
      })
      return
    }

    const transaction = {
      id: generateID(),
      desc,
      amount,
      expense: isExpense
    }

    handleAdd(transaction)

    setDesc('')
    setAmount('')

    Swal.fire({
      title: 'Sucesso',
      text: 'Valor registrado com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: 'teal',
    })
  }


  return (
    <>
      <Components.Container>
        <Components.InputContent>
          <Components.Label>Descrição</Components.Label>
          <Components.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </Components.InputContent>
        <Components.InputContent>
          <Components.Label>Valor</Components.Label>
          <Components.Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
        </Components.InputContent>
        <Components.RadioGroup>
          <Components.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setIsExpense(!isExpense)} />
          <Components.Label htmlFor="rIncome">Entrada</Components.Label>

          <Components.Input type="radio" id="rExpenses" name="group1" onChange={() => setIsExpense(!isExpense)} />
          <Components.Label htmlFor="rExpenses">Saída</Components.Label>

        </Components.RadioGroup>
        <Components.Button onClick={handleSave}>ADICIONAR</Components.Button>
      </Components.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default Form