import React from 'react'
import Card from 'react-bootstrap/Card'
import Loading from '@/components/Loading'

const data = [
  {
    id: '1',
    productName: '',
    price: '121',
    imageUrl: 'https://rukminim1.flixcart.com/image/714/857/kjbr8280-0/t-shirt/a/p/1/m-tsrt-118-reya-original-imafyx4vqsmyyduq.jpeg?q=50'
  }, {
    id: '2',
    productName: '',
    price: '392.99',
    imageUrl: 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540'
  }, {
    id: '3',
    productName: '',
    price: '312.11',
    imageUrl: 'https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt-500x500.jpg'
  }, {
    id: '4',
    productName: '',
    price: '921',
    imageUrl: 'https://m.media-amazon.com/images/I/61MSZWTT3IL._UY550_.jpg'
  }, {
    id: '3',
    productName: '',
    price: '723',
    imageUrl: 'https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt-500x500.jpg'
  }, {
    id: '4',
    productName: '',
    price: '123',
    imageUrl: 'https://rukminim1.flixcart.com/image/714/857/kjbr8280-0/t-shirt/a/p/1/m-tsrt-118-reya-original-imafyx4vqsmyyduq.jpeg?q=50'
  }
]

// need to add truncate to className so the title doesn't go too big
// use map list out one by one, then use col-md-3 to restrict it to 4 columns; p-0 fills up the whole page
class ProductIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.productShow = this.productShow.bind(this)
  }

  // componentDidMount() {
  //   this.props.getMyTodos()
  // }

  productShow() {
    // this.props
  }

  renderIndex() {
    return (
      <div className="row">
        {
          data.map((product) => (
            <Card
              key={product.id}
              className="col-6 col-md-3 p-0"
              onClick={this.productShow}
            >
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div id="product-index" className="container">
        <header className="text-center mb-3">
          <h1>Category.catName</h1>
        </header>
        { this.renderIndex()}
      </div>
    )
  }
}

export default ProductIndex
