import { connect } from 'react-redux';
import { exportState } from '../../lib/export';
import Form from './save_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { types } = state || [];
  const type = types.filter(item => item.pk === pk)[0] || undefined;
  if (!type) {
    props.history.push('/types/');
  }
  return {
    item: type,
    items: types,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: ({ item, name }) => {
      exportState({ items: item, fileName: name });
      props.history.push('/types/');
    },
  };
};

const Save = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

export default Save;
