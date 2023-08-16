import axios from "axios";

const USER_API_BASE_URL="http://localhost:8080/api/v1/user/saveUser";

class SaveUserService{
    SaveUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
}
export default new SaveUserService;