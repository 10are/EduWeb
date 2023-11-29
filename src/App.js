import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} /> 
      </Routes>        
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
