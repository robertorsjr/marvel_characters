import api, {endpoints} from "./index";

export async function getCharacters(offset) {
  const { get } = await api
  return get(endpoints.characters(offset))
}

export async function getCharactersById(id){
  const { get } = await api
  return get(endpoints.characterById(id))
}

export async function getCharComics(id){
  const { get } = await api
  return get(endpoints.charComics(id))
}