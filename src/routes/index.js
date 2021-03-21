import { Switch, Route , Redirect } from 'react-router-dom'
import { Character, CharacterList, Comic} from "../pages";

function Routes(){
  return (
    <Switch>
      <Redirect from={'/'} to={'/pages/1'} exact />
      <Route path="/character/:id+" component={Character} exact/>
      <Route path="/pages/:page+" component={CharacterList} exact/>
      <Route path="/comic/:id+" component={Comic}exact/>
    </Switch>
  );
}

export default Routes;