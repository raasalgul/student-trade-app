export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
console.log(user)
console.log(user.token)
  if (user && user.token) {
    console.log(JSON.stringify(user));
    let res={};
    res.Authorization='Bearer ' + user.token;
    res.userId=user.id;
    return {...res}; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
