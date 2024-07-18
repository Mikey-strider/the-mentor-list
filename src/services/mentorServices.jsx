import { SERVER_URL } from "../util";

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL + "/mentors";

export async function index() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    if (response.ok) return data;
    throw new Error(data.error);
  } catch (err) {
    console.log(err);
    console.log(`Error occured fetching mentor data`);
  }
}

export async function create(formData) {
  try {
    const response = await fetch(`${SERVER_URL}/mentors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) return data;
    throw new Error(data.error);
  } catch (err) {
    console.log(err);
    console.log(`Error occured creating mentor profile`);
  }
}


export async function removeMentor(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(BASE_URL + `${id}`, options);
    const data = response.json();
    if (response.ok) return data;
    throw new Error(data.error);
  } catch (err) {
    console.log(err);
    console.log(`Error occured, could not delete mentor | _id: ${id}`);
  }
}