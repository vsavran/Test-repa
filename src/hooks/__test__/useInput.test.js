import {renderHook, act} from "@testing-library/react-hooks";
import {useInput} from '../useInput'

describe('Hook testing', () => {
    it('Hook testing custom', () => {
        const {result} = renderHook(
            () => {
                return useInput({name:""})
            }
        );
        const { value, onChange, clearInput } = result.current;
        expect(onChange).toBeDefined();
        expect(clearInput).toBeDefined();
        expect(value.name).toBe('');
        act(()=>result.current.onChange({target:{value:'Pizdec', name:"name"}}))
        expect(result.current.value.name).toBe('Pizdec');
        act(()=>clearInput())
        expect(value.name).toBe('');
    })
})