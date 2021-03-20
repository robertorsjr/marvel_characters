import { CardContainer, CardImg, Name, Anchor} from "./styles";
import { parseImage } from "../../utils";

function Card({character , to}) {

  return (
     <Anchor to={to && to}> 
      <CardContainer>
        <Name>{character.name || character.title }</Name>
        <CardImg img={parseImage(character.thumbnail)}/>
      </CardContainer>
    </Anchor> 
  )
}

export default Card;
