import React, { useState } from 'react'

import CustomerInformation from './CustomerInformation'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


function DeliveryInformation () {
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <>
        <Form>
            <Form.Group controlId="DeliverToCustomerAddress" onChange={() => setIsDisabled(!isDisabled)}>
                <Form.Check type="checkbox" label="上記住所と同じ住所に送付する"/>
            </Form.Group>
        </Form>
        <CustomerInformation isDisabled={isDisabled} />
        </>
    )
}

export default DeliveryInformation
