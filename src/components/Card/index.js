import { CardContainer, CardImg, Name, Anchor} from "./styles";
import { parseImage } from "../../utils";
import { Separator } from '../../components'

function Card({character , to}) {

  return (
    <Separator y={360} x={236}>
     <Anchor to={to && to}> 
      <CardContainer>
        <Name>{character.name || character.title}</Name>
        <CardImg img={parseImage(character.thumbnail)}/>
      </CardContainer>
    </Anchor> 
    </Separator>
  )
}

export default Card;
