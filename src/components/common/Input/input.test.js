import {render, screen} from '@testing-library/react'
import {Input} from './Input'
describe('Input component', ()=>{
    it('Input render', ()=>{
        render(<Input/>)
        const inputComp = screen.queryByTestId('inputTestId')
        expect(inputComp).toBeTruthy()
    })
})