import { BrowserRouter as Router } from 'react-router-dom';
import Page from './component/Page';
document.title = "Portfolio : Viriya"

const App = () => {
  return (
    <Router >
      <Page />
    </Router>

  );
}

export default App;