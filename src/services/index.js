import axios from 'axios';
import CriptoJS from 'crypto-js';

const ts = new Date().getTime()
const hash = CriptoJS.MD5(ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY).toString()

const api = axios.create({baseURL: 'https://gateway.marvel.com/v1/public'});
const params = `?apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}&ts=${ts}`

export const endpoints = {
  characters: (page) => `/characters${params}&offset=${(page - 1) * 20}`,
  characterById: (id) => `/characters/${id}${params}`,
  charComics: (id) => `/characters/${id}/comics${params}`,
  comic: (id) => `/comics/${id}${params}`,
  comicCharacters: (id) => `/comics/${id}/characters${params}`
}

export default api;