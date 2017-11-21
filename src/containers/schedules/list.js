import {connect} from 'react-redux';
import List from '../../components/list';
import {deleteSchedule} from './actions';
import {withRouter} from 'react-router';

const mapStateToProps = state => {
  const {schedules} = state || [];
  const items = schedules.map(item => ({
    id: item.pk,
    text: item.name,
  }));
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: pk => {
      props.history.push(`/schedules/edit/${pk}`);
    },
    onDelete: pk => {
      dispatch(deleteSchedule(pk));
    },
  };
};

const ScheduleList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(List),
);

export default ScheduleList;
