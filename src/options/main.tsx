import { RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import React from 'react'

import './base.scss'
import { router } from './router'

const container = document.getElementById('app')!
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
