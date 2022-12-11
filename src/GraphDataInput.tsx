import { useState } from 'react';
import { ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DateRangePicker } from 'react-date-range';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./numaa.css"
import he from 'date-fns/locale/he';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { subDays, subMonths, subWeeks } from 'date-fns';

export const GraphDataInput = ({startDate, setStartDate, endDate, setEndDate} : {startDate: any, setStartDate: any, endDate: any, setEndDate: any}) => {

    const goBackDays = (daysBefore: number) => {
        setStartDate(new Date());
        setEndDate(subDays(new Date(), daysBefore));
    }

    const goBackMonths = (monthsBefore: number) => {
        setStartDate(new Date());
        setEndDate(subMonths(new Date(), monthsBefore));
    }

    const goBackWeeks = (weeksBefore: number) => {
        setStartDate(new Date());
        setEndDate(subWeeks(new Date(), weeksBefore));
    }

    return (
        <Container className='border  p-3 bg-light d-flex justify-content-center'>
            <Form>
                <Row >
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bolder text-secondary' column xs={2} >חנות:</Form.Label>
                        <Col xs={10}>
                            <Form.Select aria-label="Default select example">
                                <option>כל החנויות</option>
                                <option value="1">החנות שלי</option>
                                <option value="2">החנות שלו</option>
                                <option value="3">החנות שלנו</option>
                            </Form.Select>
                        </Col>                    
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bolder text-secondary' column xs={2} >הצג:</Form.Label>
                        <Col xs={10}>
                            <Form.Select aria-label="Default select example">
                                <option>נטו כולל מע״מ</option>
                                <option value="1">נטו כולל מע״מ</option>
                                <option value="2">נטו לפני מע״מ</option>
                                <option value="3">סכום רווח</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>            
                </Row>
                <Row className='d-none d-sm-block mb-3'>
                    <Col xs={12} className='d-flex justify-content-end' style={{direction: 'ltr'}}>                                
                        <DatePicker
                            wrapperClassName={"numaa me-3"}
                            className={"numaaa"}
                            dateFormat={'dd/MM/yyyy'}
                            locale={he}
                            selected={endDate}
                            onChange={(date) => setEndDate(date as any)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                        <div className='text-muted'>עד</div>
                        <DatePicker
                            wrapperClassName={"numaa ms-3"}
                            className={"numaaa"}
                            locale={he}
                            dateFormat={'dd/MM/yyyy'}
                            selected={startDate}
                            onChange={(date) => setStartDate(date as any)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <div className='fw-bolder text-secondary fw-bold ms-3'>:טווח תאריכים</div>
                    </Col>
                </Row>                
                <div className='d-block d-sm-none' >
                    <Row>
                        <Col>
                            <div className='text-secondary fw-bold ms-3'>טווח תאריכים:</div>
                        </Col>                
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-end' style={{direction: 'ltr'}}>                                
                            <DatePicker
                                wrapperClassName={"numaa"}
                                className={"numaaa"}
                                dateFormat={'dd/MM/yyyy'}
                                locale={he}
                                selected={endDate}
                                onChange={(date) => setEndDate(date as any)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='text-muted'>עד</div>
                        </Col>
                    </Row>                
                    <Row className='mb-3 d-block d-sm-none' style={{direction: 'ltr'}}>
                        <Col className='d-flex justify-content-end'>
                            <DatePicker
                                wrapperClassName={"numaa"}
                                className={"numaaa"}
                                locale={he}
                                dateFormat={'dd/MM/yyyy'}
                                selected={startDate}
                                onChange={(date) => setStartDate(date as any)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />                        
                        </Col>
                    </Row>
                </div>
                
                <Row>
                    <Col>
                        <ButtonGroup style={{direction:"ltr"}}>
                            <Button onClick={() => goBackMonths(3)} variant="outline-primary">שלושה חודשים</Button>
                            <Button onClick={() => goBackMonths(1)} variant="outline-primary">חודש</Button>
                            <Button onClick={() => goBackWeeks(1)} variant="outline-primary">שבוע</Button>                                
                            <Button onClick={() => goBackDays(1)} variant="outline-primary">יום</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
          </Form>
        </Container>
   
    )
    

}
