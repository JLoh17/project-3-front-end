// TODO image size css
import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

import Footer from '@/components/Footer'

const categories = [
  {
    id: '1',
    name: 'Men\'s Tops',
    src: 'https://cdn.shopify.com/s/files/1/0543/4454/8549/files/MG_2317STEFAN-VAN-RUIJVEN-FOTOGRAFIE---OUTRGS-MEN_S-FASHION_1800x.jpg?v=1621854112'
  }, {
    id: '2',
    name: 'Men\'s Shoes',
    src: 'https://modone.com/eng_pl_Mens-shoes-T326-brown-14029_7.jpg'
  }, {
    id: '3',
    name: 'Men\'s Hats',
    src: 'https://i.pinimg.com/736x/04/b3/3f/04b33f8059ce671b3569b7c4bb28f7a3--men-hats-fedora-mens-hats.jpg'
  }
]

class PagesHome extends React.Component {
  constructor(props) {
    super(props)

    this.getCategoryByFilter = this.getCategoryByFilter.bind(this)
  }

  getCategoryByFilter(catId) { // this is referring to the getCategoryByFilter under <Card>
    const { history: { push } } = this.props // redirects to the push on the line below
    push(`/products?catName=${catId}`)
  }

  render() {
    return (
      <>
        <div id="pages-home" className="container-fluid m-1">
          <header className="text-center border-bottom my-3">
            <h1>From Head to Toe</h1>
            <h6>Men&aps;s fashion</h6>
          </header>

          <div className="d-flex justify-content-around my-3">
            <CardGroup>
              {
                categories.map((cat) => (
                  <Card key={cat.id} onClick={() => this.getCategoryByFilter(cat.id)}>
                    <Button variant="light" className="button shadow-none">
                      <Card.Img variant="top" className="cardImage" src={cat.src} />
                      <Card.Title className="text text-white">{cat.name}</Card.Title>
                    </Button>
                  </Card>
                ))
              }
            </CardGroup>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

PagesHome.propTypes = {
  history: PropTypes.shape().isRequired
}

export default PagesHome
