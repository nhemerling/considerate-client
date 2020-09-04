import config from '../config';
import TokenService from './token-service';

const FriendApiService = {
  getFriends() {
    return fetch(`${config.API_ENDPOINT}/friends`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getFriendLikes(friendId) {
    return fetch(`${config.API_ENDPOINT}/friends/${friendId}/likes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postFriend(newFriend) {
    return fetch(`${config.API_ENDPOINT}/friends`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        friend_name: newFriend.friend_name,
        occasion: newFriend.occasion,
        occasion_date: newFriend.occasion_date,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postLikes(likes, friendId) {
    return fetch(`${config.API_ENDPOINT}/friends/${friendId}/likes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(likes),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteFriend(friendId) {
    return fetch(`${config.API_ENDPOINT}/friends/${friendId}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res
    );
  },
};

export default FriendApiService;
