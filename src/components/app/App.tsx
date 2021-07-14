import React, { useState } from 'react'
import { TodoItem } from './App.interfaces'
import uniqid from 'uniqid'
import { Container, Title } from './App.styles'
import AddForm from '../addForm/AddForm'

const App = () => {
  const [list, setList] = useState<TodoItem[]>([])

  const removeItem = (idToRemove: string) => {
    setList(list.filter(({ id }) => id === idToRemove))
  }

  const addItem = (label: string) => {
    const id = uniqid()
    const newItem: TodoItem = {
      id: uniqid(),
      label,
      isFinished: false,
    }
    setList([newItem, ...list])
  }

  const finishItem = (idToFinish: string) => {
    const item = list.find(({ id }) => id === idToFinish)
    if (item) {
      item.isFinished = true
    }
  }

  return (
    <Container>
      <Title>React-todo</Title>
      <AddForm addItem={addItem} />
      {list.map((item) => (
        <div>
          {item.label} - {item.id}
        </div>
      ))}
    </Container>
  )
}

export default App
