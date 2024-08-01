import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/pages/'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/users',
    element: <h1>Users</h1>,
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
])
