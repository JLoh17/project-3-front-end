import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { connect } from 'react-redux'

import { authLogin } from '@/actions/auth'
import FormsAuthLogin from '@/forms/login'

const LoginPopover = ({ children, ...props }) => {
  const [show, setShow] = useState(false)

  const handleLoginSubmit = (values) => {
    props.authLogin(values).then(() => {
      setShow(false)
    })
  }

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      // show={show}
      onToggle={() => {
        setShow(!show)
      }}
      overlay={(
        <Popover>
          <Popover.Title as="h3">Login</Popover.Title>
          <Popover.Content>
            <FormsAuthLogin
              onSubmit={handleLoginSubmit}
            />
          </Popover.Content>
        </Popover>
      )}
    >
      {children}
    </OverlayTrigger>
  )
}

LoginPopover.propTypes = {
  authLogin: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const mapDispatchToProps = {
  authLogin
}

export default connect(null, mapDispatchToProps)(LoginPopover)
