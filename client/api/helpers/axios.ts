import axios from "axios";
import { SERVER_BASE } from "client/consts/endpoints";

export default axios.create({
  baseURL: SERVER_BASE,
});