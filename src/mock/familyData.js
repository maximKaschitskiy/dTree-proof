export const familyData = [
  {
    name: "Grandfather's Name Surname",
    extra: {
      userpic: "granpa bl",
      birth: "01/01/1970",
    },
    marriages: [
      {
        spouse: {
          name: "Grandmother's Name Surname",
          extra: {
            userpic: "grandma bl",
            birth: "05/03/1972",
          },
        },
        children: [
          {
            name: "Mother's Name Surname",
            extra: {
              userpic: "mom bl",
              birth: "23/05/1998",
            },
            marriages: [
              {
                spouse: {
                  name: "Father's Name Surname",
                  extra: {
                    userpic: "dad bl",
                    birth: "23/05/1998",
                  },
                },
                children: [
                  {
                    name: "Jane Doe",
                    extra: {
                      userpic: "daughter bl",
                      birth: "17/09/2010",
                      selected: true,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];