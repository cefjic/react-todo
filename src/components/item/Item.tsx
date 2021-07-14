import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { TodoItem } from '../app/App.interfaces'
import { MdCheck, MdClose, MdRemove } from 'react-icons/md'
import { Body, Title } from './Item.styles'

interface OwnProps {
  item: TodoItem
  toggleClosedItem(id: string): void
  removeItem(id: string): void
}

const Item: FC<OwnProps> = ({ item, toggleClosedItem, removeItem }) => {
  const { label, id, isClosed } = item

  const variant = isClosed ? 'secondary' : 'light'
  const text = isClosed ? 'white' : 'dark'
  const button = isClosed ? 'outline-light' : 'outline-secondary'

  return (
    <Card bg={variant} text={text} className="mt-3">
      <Body>
        <Title>{label}</Title>
        <div>
          <Button variant={button} onClick={() => toggleClosedItem(id)}>
            {isClosed ? <MdClose /> : <MdCheck />}
          </Button>{' '}
          <Button variant="danger" onClick={() => removeItem(id)}>
            <MdRemove />
          </Button>
        </div>
      </Body>
    </Card>
  )
}

export default Item
