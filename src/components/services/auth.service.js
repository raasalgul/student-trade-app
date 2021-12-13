import axios from "axios";
import {userLogin} from "../constants/Constant"

const USER_URL = `${userLogin}`
class AuthService {
  async login(email, password) {
    let token=""
    let formData={
          "email":email,
          "password":password
        }
    const response = await fetch(`${userLogin}/sign-in`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers:{'Content-Type':'application/json'},
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(formData) // body data type must match "Content-Type" header
    }).then(response => response.json())
    .then((data) => {
        console.log("inside response")
        token = data
        localStorage.setItem("user", JSON.stringify(token));
        //token = JSON.stringify(data)
      //  console.log(token.token)
    })
    .catch((error) => {
        console.log(error);
    });
    return token;
  }

  logout() {
    // const history = useHistory();

    // localStorage.removeItem("user");
    // window.location.reload(false)
    // history.push("/");
  }

  register( username,
    password,email,institution) {
    return axios.post(USER_URL + "sign-up", {
      username,
       password,
       email,
       institution
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
