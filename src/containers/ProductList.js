import React, { Component } from 'react';
import ProductListView from '../components/ProductListView';
import api from '../api';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  async componentDidMount() {
    const { category } = this.props;
    const { data: products } = await api.get('/products', {
      params: {
        category,
      },
    });
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;
    // 객체를 바로 받아오기 위해 '({})'를 쓴다
    const productsList = products.map(p => ({
      title: p.title,
      id: p.id,
      imgURL: p.mainImgUrl,
    }));
    return <ProductListView loading={loading} products={productsList} />;
  }
}
