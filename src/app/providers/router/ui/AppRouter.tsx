import React, { memo } from 'react'

import { Routes } from 'react-router-dom'

import { renderWithWrapper } from './renderWithWrapper'
import { routeConfig } from '../config/routerConfig'

const AppRouter = () => {
    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
