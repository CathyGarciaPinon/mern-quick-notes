import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }

export async function create(note) {
    return sendRequest(BASE_URL, "POST", note);
}
export async function deleteNote(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}