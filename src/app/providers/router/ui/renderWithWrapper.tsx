import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import RequireAuth from './RequireAuth'
import { AppRoutesProps } from '@/shared/types/router'

export const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader/>}>
      {route.element}
    </Suspense>
  )

  return (
    <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element} />
  )
}
