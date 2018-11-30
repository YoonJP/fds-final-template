import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

// CHECK[  ] - 실무에서 PC를 HOC로 감싸서 CC로 사용하는 패턴이 많이 쓰인다.
export default withRouter(withUser(HeaderView));
// withRotuer를 둘러준 컴포넌트는 match, history, location prop을 받게 된다.
