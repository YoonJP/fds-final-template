import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    console.log(location.search);
    const p = new URLSearchParams(location.search); // URLSearchParams: key value 스토어(저장소)
    const category = p.get('category');
    return (
      <Layout>
        <h1>Home</h1>
        <Link to="/">ALL</Link>
        <Link to="/?category=top">TOP</Link>
        <Link to="/?category=pants">PANTS</Link>
        <ProductList key={category} category={p.get('category')} />
      </Layout>
    );
    // <Header />
    // <Footer /> 로 할 수도 있다.
  }
}
