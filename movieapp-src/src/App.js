import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home";
import IndividualMovie from "./components/individualMovie";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/individualmovie/:mid" element={<IndividualMovie />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

