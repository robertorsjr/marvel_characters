import { Switch, Route , Redirect } from 'react-router-dom'
import { Character, CharacterList, Comic} from "../pages";

function Routes(){
    return (
        <Switch>
            <Redirect from={'/'} to={'/pages/1'} exact />
            <Route path="/character/:id+" component={Character}/>
            <Route path="/pages/:page+" component={CharacterList}/>
            <Route path="/comic/:id+" component={Comic}/>
        </Switch>
    );
}

export default Routes;