import axios from "axios";
import { Category } from "./model";

function findAll<T>() {
  return axios.get<T[]>("http://");
}

findAll<Category>().then((response) => response.data);
