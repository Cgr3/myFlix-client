import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Figure, Button, Card } from 'react-bootstrap';
import './profile-view.scss';
import axios from 'axios';

function FavoriteMovies({ favoriteMovieList }) {
  const removeFav = (id) => {
    let token = localStorage.getItem('token');
    let url = `https://my1movieapi.herokuapp.com/users/${localStorage.getItem('user')}/movies/${id}`;
    axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h4>Favorited Movies</h4>
          </Col>
        </Row>
        <Row>
          {favoriteMovieList.map(({ imagepath, Title, _id }) => {
            return (
              <Col xs={12} md={6} lg={3} key={_id} className='fav-movie'>
                <Figure>
                  <Link to={`/movies/${_id}`}>
                    <Figure.Image src={imagepath} alt={Title} />
                    <Figure.Caption>
                      {Title}
                    </Figure.Caption>
                  </Link>
                </Figure>
                <Button variant='secondary' onClick={() => removeFav(_id)}>Remove</Button>
              </Col>
            )
          })
          }
        </Row>
      </Card.Body>
    </Card>
  )
}

export default FavoriteMovies