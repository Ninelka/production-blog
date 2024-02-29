import React, { memo } from 'react'
import { Routes } from 'react-router-dom'
import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { renderWithWrapper } from './renderWithWrapper'

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  )
}

export default memo(AppRouter)
