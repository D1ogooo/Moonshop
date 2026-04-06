import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Pagina_404 } from '../pages/PageNotFound';

export function AppRouter() {
  return (
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path="*" element={<Pagina_404 />} />
    </Routes>
   </BrowserRouter>
  );
}
