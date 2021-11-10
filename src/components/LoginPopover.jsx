import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { connect } from 'react-redux'

import { authLogin } from '@/actions/auth'
import FormsAuthLogin from '@/forms/login'

const LoginPopover = ({ children, ...props }) => {
  const [show, setShow] = useState(false)

  const handleLoginSubmit = (values, methods) => {
    props.authLogin(values).then(() => {
      setShow(false)
    }).catch(() => {
      methods.setSubmitting(false)
      toast.error('Login credentials incorrect, please try again', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      })
    })
  }

  return (
    <>
      <ToastContainer />
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
    </>
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
