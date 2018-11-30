import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HeaderView extends Component {
  render() {
    // container에서 withUser로 감싸줬기 때문에 logout을 props로 받을 수 있다.
    const { username, logout, history } = this.props;

    return (
      <div>
        <Link to="/">쇼핑몰</Link>
        {username ? (
          // 여러 element를 반환하기 위해 <> === <React.Fragment>
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                history.push('/');
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
