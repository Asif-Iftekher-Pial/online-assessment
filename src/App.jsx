
import Login from './layouts/Login'
import Dashboard from './layouts/Dashboard'
import { Route, Routes } from 'react-router-dom'
import AdminDashboardView from './view/admin/AdminDashboardView'
import CreateOnlineTest from './layouts/admin/CreateOnlineTest'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='admin' element={<AdminDashboardView />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='create-online-test' element={<CreateOnlineTest />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
