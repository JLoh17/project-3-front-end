import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Breadcrumbs as MUIBreadcrumbs, Typography, Link as MLink } from '@mui/material'

const Breadcrumb = (props) => {
  const { history, location: { pathname } } = props

  const pathNames = pathname.split('/').filter((x) => x)

  return (
    <div role="presentation">
      <MUIBreadcrumbs aria-label="breadcrumb">

        <MLink onClick={() => history.push('/')}>Home</MLink>
        {
          pathNames.map((name, index) => {
            const isLast = index === pathNames.length - 1

            return isLast ? (
              <Typography key={name}>{name} </Typography>
            ) : (
              <MLink key={name} onClick={() => history.push('/')}>{name}</MLink>
            )
          })
        }
      </MUIBreadcrumbs>
    </div>
  )
}

Breadcrumb.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired
}

export default withRouter(Breadcrumb)
