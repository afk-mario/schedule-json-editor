const spec = [
  {
    name: 'state',
    label: 'State',
    type: 'select',
    value: '',
    required: true,
    hide: true,
  },
  {
    name: 'timer',
    label: 'Timer',
    type: 'number',
    value: -1,
    required: true,
  },
  {
    name: 'waitForVideo',
    label: 'Video',
    type: 'checkbox',
    value: false,
    required: false,
  },
  {
    name: 'template',
    label: 'Advanced',
    type: 'string',
    required: false,
    value: '',
    hide: true,
  },
];

export default spec;
