import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesIndex from './routes/RoutesIndex';

function App() {
  return (
    <>
      <RoutesIndex />
      <ToastContainer />
    </>
  );
}

export default App;
