import axios from "axios";
import { SERVER_BASE } from "client/consts/end-points";

export default axios.create({
  baseURL: SERVER_BASE,
});