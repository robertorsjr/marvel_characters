import { Switch, Route } from 'react-router-dom'
import { Character, CharacterList} from "../pages";

function Routes(){
    return (
        <Switch>
            <Route path="/character" component={Character}/>
            <Route path="/" component={CharacterList} exact/>
        </Switch>
    );
}

export default Routes;