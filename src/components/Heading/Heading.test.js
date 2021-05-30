import { render } from '@testing-library/react'
import Heading from './Heading'

it('checkHeadingRender', () => {
    const {queryByTitle} = render(<Heading/>)
    const h4 = queryByTitle("subtitle")
    expect(h4).toBeFalsy()
})