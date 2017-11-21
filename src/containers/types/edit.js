import {connect} from 'react-redux';
import {editType} from './actions';
import Form from './form';
import {withRouter} from 'react-router';

const mapStateToProps = (state, props) => {
  const {pk} = props.match.params;
  const {types} = state || [];
  const type = types.filter(item => item.pk === pk)[0] || undefined;
  if (!type) {
    props.history.push('/types/');
  }
  return {
    item: type,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: type => {
      dispatch(editType(type));
      props.history.push('/types/');
    },
  };
};

const EditType = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

export default EditType;
