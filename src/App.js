import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
