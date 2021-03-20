import { Switch, Route } from 'react-router-dom'
import { Character, CharacterList} from "../pages";

function Routes(){
    return (
        <Switch>
            <Route path="/character/:id+" component={Character}/>
            <Route path="/:page+" component={CharacterList}/>
            <Route path="/" component={CharacterList} exact/>
        </Switch>
    );
}

export default Routes;