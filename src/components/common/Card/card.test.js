import {cleanup, render, screen} from '@testing-library/react'
import {CardComponent} from './Card'
import MockTheme from "../../../MockTheme";

// beforeEach(() => {
//     render(<MockTheme><CardComponent title={'newTitle'}/></MockTheme>)
// })
afterEach(() => {
    cleanup()
})

describe('CardTesting', () => {
    describe('Props testing', () => {
        it('Has props', () => {
            render(<MockTheme><CardComponent title={'newTitle'} content={<div>Here is content</div>}/></MockTheme>)
            const title = screen.getByTestId('cardTitleId');
            expect(title).toBeTruthy()
            const content = screen.queryByText('Here is content')
            expect(content).toBeInTheDocument()
        })

        it('Does not have title props', () => {
            render(<MockTheme><CardComponent/></MockTheme>)
            expect(screen.queryByTestId('cardTitleId')).toBeNull()
        })
    })

})
