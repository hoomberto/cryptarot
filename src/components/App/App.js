import { Route } from 'react-router-dom'
import CardChoice from '../CardChoice/CardChoice'
import './App.css';

const App = () => {
  return (
    <main>
      <Route exact to="/" component={CardChoice} />
    </main>
  );
}

export default App;
