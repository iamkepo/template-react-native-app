import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStateAction } from './ActivityActions';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setStateAction
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { data } = state
  return { data }
};

export const init = (component) => connect(mapStateToProps, mapDispatchToProps)(component);