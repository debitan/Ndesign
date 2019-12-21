import React, { useState } from 'react'

import CustomerInformation from './CustomerInformationForm'

import Form from 'react-bootstrap/Form'

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
