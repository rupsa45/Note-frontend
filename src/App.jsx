import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from  './components/ProtectedRoute'
import Layout from "./layout/layout"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}
function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Layout>
                <Home/>
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
        }
        />

        <Route
          path="/logout"
          element={<Logout />}
        />

        <Route
         path="/register"
         element={
          <Layout>
            <RegisterAndLogout />
          </Layout>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )

 
}

export default App
