import React from 'react';
import { withRouter } from 'react-router';

import Input from '../../components/input';
import spec from './spec';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.item };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.match.params.pk) return;
    if (nextProps.match.params.pk !== this.props.match.params.pk) {
      const item = nextProps.item;
      this.setState({
        ...item,
        linePoints: item.linePoints,
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
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(this.state);
    const state = Object.assign(
      {},
      ...spec.map(({ name, value }) => ({ [name]: value }))
    );

    this.setState(
      {
        ...state,
      },
      () => {
        this.props.history.push('/states/');
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

  render() {
    // const {items} = this.props;

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
        <button className="button blue" type="submit">
          OK
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
