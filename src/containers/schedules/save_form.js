import React from 'react';
import { withRouter } from 'react-router';

import Input from '../../components/input';
import spec from './save_spec';

class SaveForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.item.name,
      item: props.item,
      items: this.props.items,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.history.push('/schedules/schedules/');
      }
    );
  }

  render() {
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

export default withRouter(SaveForm);
