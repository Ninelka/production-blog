import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData, getUserRoles, type UserRole } from 'entities/User'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

function RequireAuth (props: RequireAuthProps) {
  const { children, roles } = props
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some(requiredRole => {
      const hasRole = userRoles?.includes(requiredRole)
      return hasRole
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
