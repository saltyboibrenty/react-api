import http from "./http-common";
import axios from "axios";

class TutorialDataService {
  getAll() {
    return http.get("/snippets",{ crossDomain: true });
  }

  get(id) {
    return http.get(`/snippets/${id}`,{ crossDomain: true });
  }

  create(data) {
    return http.post("/snippets", data);
  }

  update(id, data) {
    return http.put(`/snippets/${id}`, data);
  }

  delete(id) {
    return http.delete(`/snippets/${id}`);
  }

  deleteAll() {
    return http.delete(`/snippets`);
  }

  findByTitle(title) {
    return http.get(`/snippets?title=${title}`);
  }
}

export default new TutorialDataService();
