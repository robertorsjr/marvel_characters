import {CardContainer, CardImg, Name} from "./styles";
import {parseImage} from "../../utils";

function Card({character}) {
  return (
    <CardContainer>
      <Name>{character.name}</Name>
      <CardImg img={parseImage(character.thumbnail)}/>
    </CardContainer>
  )
}

export default Card;
