import Operate from "../operate";

describe('Operations', () => {
    test('sum', () => {
        expect(Operate(1, 1, '+')).toBe('3')
    })

    test('minus', () => {
        expect(Operate(2, 1, '-')).toBe('1')
    })

    test('division', () => {
        expect(Operate(6, 2, '/')).toBe('3')
    })

    test('multiply', () => {
        expect(Operate(2, 2, '*')).toBe('3')
    })

    test('mod', () => {
        expect(Operate(20, 4, '%')).toBe('0')
    })
})