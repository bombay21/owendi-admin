import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTY5M2VhZWRkNDdmNWNkMDkyNWQ0NDQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzU4NjczNTYsImV4cCI6MTYzNTg3MDk1Nn0.f9FqmIfv5NQMqVQaHaffdIZhK8Is1GqUUIuKc26WGrE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "x-access-token": `${TOKEN}` },
});