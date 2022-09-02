import React from 'react';
import { Button, Card, Card, Col, Row, Container } from 'react-bootstrap/';
import PropTypes from 'prop-types';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container className='movieContainer'>
        <Row>
          <Col>
            <div className="movie-poster">
              <img src={movie.Imagepath} crossOrigin='true' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-title">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-description">
              <span className="label">Description: </span>
              <span className="value">{movie.Description}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-genre">
              <span className="label">Genre: </span>
              <span className="value">{movie.Genre.Name}</span>
              <Link to={`/genres/${movie.Genre.Name}`}>
                <Button variant='link'>Genre</Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-director">
              <span className="label">Director: </span>
              <span className="value">{movie.Director.Name}</span>
              <Link to={`/directors/${movie.Director.Name}`}>
                <Button variant='link'>Director</Button>
              </Link>
            </div>
            <button onClick={() => { onBackClick(null); }}>Back</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Imagepath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};