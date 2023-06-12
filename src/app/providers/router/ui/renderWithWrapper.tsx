import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { type AppRoutesProps } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import RequireAuth from './RequireAuth'

export const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader/>}>
      <div className="page-wrapper">
        {route.element}
      </div>
    </Suspense>
  )

  return (
    <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element} />
  )
}
