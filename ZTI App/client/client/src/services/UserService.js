import axios from 'axios'


const USERS_API = "http://localhost:8085/api/users";

class UserService{
    getUsers(){
        return axios.get(USERS_API);
    }
    
};

export default new UserService()