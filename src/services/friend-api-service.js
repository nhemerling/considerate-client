import config from '../config';
import TokenService from './token-service';

const FriendApiService = {
  postFriend(friend_name, occasion, occasion_date) {
    return fetch(`${config.API_ENDPOINT}/friends`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        friend_name,
        occasion,
        occasion_date,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default FriendApiService;
