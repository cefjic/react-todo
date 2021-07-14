import { useFormik } from 'formik'
import { FC } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
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
            <Form.Control
              type="text"
              name="label"
              value={values.label}
              onChange={handleChange}
              isValid={touched.label && !errors.label}
            />
            <Form.Control.Feedback
              type="invalid"
              className={touched.label && errors.label ? 'd-block' : ''}
            >
              {errors.label}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddForm
