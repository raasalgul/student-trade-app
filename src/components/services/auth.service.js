import axios from "axios";
import {serviceURLHost} from "../constants/Constant"

const API_URL = `${serviceURLHost}/api/auth/`;

class AuthService {
  login(userName, password) {
    console.log(userName)
    return axios
      .post(API_URL + "sign-in", {
        userName,
        password
      })
      .then(response => {
        console.log(JSON.stringify(response))
        if (response.data.accessToken) {
          let res={};
          res.id=response.data.id;
          res.username=response.data.username;
          res.accessToken=response.data.accessToken;
          res.tokenType=response.data.tokenType;
          localStorage.setItem("user", JSON.stringify(res));
        }

        return response.data;
      });
  }

  logout() {
    // const history = useHistory();

    // localStorage.removeItem("user");
    // window.location.reload(false)
    // history.push("/");
  }

  register( username,
    password,email) {
    return axios.post(API_URL + "sign-up", {
      username,
       email,
       password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
