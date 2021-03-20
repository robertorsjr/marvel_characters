import api, {endpoints} from "./index";

export async function getCharacters() {
  const { get } = await api
  return get(endpoints.characters)
}

export async function getCharactersById(id){
  const { get } = await api
  return get(endpoints.characterById(id))
}