import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

describe('Button', () => {
  beforeEach(() => {
    // * By default PropTypes don't throw an error, it just console.error instead
    // global.console.error = (...args) => {
    //   const propTypeFailures = [/Failed prop type/, /Warning: Received/]
    //   if (propTypeFailures.some(p => p.test(args[0]))) {
    //     throw new Error(args[0])
    //   }
    //   global.console.error(...args)
    // }
  })

  it('should render', () => {
    shallow(<Button>Hello Abstract!</Button>)
  })

  it('should match snapshot', () => {
    expect(shallow(<Button className="hacktoberfest">Hello Abstract</Button>)).toMatchSnapshot()
  })

  // * This test fails because we never render the provided icon in the component
  it('should render the provided icon', () => {
    const icon = <FontAwesomeIcon icon={faArrowRight} />
    const wrapper = shallow(<Button icon={icon}>Hello Abstract</Button>)

    expect(wrapper.contains(icon)).toEqual(true)
  })

  // * This test fails because we do not conditionally apply other className provided as prop
  it('should have custom className if provided', () => {
    const wrapper = shallow(<Button className="hacktoberfest">Hello Abstract</Button>)

    expect(wrapper.hasClass('Button hacktoberfest')).toEqual(true)
  })

  // * This test fails because we do not spread other props to the component
  it('should accept other props', () => {
    const style = {
      color: 'red',
    }
    const wrapper = shallow(
      <Button id="test" style={style} type="submit">
        Hello Abstract
      </Button>
    )

    expect(wrapper.prop('id')).toEqual('test')
    expect(wrapper.prop('style')).toEqual(style)
    expect(wrapper.prop('type')).toEqual('submit')
  })

  // * This test fails because we do not spread other props to the component
  it('should handle onClick', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<Button onClick={onClickMock}>Hello Abstract</Button>)

    wrapper.simulate('click')

    expect(onClickMock).toHaveBeenCalledTimes(1)

    onClickMock.mockClear()
  })
})
