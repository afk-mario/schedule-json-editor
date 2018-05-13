import React from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ExtraFieldRow from '../../components/extra-field-row';

class ExtraFieldList extends React.Component {
  constructor(props) {
    super(props);

    const { items } = props || [];
    this.state = { items };

    this.handleExtraField = this.handleExtraField.bind(this);
    this.handleExtraFieldChange = this.handleExtraFieldChange.bind(this);
    this.handleDeleteExtraField = this.handleDeleteExtraField.bind(this);
    this.moveRow = this.moveRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items) {
      const { items } = nextProps || [];
      this.setState({ items });
    }
  }

  handleExtraField() {
    const field = Object.assign(
      {},
      ...this.props.spec.map(({ name, value }) => ({ [name]: value }))
    );
    this.setState({ items: [...this.state.items, field] }, () => {
      this.props.onExtraFieldsChange(this.state);
    });
  }

  handleDeleteExtraField(i) {
    const { items } = this.state;
    if (i > -1) {
      items.splice(i, 1);
    }
    this.setState({ items }, () => {
      this.props.onExtraFieldsChange(this.state);
    });
  }

  handleExtraFieldChange(index, item) {
    const { items } = this.state;
    items[index] = { ...item };
    this.setState({ items }, () => {
      this.props.onExtraFieldsChange(this.state);
    });
  }

  moveRow(dragIndex, hoverIndex) {
    const { items } = this.state;
    const dragItem = items[dragIndex];

    this.setState(
      update(this.state, {
        items: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]],
        },
      }),
      () => {
        this.props.onExtraFieldsChange(this.state);
      }
    );
  }

  render() {
    const { items = [] } = this.state;
    const { name, spec, options } = this.props;

    return (
      <div>
        <div className="container two-columns">
          <h3>{name}</h3>
          <span className="button blue" onClick={this.handleExtraField}>
            +
          </span>
        </div>
        {items.map((item, i) => {
          const option = options
            ? options.find(a => a.name === item.state)
            : null;
          const color = option ? option.color : '#ffffff';
          return (
            <ExtraFieldRow
              key={i}
              id={`${i}-row`}
              index={i}
              name="row"
              label={`Row ${i}`}
              item={item}
              color={color}
              spec={spec}
              options={options}
              onChange={this.handleExtraFieldChange}
              onDelete={this.handleDeleteExtraField}
              moveRow={this.moveRow}
            />
          );
        })}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ExtraFieldList);
