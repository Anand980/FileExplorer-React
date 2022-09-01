export const files = [
  {
    type: 'directory',
    name: 'directory01',
    contents: [
      {
        type: 'file',
        name: 'file01',
      },
      {
        type: 'file',
        name: 'file02',
      },
    ],
  },
  {
    type: 'directory',
    name: 'directory02',
    contents: [
      {
        type: 'file',
        name: 'file01',
      },
    ],
  },
  {
    type: 'directory',
    name: 'directory03',
    contents: [
      {
        type: 'file',
        name: 'file01',
      },
      {
        type: 'directory',
        name: 'directory04',
        contents: [
          {
            type: 'file',
            name: 'file01',
          },
          {
            type: 'file',
            name: 'file02',
          },
          {
            type: 'directory',
            name: 'directory05',
            contents: [
              {
                type: 'file',
                name: 'file01',
              },
              {
                type: 'file',
                name: 'file02',
              },
            ],
          },
        ],
      },
    ],
  },
];
