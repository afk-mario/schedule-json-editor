import { connect } from 'react-redux';
import List from '../../components/list';
import { deleteType } from './actions';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  const { types } = state || [];
  const items = types.map(item => ({
    id: item.pk,
    text: item.name,
    style: { color: item.color },
  }));
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: pk => {
      props.history.push(`/types/edit/${pk}`);
    },
    onDelete: pk => {
      dispatch(deleteType(pk));
    },
    onExport: pk => {
      props.history.push(`/types/save/${pk}`);
    },
  };
};

const TypeList = withRouter(connect(mapStateToProps, mapDispatchToProps)(List));

export default TypeList;
