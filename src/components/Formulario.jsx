import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import useCategory from '../hooks/useCategory'

const Formulario = () => {
  const { categories }= useCategory()
  console.log(categories)
  return (
    <Form className='mt-4'>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor='name'>Nombre Bebida</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Vodka, gin, cerveza'
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor='category'>Categoría</Form.Label>
            <Form.Select id='category'>
            {
              categories?.map((cat, i) => {
                return (
                  <option 
                  key={i}
                  >{cat.strCategory}</option>
                )
              })
            }
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Button className='mt-5'>Aceptar</Button>
    </Form>
  )
}

export default Formulario
