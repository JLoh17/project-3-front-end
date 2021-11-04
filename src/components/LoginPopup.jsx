import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Popover, Overlay } from 'react-bootstrap'

import FormsAuthLogin from '@/forms/login'

function LoginPopover({ onSubmit }) {
  return (

    <Popover id="popover-contained">
      <Popover.Title as="h3">Login</Popover.Title>
      <Popover.Content>
        <FormsAuthLogin
          onSubmit={onSubmit}
        />
      </Popover.Content>
    </Popover>
  )
}

LoginPopover.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LoginPopover
