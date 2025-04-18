import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const NotAvailableComponent = ({componentName, icon: Icon}) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={12}>
          <div className="text-center p-5 bg-light rounded">
          {Icon && <Icon size={150} />}
            <h4 className="text-muted mt-3">
              No {componentName} has been created.
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotAvailableComponent
