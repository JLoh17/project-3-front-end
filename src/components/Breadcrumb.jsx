import React from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumbs as MUIBreadcrumbs, Typography, Link as MLink } from '@mui/material'

const Breadcrumb = (props) => {
  const { history, location: { pathname } } = props

  const pathnames = pathname.split('/').filter((x) => x)

  return (
    <div role="presentation">
      <MUIBreadcrumbs aria-label="breadcrumb">

        <MLink onClick={() => history.push('/')}>Home</MLink>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`

          console.log('====================')
          console.log(name)
          console.log(routeTo)
          console.log('====================')
          const isLast = index === pathnames.length - 1

          return isLast ? (
            <Typography key={name}>{name} </Typography>
          ) : (
            <MLink key={name} onClick={() => history.push('/')}>{name}</MLink>
          )
        })}

      </MUIBreadcrumbs>
    </div>

  )
}

export default withRouter(Breadcrumb)
