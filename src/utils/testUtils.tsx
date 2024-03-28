/* eslint-disable */
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: App, ...options })

export * from '@testing-library/react'
export { customRender as render }
