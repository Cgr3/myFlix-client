import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Col, Row } from 'react-bootstrap';

import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { genre, onBackClick, movies } = this.props;

    return (
      <Container>
        <Row>
          <Col>Genre: </Col>
          <Col>{movies.Genre.Name}</Col>
        </Row>
        <Row>
          <Col>Description: </Col>
          <Col>{movies.Genre.Description}</Col>
        </Row>
        <Button onClick={() => { onBackClick(null); }}>Back</Button>
      </Container>
    )
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired
};