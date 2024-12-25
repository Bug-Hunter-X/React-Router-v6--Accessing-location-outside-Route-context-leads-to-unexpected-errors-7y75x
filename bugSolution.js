// bugSolution.js
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();

  return (
    <div>
      <p>Current pathname: {location.pathname}</p>
    </div>
  );
}

export default MyComponent;

//Example usage within a Route component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyComponent from './MyComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MyComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;