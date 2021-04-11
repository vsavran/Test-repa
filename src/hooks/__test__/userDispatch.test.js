import {renderHook, act} from "@testing-library/react-hooks";
import {useDispatchHook} from '../useDispatch'

describe('Hook testing', () => {
    it('Hook testing custom', () => {
        const {result} = renderHook(
            () => {
                return useDispatchHook({name:""})
            }
        );

    })
})