import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <>
    <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} /> 
        <Route path="/education" element={<Dashboard/>} />
      </Routes>        
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
