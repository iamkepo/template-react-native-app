import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastAction, alertAction, userOneAction, userAction } from './ActivityActions';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toastAction,
    alertAction,
    userOneAction,
    userAction
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};

export const init = (component) => connect(mapStateToProps, mapDispatchToProps)(component);