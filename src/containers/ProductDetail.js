import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  static defaultProps = {
    // 표시해주어야 하는 삼품의 id
    productId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      id: null,
      title: '',
      description: '',
      mainImgUrl: '',
      detailImgUrls: [],
      options: [
        // {
        //   "id": 1,
        //   "productId": 1,
        //   "title": "Medium",
        //   "price": 30000
        // },
      ],
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const { data: product } = await api.get('/products/' + productId, {
      params: {
        _embed: 'options',
      },
    });
    this.setState({
      ...product,
      loading: false,
    });
  }

  // 서버측 장바구니에 항목을 추가하는 함수
  // classfield 문법 (this가 고정됨, 아래에서 bind를 해 줄 필요없음)
  handleCreateCartItem = async (optionId, quantity) => {
    // ...
    alert(`장바구니 테스트, ${optionId}, ${quantity}`);
  };

  render() {
    return (
      <div>
        <ProductDetailView
          onCreateCartItem={this.handleCreateCartItem}
          {...this.state}
        />
      </div>
    );
  }
}
