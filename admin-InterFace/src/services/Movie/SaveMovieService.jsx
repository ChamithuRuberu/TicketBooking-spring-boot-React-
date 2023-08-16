import axios from "axios";

const USER_API_BASE_URL="http://localhost:8080/api/v1/saveMovie";

class SaveMovieService{
    SaveMovie(movie){
        return axios.post(USER_API_BASE_URL,movie);
    }
}
export default new SaveMovieService;