import React, { memo } from 'react'
import { Row, Col } from 'react-bootstrap'

const HederComponent = () => {
    return (
        <Row className='headerRow' >
            <Col className='d-flex flex-row mt-3'  >
                <h1>در خواست نیرو</h1>
                <p className='mr-auto' >تعیین زمان (<span>2</span>از<span>4</span>)</p>
            </Col>
        </Row>
    )
}

export default memo(HederComponent)