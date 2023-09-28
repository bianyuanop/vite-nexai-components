import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Assistant } from './index'

describe('Assistant', () => {
  it('should render', async () => {
    const label = 'test button'
    render(<Assistant companyName="test" companyId={0} color="blue" />)
  })
})
