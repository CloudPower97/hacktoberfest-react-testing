import React from 'react'
import { shallow, mount } from 'enzyme'
import Input from './Input'
import Cleave from 'cleave.js'

jest.mock('cleave.js')

describe('<Input />', () => {
  it('renders', () => {
    shallow(<Input />)
  })

  it('should match snapshot', () => {
    expect(shallow(<Input />)).toMatchSnapshot()
  })

  describe('initialises', () => {
    beforeEach(() => {
      Cleave.mockClear()
    })

    it('should call Cleave.js constructor', () => {
      mount(<Input />)
      expect(Cleave).toHaveBeenCalledTimes(1)
    })

    // * This test fails because we do not call instance.destroy() on effect cleanup
    it('should destroy Cleave.js instance on componentWillUnmoun', () => {
      mount(<Input />).unmount()
      expect(Cleave.prototype.destroy).toHaveBeenCalledTimes(1)
    })
  })
})
