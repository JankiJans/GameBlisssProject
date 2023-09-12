import React from 'react';
import { Form } from 'react-bootstrap';

const FormGroups = ({
  email,
  setEmail,
  name,
  setName,
  address,
  setAddress,
  payment,
  setPayment,
  delivery,
  setDelivery,
  note,
  setNote,
  getTotalPrice,
  getGameNames,
  handleSubmit,
  amount,
  setAmount  
}) => {
  return (
    <Form className="col-12 mx-auto my-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAdress">
        <Form.Label>address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Payment Method</Form.Label>
        <Form.Select
          aria-label="Payment method select"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">Select a payment method</option>
          <option value="UPS">Card</option>
          <option value="DHL">Cash</option>
          <option value="FedEx">Crypto</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Delivery Method</Form.Label>
        <Form.Select
          aria-label="delivery method select"
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
        >
          <option value="">Select a delivery method</option>
          <option value="UPS">UPS</option>
          <option value="DHL">DHL</option>
          <option value="FedEx">FedEx</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="type something for us :)"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAmount">
        <Form.Label>Total Amount</Form.Label>
        <Form.Control
          disabled
          placeholder="Total amount"
          value={`${getTotalPrice()}$`}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGameNames">
        <Form.Label>Games in Cart</Form.Label>
        <Form.Control disabled placeholder="Games" value={getGameNames()} />
      </Form.Group>
    </Form>

    
  );
};

export default FormGroups;
