'use strict'

const signIn = (data, url) => {
  return $.ajax({
    url: url + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signUp = (data, url) => {
  return $.ajax({
    url: url + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signOut = (url, token) => {
  return $.ajax({
    url: url + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}

const changePassword = (data, url, token) => {
  return $.ajax({
    url: url + '/change-password',
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}

const getGame = (id, url, token) => {
  return $.ajax({
    url: url + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}

const getGames = (url, token) => {
  return $.ajax({
    url: url + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}

const create = (url, token) => {
  return $.ajax({
    url: url + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}

const destroy = (id, url, token) => {
  return $.ajax({
    url: url + '/games/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}

const update = (game, url, id, token) => {
  return $.ajax({
    url: url + '/games/' + id,
    method: 'PATCH',
    data: JSON.stringify(
      { game:
        {
          player_one_hand: game.player_one_hand,
          current_cards: game.current_cards
        }
      }
    ),
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword,
  create,
  update,
  getGames,
  getGame,
  destroy
}
