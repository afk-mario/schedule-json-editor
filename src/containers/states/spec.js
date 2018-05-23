const spec = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    value: '',
    required: true,
  },
  {
    name: 'color',
    label: 'Color',
    type: 'color',
    value: '#2aa889',
    required: true,
  },
  {
    name: 'showTimer',
    label: 'Show timer',
    type: 'checkbox',
    value: true,
  },
  {
    name: 'showWaitForVideo',
    label: 'Show video',
    type: 'checkbox',
    value: false,
  },
  {
    name: 'showLoops',
    label: 'Show loops',
    type: 'checkbox',
    value: false,
  },
  {
    name: 'options',
    label: 'Options',
    type: 'extra-fields',
    value: [],
    hide: true,
  },
];

export default spec;
