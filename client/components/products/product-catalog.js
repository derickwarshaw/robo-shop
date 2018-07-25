import React, {Component} from 'react'
import ProductGrid from './product-grid'
import {connect} from 'react-redux'
import {fetchProducts} from '../../store'
import {Header, Container, Button, Pagination, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const mapState = state => ({
  products: state.products,
  category: state.currentCategory,
  user: state.user
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

class ProductCatalog extends Component {
  componentDidMount() {
    const {getProducts} = this.props
    getProducts()
  }

  render() {
    const {products, user} = this.props
    const categoryId = Number(this.props.match.params.categoryId)
    const renderProducts =
      categoryId > 0
        ? products.filter(product => {
            for (let i = 0; i < product.categories.length; i++) {
              if (product.categories[i].id === categoryId) {
                return product
              }
            }
          })
        : products
    return (
      <Container style={styles.container}>
        <Header as="h1">
          Products
          {user.isAdmin ? (
            <Button as={Link} to="/admin/products/add" basic color="green" style={styles.button}>
              Add A Product
            </Button>
          ) : (
            ''
          )}
        </Header>
        <ProductGrid products={renderProducts} />
        <Divider />
        <Container textAlign="center">
          <Pagination defaultActivePage={1} totalPages={3} />
        </Container>
      </Container>
    )
  }
}

const styles = {
  container: {
    margin: 30
  },
  button: {
    marginLeft: 20
  }
}

export default connect(mapState, mapDispatch)(ProductCatalog)
