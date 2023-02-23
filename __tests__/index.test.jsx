import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index.tsx'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a main element', () => {
    render(<Home />)

    const main = screen.getByRole('main', {
      name: /welcome to next\.js!/i,
    })

    expect(main).toBeInTheDocument()
  })
})
