import api, { endpoints } from './index'

export async function getComic(id){
  const { get } = await api
  return get(endpoints.comic(id))
}

export async function getComicCharacters(id){
  const { get } = await api
  return get(endpoints.comicCharacters(id))
}