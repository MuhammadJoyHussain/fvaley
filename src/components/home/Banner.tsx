import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <ListGroup.Item>Crast justo odio</ListGroup.Item>
            <ListGroup.Item>Crast justo odio</ListGroup.Item>
            <ListGroup.Item>depibus ac fecolsis</ListGroup.Item>
            <ListGroup.Item>depibus ac fecolsis</ListGroup.Item>
            <ListGroup.Item>lorem pna </ListGroup.Item>
            <ListGroup.Item>lorem pna </ListGroup.Item>
            <ListGroup.Item>asdfdfg</ListGroup.Item>
            <ListGroup.Item>asdfdfg</ListGroup.Item>
            <ListGroup.Item>asdfdfasfdg</ListGroup.Item>
          </Col>
          <Col lg={9} className="mt-3">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
