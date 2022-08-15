import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './profile-view.scss';

export function ProfileView({ movies, onUpdatedUserInfo }) {
  const [user, setUser] = useState({

  })

  const favoriteMovieList = movies.filter((movies) => {

  });

  const getUser = () => {

  }

  const handleSubmit = (e) => {

  }

  const removeFav = (id) => {

  }

  const handleUpdate = (e) => {

  };

  useEffect(() => {

  }, [])

  return (
    <div>
      <p>User: {user.Username}</p>
      <p>Email: {user.Email}</p>
      <div>
        <h2>Favorited Movies</h2>
        {favoriteMovieList.map((movies) => {
          return (
            <div key={movies.id}>
              <img src={movies.imagepath} />
              <Link to={`/movies/${movies._id}`}>
                <h4>{movies.Title}</h4>
              </Link>
              <button variant='secondary' onClick={() => removeFav(movie._id)}>Remove from list</button>
            </div>
          )
        })
        }
      </div>
      <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
        <h2>Update Info</h2>
        <label>Username: </label>
        <input type='text' name='Username' defaultValue={user.Username} onChange={e.handleUpdate(e)} />

        <label>Password: </label>
        <input type='password' name='password' defaultValue={user.Password} onChange={e.handleUpdate(e)} />

        <label>Email: </label>
        <input type='email' name='email' defaultValue={user.Email} onChane={e.handleUpdate(e)} />

        <button variant='primary' type='submit'>Update Info</button>
      </form>
    </div>
  )
}