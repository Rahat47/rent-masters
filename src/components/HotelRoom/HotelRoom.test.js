import { fireEvent, render } from '@testing-library/react'

import HotelRoom from './HotelRoom'

describe("clickBtn", () => {
    it('onClick', () => {
        const { queryByTitle } = render(<HotelRoom />)
        const btn = queryByTitle("formBtn")
        fireEvent.click(btn)
        expect(btn.innerHTML).toBe("Booking Request")
    })
})


//Test Failed