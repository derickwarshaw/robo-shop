import React, {Component} from 'react'
import ProductGrid from './product-grid'
import {connect} from 'react-redux'
import {fetchProducts} from '../../store'
import {Header, Container} from 'semantic-ui-react'

const mapState = state => ({
  products: state.products,
  category: state.currentCategory
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
    const {products} = this.props
    const categoryId = this.props.match.params.categoryid
    const renderProducts =
      categoryId > 0
        ? products.filter(product => {
            if ((product.categoryId = categoryId)) {
              return product
            }
          })
        : products
    return (
      <Container style={styles.container}>
        <Header as="h1">Products</Header>
        <ProductGrid products={renderProducts} />
      </Container>
    )
  }
}

const styles = {
  container: {
    margin: 30
  }
}

export default connect(mapState, mapDispatch)(ProductCatalog)
