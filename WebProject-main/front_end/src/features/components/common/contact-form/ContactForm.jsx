import React from 'react';
import { Form, FormGroup, Input, Button, Row, Col, Container } from 'reactstrap';
import styles from './../common.module.css';

const ContactForm = ({ isBlackBG }) => {
  return (
    <div className={`${styles.contact_us_container} ${isBlackBG ? styles.bg_dark_gradient : styles.bg_gradient}`}>
      <div>
        <h3>
          Nəyi gözləyirsən?{' '}
          <span> biz sizə biznesinizin inkişafında kömək etmək, və suallarınızı cavablandırmaq üçün buradayıq.</span>
        </h3>
      </div>
      <div>
        <Form className={`${styles.form_container}`}>
          <Row className=''>
            <Col xs="6">
              <FormGroup>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  pattern="(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$"
                  placeholder="Ad Soyad"
                  required
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                  placeholder="Email Adres"
                  required
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input
                  type="text"
                  id="email-confirm"
                  name="email-confirm"
                  className="form-control"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                  placeholder="Email Adres Təkrar"
                  required
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control focus"
                  placeholder="Movzu başlığı"
                  required
                />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Mesaj Mətniniz..."
                  required
                  rows={8}
                  maxLength="500"
                />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Button type="submit" block>
                  Elaqe
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
