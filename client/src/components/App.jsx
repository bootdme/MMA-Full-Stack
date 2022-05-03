import React from 'react';
import { useRoutes } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Homepage />} />
  //   </Routes>
  // );
  const routes = useRoutes([
    { path: '/', element: <Homepage /> }
  ]);
  return routes;
}

export default App;
