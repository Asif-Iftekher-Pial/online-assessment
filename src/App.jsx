
import Login from './layouts/Login'
import Dashboard from './layouts/Dashboard'
import { Route, Routes } from 'react-router-dom'
import AdminDashboardView from './view/admin/AdminDashboardView'
import CreateOnlineTest from './layouts/admin/CreateOnlineTest'
import CandidateDashboardView from './view/candidate/CandidateDashboardView'
import ExamRoom from './layouts/candidate/ExamRoom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Products from '../shop/Products'

function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='admin' element={<AdminDashboardView />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='create-online-test' element={<CreateOnlineTest />} />
          </Route>

          <Route path='candidate' element={<CandidateDashboardView />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='exam-room/:id' element={<ExamRoom />} />
            <Route path='products' element={<Products />} />

          </Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App
