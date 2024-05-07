import axios from 'axios';

//axios.defaults.withCredentials = true;

class UserService
{
    login(credential)
    {
        return axios.post("http://localhost:8080/project/pharm", credential);
    }

    createUser(user)
    {
        return axios.post("http://localhost:8080/project/pharm/createUser", user);
    }

    logout()
    {
        return axios.delete("http://localhost:8080/project/pharm/logout");
    }

}

export default new UserService()