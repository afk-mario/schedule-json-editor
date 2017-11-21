import { connect } from 'react-redux';
import { exportState } from '../../lib/export';
import Form from './save_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { states } = state || [];
  const item = states.filter(item => item.pk === pk)[0] || undefined;
  if (!item) {
    props.history.push('/states/');
  }
  return {
    item,
    items: states,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: ({ item, name }) => {
      exportState({ items: item, fileName: name });
      props.history.push('/states/');
    },
  };
};

const Save = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

export default Save;
