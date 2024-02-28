import { store } from './store';
import { Provider } from 'react-redux';
import List from './components/List/list';
import './App.css'

function App() { 

  return (
    <>
      <Provider store={store}>
        <List/>
      </Provider>
    </>
  )
}

export default App
