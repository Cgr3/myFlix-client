import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Col, Row } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, movies } = this.props;

    return (
      <Container>
        <Row>
          <Col>Director: </Col>
          <Col>{movies.Director.Name}</Col>
        </Row>
        <Row>
          <Col>Description: </Col>
          <Col>{movies.Director.Bio}</Col>
        </Row>
        <Row>
          <Col>Birth: </Col>
          <Col>{movies.Director.Birth}</Col>
        </Row>
        <Button onClick={() => { onBackClick(null); }}>Back</Button>
      </Container>
    )
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string,
  }).isRequired
};