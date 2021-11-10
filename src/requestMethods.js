import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY5M2VhZWRkNDdmNWNkMDkyNWQ0NDQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzU5NTk4NTYsImV4cCI6MTYzNTk2MzQ1Nn0.3oY2otPT9riJeuiUSEjsY6LfKYpcQOzvPLI14bSs1tw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "x-access-token": `${TOKEN}` },
});