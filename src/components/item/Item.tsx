import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { TodoItem } from '../app/App.interfaces'

interface OwnProps {
  item: TodoItem
  toggleClosedItem(id: string): void
  removeItem(id: string): void
}

const Item: FC<OwnProps> = ({ item, toggleClosedItem, removeItem }) => {
  const { label, id, isClosed } = item
  return (
    <Card bg={isClosed ? 'secondary' : 'light'} className="mt-3">
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <div>
          <Button variant="primary" onClick={() => toggleClosedItem(id)}>
            {isClosed ? 'reopen' : 'close'}
          </Button>{' '}
          <Button variant="danger" onClick={() => removeItem(id)}>
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item
