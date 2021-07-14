import { useFormik } from 'formik'
import { FC } from 'react'
import { Card, Form, Button, InputGroup } from 'react-bootstrap'
import { MdSend } from 'react-icons/md'
import { AddFormSchema } from './AddForm.schema'

interface OwnProps {
  addItem(label: string): void
}

const AddForm: FC<OwnProps> = ({ addItem }) => {
  const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: { label: '' },
    validationSchema: AddFormSchema,
    onSubmit: ({ label }) => {
      addItem(label)
      resetForm()
    },
  })

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3" controlId="labelItem">
            <Form.Label>Todo label :</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                name="label"
                value={values.label}
                onChange={handleChange}
                isValid={touched.label && !errors.label}
              />
              <Button variant="outline-secondary" type="submit">
                <MdSend />
              </Button>
            </InputGroup>
            <Form.Control.Feedback
              type="invalid"
              className={touched.label && errors.label ? 'd-block' : ''}
            >
              {errors.label}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddForm
