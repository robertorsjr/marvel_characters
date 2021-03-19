import api, {endpoints} from "./index";

export async function getCharacters() {
  const {get} = await api
  return get(endpoints.characters);
}