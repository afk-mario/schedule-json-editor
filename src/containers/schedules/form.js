import React from 'react';

import Input from '../../components/input';
import ExtraFieldList from '../../components/extra-field-list';
import spec from './spec';
import extraFieldSpec from './extra-field-spec';

import { withRouter } from 'react-router';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.item };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onExtraFieldsChange = this.onExtraFieldsChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.match.params.pk) return;
    if (nextProps.match.params.pk !== this.props.match.params.pk) {
      const item = nextProps.item;
      this.setState({
        ...item,
        data: item.data,
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { onSubmit, item } = this.props;

    event.preventDefault();
    onSubmit(this.state);
    console.log(item);

    if (item.pk != null) return;

    const state = Object.assign(
      {},
      ...spec.map(({ name, value }) => ({ [name]: value }))
    );

    this.setState(
      {
        ...state,
        data: [],
      },
      () => {
        // this.props.history.push('/schedules/');
      }
    );
  }

  onExtraFieldsChange(state) {
    this.setState({ data: state.items });
  }

  render() {
    const { data } = this.state;
    const { options } = this.props;

    return (
      <form className="dark-container" onSubmit={this.handleSubmit}>
        {spec.map(
          (item, i) =>
            item.hide ? (
              ''
            ) : (
              <Input
                key={i}
                {...item}
                value={this.state[item.name]}
                onChange={this.handleInputChange}
              />
            )
        )}
        <ExtraFieldList
          name="Add State"
          items={data}
          onExtraFieldsChange={this.onExtraFieldsChange}
          spec={extraFieldSpec}
          options={options}
        />
        <button className="button blue" type="submit">
          SAVE
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
