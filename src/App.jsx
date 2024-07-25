import './App.css'
import { Provider } from "react-redux";
import { store } from "./store/store";
import AllUsers from './pages/AllUsers';

function App() {

  return (
    <>
    <Provider store={store}>
      <AllUsers/>
    </Provider>
    </>
  )
}

export default App
