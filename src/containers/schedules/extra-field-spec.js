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
    value: 180,
    required: true,
    hide: 'true',
  },
  {
    name: 'waitForVideo',
    label: 'Video',
    type: 'checkbox',
    value: true,
    required: false,
    hide: true,
  },
  {
    name: 'template',
    label: 'Advanced',
    type: 'string',
    required: false,
    value: '',
    hide: true,
  },
  {
    name: 'loops',
    label: 'Loops',
    type: 'number',
    required: false,
    value: '-1',
    hide: true,
  },
];

export default spec;
