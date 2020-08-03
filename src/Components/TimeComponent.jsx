import React, { useState, useContext } from 'react'
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import { Pencil, Clock } from 'react-bootstrap-icons'

import FormContext from '../contexts'

const TimeComponent = () => {

    const { handelClock } = useContext(FormContext)

    const [valuechekBox, setvaluechekBox] = useState(null)
    const [errorInput, seterrorInput] = useState(null)

    const arrydata = [3, 6, 8, 24]


    const handelTime = e => {
        if (e.target.checked) {

            setvaluechekBox(e.target.value)

            const sumClock = e.target.value * 20000
            handelClock(sumClock)
        }
    }

    const patreonInput = new RegExp("[0-9]", "g")

    const handelCostomInput = e => {

        if (patreonInput.test(e.target.value)) {

            setvaluechekBox(e.target.value)

            const sumClock = parseInt(e.target.value) * 20000//مبلغ ساعتی که پیش فرض تعریف شده

            handelClock(sumClock)
            seterrorInput('')
        }
        else { e.target.value.length > 0 ? seterrorInput('فقط عدد و به انلگیسی قلبل قبول است') : seterrorInput('') }
    }



    return (
        <Col className='mt-5 bg-white  pb-2 boxItems' md={12} sm={12} xs={12} >
            <Row className='boxItems'>
                <Col className='d-flex flex-wrap mt-3 mb-4' md={12} sm={12} xs={12} >
                    <Clock size={16} className='timeCoustomColor ml-1' />
                    <h3> مدت زمان مورد نیاز</h3>
                    <p className='mr-auto text-secondary' >چه مدت زمانی نیرو لازم دارید؟</p>
                </Col>
                <Col md={12} sm={12} xs={12} className='boxTime mb-5 ' >

                    <Row>
                        {
                            arrydata.map(item => (
                                <Col key={item.toString()} className='text-center fixboxitem' md={3} sm={3} xs={3} >
                                    <Form.Check>
                                        <Form.Check.Input className="d-none" type='radio' name='setsaat'
                                            onClick={handelTime} id={`three_${item}`} value={item} />
                                        <Form.Check.Label className={parseInt(valuechekBox) === item ? 'p-3 m-2 checkBoxAttive flex-nowrap' : 'p-3 m-2 flex-nowrap'} htmlFor={`three_${item}`} >{item} ساعت</Form.Check.Label>
                                    </Form.Check>
                                </Col>
                            ))
                        }
                    </Row>

                </Col>
            </Row>
            <Col className='d-flex flex-row mt-5' md={12} sm={12} xs={12} >
                <Col md={9} sm={9} xs={9} >
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Pencil size={16} className='border-bottom' />
                        </InputGroup.Prepend>
                        <FormControl
                            className='inputTime'
                            onChange={handelCostomInput}
                            maxLength='5'
                            placeholder='اگر مدت دیگری مورد نیاز است وارد کنید'
                        />
                        <span className='errorinputTime' >{errorInput}</span>
                    </InputGroup>
                </Col>
                <Col md={3} sm={3} xs={3} >

                    <p className='text-center timeCoustomColor' >ساعت</p>
                </Col>
            </Col>

        </Col>
    )
}

export default TimeComponent