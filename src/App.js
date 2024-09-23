import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ex00 from './pages/Ex00';
import AddList from './pages/AddList';
import DeleteForm from './pages/DeleteForm';


function App() {

  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/list' element={<AddList />} />
          <Route path='/delete' element={<DeleteForm />} />


        </Routes>
      </BrowserRouter>

    </div>

  );

}

export default App;
