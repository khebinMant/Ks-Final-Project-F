import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import { Provider } from 'react-redux';
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <MainRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
