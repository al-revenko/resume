import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reduxStore from './store/redux/redux.store.ts'
import App from './components/App.tsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
