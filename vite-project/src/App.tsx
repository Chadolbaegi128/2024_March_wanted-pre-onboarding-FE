import { store } from './store';
import { Provider } from 'react-redux';
import './App.css'

function App() { 

  return (
    <>
      <Provider store={store}>
        <div>
          Click on the Vite and React logos to learn more
        </div>
      </Provider>
    </>
  )
}

export default App
