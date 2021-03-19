import { CardContainer, CardImg, Name, Anchor} from "./styles";
import { parseImage } from "../../utils";

function Card({character}) {

  return (
    <Anchor to={`character/${character.id}`}>
      <CardContainer>
        <Name>{character.name}</Name>
        <CardImg img={parseImage(character.thumbnail)}/>
      </CardContainer>
    </Anchor>
  )
}

export default Card;
