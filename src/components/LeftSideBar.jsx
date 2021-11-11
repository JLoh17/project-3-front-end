import React from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'react-minimal-side-navigation'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const CompsLeftSidebar = (props) => {
  const { history, location } = props

  return (

    <div className="d-flex flex-column align-items-start col-3 mt-5 w-20">
      <div className="">
        <span>
          <h4>
            Categories
          </h4>
        </span>
      </div>
      {/* <div><Link to="/products?catName=1">{'Men\'s Tops'}</Link></div>
      <div><Link to="/products?catName=2">{'Men\'s Shoes'}</Link></div>
      <div><Link to="/products?catName=3">{'Men\'s Hats'}</Link></div> */}

      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          history.push(itemId)
        }}
        items={[
          {
            title: 'All Categories',
            itemId: '/products'

          },
          {
            title: 'Men\'s Tops',
            itemId: '/products?catName=1'

          },
          {
            title: 'Men\'s Shoes',
            itemId: '/products?catName=2'

          },
          {
            title: 'Men\'s Hats',
            itemId: '/products?catName=3'

          }
        ]}
      />
    </div>
  )
}

CompsLeftSidebar.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired

}

export default withRouter(CompsLeftSidebar)
