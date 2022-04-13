import assert from 'assert'
import { addNumber } from '../functions/add-number'

describe(`resolve addNumber`, () => {
  test(`resolve when numbers < 10`, () => {
    const actual = addNumber(5, 7)
    const expected = 12
    assert.deepEqual(actual, expected)
  })
})
