import React from 'react'

import SearchSort from '@/components/SearchSort'

class MyOrdersIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div id="my-orders-index" className="container">
        <header className="text-center my-3">
          <h1>My Orders Index</h1>

        </header>
        <SearchSort />

      </div>
    )
  }
}

export default MyOrdersIndex
