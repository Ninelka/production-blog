import React from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

function RequireAuth ({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
