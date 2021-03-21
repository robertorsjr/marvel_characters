import { BrowserRouter } from 'react-router-dom'
import  Routes  from './routes'
import {Styles as GlobalStyle} from './resources'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle/>
    </> 
  );
}

export default App;
