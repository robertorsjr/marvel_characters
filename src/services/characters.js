import api, {endpoints} from "./index";

export async function getCharacters(page) {
  const { get } = await api
  return get(endpoints.characters(page))
}

export async function getCharactersById(id){
  const { get } = await api
  return get(endpoints.characterById(id))
}

export async function getCharComics(id){
  const { get } = await api
  return get(endpoints.charComics(id))
}