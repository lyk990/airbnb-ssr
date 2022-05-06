import { http } from "../utils/http";

export function get () {
  return http.httpRequestGet({}, {})
}