import React, { useState } from 'react'
import { TodoItem } from './App.interfaces'
import uniqid from 'uniqid'
import { Container, Title } from './App.styles'
import AddForm from '../addForm/AddForm'
import Item from '../item/Item'

const App = () => {
  const [list, setList] = useState<TodoItem[]>([])

  const removeItem = (idToRemove: string) => {
    setList(list.filter(({ id }) => id !== idToRemove))
  }

  const addItem = (label: string) => {
    const newItem: TodoItem = {
      id: uniqid(),
      label,
      isClosed: false,
    }
    setList([newItem, ...list])
  }

  const toggleClosedItem = (id: string) => {
    setList(
      list.map((item) => {
        return item.id === id ? { ...item, isClosed: !item.isClosed } : item
      })
    )
  }

  return (
    <Container>
      <Title>React-todo</Title>
      <AddForm addItem={addItem} />
      {list.map((item) => (
        <Item
          item={item}
          removeItem={removeItem}
          toggleClosedItem={toggleClosedItem}
          key={item.id}
        />
      ))}
    </Container>
  )
}

export default App
