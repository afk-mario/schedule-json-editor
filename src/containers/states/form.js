import React from 'react';
import { withRouter } from 'react-router';

import ExtraFieldList from '../../components/extra-field-list';
import Input from '../../components/input';
import spec from './spec';
import extraFieldSpec from './extra-field-spec';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.item };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onExtraFieldsChange = this.onExtraFieldsChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.match.params.pk) return;
    if (nextProps.match.params.pk !== this.props.match.params.pk) {
      const item = nextProps.item;
      this.setState({
        ...item,
        options: item.options,
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
    if (item.pk != null) return;

    const state = Object.assign(
      {},
      ...spec.map(({ name, value }) => ({ [name]: value }))
    );
    this.setState(
      {
        ...state,
        options: [],
      },
      () => {
        // this.props.history.push('/states/');
      }
    );
  }

  onSelectOption(item) {
    const { name } = item;
    const data = Object.assign(
      {},
      ...item.fields.map(({ name, value }) => ({ [name]: value }))
    );
    this.setState({
      name,
      data,
    });
  }

  onExtraFieldsChange(state) {
    this.setState({ options: state.items });
  }

  render() {
    // ooptions is like scheudle data
    const { options = [] } = this.state;

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
          name="Add Option"
          items={options}
          onExtraFieldsChange={this.onExtraFieldsChange}
          spec={extraFieldSpec}
        />
        <button className="button blue" type="submit">
          SAVE
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
