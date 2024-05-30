import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <div >
        {navigation.state === 'loading' && <h2>Loading....</h2>}
      </div>
      <Outlet />
    </>
  )
}

export default App
