import { Suspense, lazy } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

const App1Lazy = lazy(() =>
  import('@company/app1').then((module) => {
    return { default: module.App }
  })
)
const App2Lazy = lazy(() =>
  import('@company/app2').then((module) => {
    return { default: module.App }
  })
)

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app1">App1</Link>
          </li>
          <li>
            <Link to="/app2">App2</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/app1"
          element={
            <Suspense fallback={<>loading...</>}>
              <App1Lazy />
            </Suspense>
          }
        />
        <Route
          path="/app2"
          element={
            <Suspense fallback={<>loading...</>}>
              <App2Lazy />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </div>
)

export default App
