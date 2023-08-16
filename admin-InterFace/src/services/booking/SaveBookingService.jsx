import axios from "axios";

const USER_API_BASE_URL="http://localhost:8080/api/v1/booking2/saveBooking";

class SaveBookingService{
    saveBooking(booking){
        return axios.post(USER_API_BASE_URL,booking);
    }
}
export default new SaveBookingService;