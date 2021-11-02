import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumbs as MUIBreadcrumbs, Typography, Link as MLink } from '@mui/material'

const ActiveLastBreadcrumb = (props) => {
  console.log(props)

  return (
    <div role="presentation">
      <MUIBreadcrumbs aria-label="breadcrumb">
        <MLink underline="hover" color="inherit">
          <Link to="/">Home Page</Link>
        </MLink>
        <Typography color="text.primary">My Cart</Typography>
      </MUIBreadcrumbs>
    </div>

  )
}

export default withRouter(ActiveLastBreadcrumb)
