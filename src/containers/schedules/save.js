import { connect } from 'react-redux';
import { exportState } from '../../lib/export';
import Form from './save_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { schedules } = state || [];
  const schedule = schedules.filter(item => item.pk === pk)[0] || undefined;
  if (!schedule) {
    props.history.push('/schedules/');
  }
  return {
    item: schedule,
    items: schedules,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: ({ item, name }) => {
      exportState({ items: item.data, fileName: name, objectName: 'data' });
      props.history.push('/schedules/');
    },
  };
};

const Save = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

export default Save;
