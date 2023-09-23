export const familyData = [
  {
    name: "My dad",
    extra: {id: 1},
    marriages: [
      {
        spouse: {
          name: "My mother (dad's wife)",
          extra: {id: 2},
        },
        children: [
          {
            name: "I",
            id: 3,
            extra: {id: 3},
          },
        ],
      },
    ],
  },
  {
    name: "My wife's dad",
    id: 1,
    extra: {id: 10},
    marriages: [
      {
        spouse: {
          name: "My wife's mother (dad's wife)",
          id: 2,
          extra: {id: 20},
        },
        children: [
          {
            name: "My wife",
            id: 3,
            extra: {id: 30},
          },
        ],
      },
    ],
  },
];

export const initialMock = [
  {
    _id: "64f2012530efa5001373402d",
    name: "Mukti",
    surname: "Rodriguez",
    published_at: "2023-09-01T15:20:16.908Z",
    createdAt: "2023-09-01T15:20:05.604Z",
    updatedAt: "2023-09-01T15:44:21.655Z",
    __v: 0,
    family_tree: "64f1fd9930efa50013734022",
    picture: {
      _id: "64f1ffea30efa50013734023",
      name: "rob4.png",
      alternativeText: "",
      caption: "",
      hash: "rob4_42e0382a8a",
      ext: ".png",
      mime: "image/png",
      size: 14.77,
      width: 150,
      height: 150,
      url: "https://s3.rarus.health:443/rarus/rob4_42e0382a8a.png",
      provider: "minio",
      related: ["64f2012530efa5001373402d"],
      createdAt: "2023-09-01T15:14:50.093Z",
      updatedAt: "2023-09-01T15:20:05.655Z",
      __v: 0,
      id: "64f1ffea30efa50013734023",
    },
    father: "64f2016130efa5001373402f",
    mother: "64f2018130efa50013734031",
    id: "64f2012530efa5001373402d",
  },
  {
    _id: "64f2016130efa5001373402f",
    name: "Raul ",
    surname: "Rodriguez",
    published_at: "2023-09-01T15:21:08.048Z",
    createdAt: "2023-09-01T15:21:05.214Z",
    updatedAt: "2023-09-01T15:25:13.786Z",
    __v: 0,
    family_tree: "64f1fd9930efa50013734022",
    picture: {
      _id: "64f1ffeb30efa5001373402c",
      name: "cat4.png",
      alternativeText: "",
      caption: "",
      hash: "cat4_e90e88b5f9",
      ext: ".png",
      mime: "image/png",
      size: 24.78,
      width: 150,
      height: 150,
      url: "https://s3.rarus.health:443/rarus/cat4_e90e88b5f9.png",
      provider: "minio",
      related: ["64f2016130efa5001373402f"],
      createdAt: "2023-09-01T15:14:51.437Z",
      updatedAt: "2023-09-01T15:21:05.218Z",
      __v: 0,
      id: "64f1ffeb30efa5001373402c",
    },
    father: "64f201d730efa50013734035",
    mother: "64f201b030efa50013734033",
    id: "64f2016130efa5001373402f",
  },
  {
    _id: "64f2018130efa50013734031",
    name: "Yoriko",
    surname: "Vizuet",
    published_at: "2023-09-01T15:21:52.455Z",
    createdAt: "2023-09-01T15:21:37.392Z",
    updatedAt: "2023-09-01T15:26:59.465Z",
    __v: 0,
    family_tree: "64f1fd9930efa50013734022",
    picture: {
      _id: "64f1ffea30efa5001373402b",
      name: "cat1.png",
      alternativeText: "",
      caption: "",
      hash: "cat1_5093aa472a",
      ext: ".png",
      mime: "image/png",
      size: 25.49,
      width: 150,
      height: 150,
      url: "https://s3.rarus.health:443/rarus/cat1_5093aa472a.png",
      provider: "minio",
      related: ["64f2018130efa50013734031"],
      createdAt: "2023-09-01T15:14:50.993Z",
      updatedAt: "2023-09-01T15:21:37.396Z",
      __v: 0,
      id: "64f1ffea30efa5001373402b",
    },
    father: "64f2023e30efa50013734039",
    mother: "64f2021030efa50013734037",
    id: "64f2018130efa50013734031",
  },
  {
    _id: "64f201b030efa50013734033",
    name: "Lidia",
    surname: "Trejo",
    published_at: "2023-09-01T15:22:27.745Z",
    createdAt: "2023-09-01T15:22:24.549Z",
    updatedAt: "2023-09-01T15:22:27.756Z",
    __v: 0,
    family_tree: "64f1fd9930efa50013734022",
    picture: {
      _id: "64f1ffea30efa50013734029",
      name: "cat3.png",
      alternativeText: "",
      caption: "",
      hash: "cat3_020d63970b",
      ext: ".png",
      mime: "image/png",
      size: 25.88,
      width: 150,
      height: 150,
      url: "https://s3.rarus.health:443/rarus/cat3_020d63970b.png",
      provider: "minio",
      related: ["64f201b030efa50013734033"],
      createdAt: "2023-09-01T15:14:50.984Z",
      updatedAt: "2023-09-01T15:22:24.553Z",
      __v: 0,
      id: "64f1ffea30efa50013734029",
    },
    id: "64f201b030efa50013734033",
  },
  {
    _id: "64f201d730efa50013734035",
    name: "Calixto",
    surname: "Rodriguez",
    published_at: "2023-09-01T15:23:05.621Z",
    createdAt: "2023-09-01T15:23:03.077Z",
    updatedAt: "2023-09-01T15:23:05.633Z",
    __v: 0,
    family_tree: "64f1fd9930efa50013734022",
    picture: {
      _id: "64f1ffea30efa50013734028",
      name: "cat2.png",
      alternativeText: "",
      caption: "",
      hash: "cat2_cdb668135d",
      ext: ".png",
      mime: "image/png",
      size: 25.78,
      width: 150,
      height: 150,
      url: "https://s3.rarus.health:443/rarus/cat2_cdb668135d.png",
      provider: "minio",
      related: ["64f201d730efa50013734035"],
      createdAt: "2023-09-01T15:14:50.983Z",
      updatedAt: "2023-09-01T15:23:03.081Z",
      __v: 0,
      id: "64f1ffea30efa50013734028",
    },
    id: "64f201d730efa50013734035",
  },
  {
    _id: "64f2021030efa50013734037",
    name: "Maria",
    surname: "Olguin",
    published_at: "2023-09-01T15:24:03.279Z",
    createdAt: "2023-09-01T15:24:00.245Z",
    updatedAt: "2023-09-01T15:24:06.822Z",
    __v: 0,
    picture: {
      _id: "64f1ffea30efa50013734027",
      name: "cat5.png",
      alternativeText: "",
      caption: "",
      hash: "cat5_9170d2d20f",
      ext: ".png",
      mime: "image/png",
      size: 30.26,
      width: 150,
      height: 150,
      url: "https://s3.rarus.health:443/rarus/cat5_9170d2d20f.png",
      provider: "minio",
      related: ["64f2021030efa50013734037"],
      createdAt: "2023-09-01T15:14:50.959Z",
      updatedAt: "2023-09-01T15:24:00.252Z",
      __v: 0,
      id: "64f1ffea30efa50013734027",
    },
    family_tree: "64f1fd9930efa50013734022",
    id: "64f2021030efa50013734037",
  },
  {
    _id: "64f2023e30efa50013734039",
    name: "Dante",
    surname: "Vizuet",
    published_at: "2023-09-01T15:25:19.984Z",
    createdAt: "2023-09-01T15:24:46.814Z",
    updatedAt: "2023-09-01T15:25:20.041Z",
    __v: 0,
    family_tree: "64f1fd9930efa50013734022",
    picture: {
      _id: "64f1ffea30efa5001373402a",
      name: "rob1.png",
      alternativeText: "",
      caption: "",
      hash: "rob1_3b01ea44ac",
      ext: ".png",
      mime: "image/png",
      size: 17.76,
      width: 150,
      height: 150,
      url: "https://s3.rarus.health:443/rarus/rob1_3b01ea44ac.png",
      provider: "minio",
      related: ["64f2023e30efa50013734039"],
      createdAt: "2023-09-01T15:14:50.988Z",
      updatedAt: "2023-09-01T15:24:46.817Z",
      __v: 0,
      id: "64f1ffea30efa5001373402a",
    },
    id: "64f2023e30efa50013734039",
  },
];


export const initialMock2 = [
  {
    name: "Mukti",
    surname: "Rodriguez",
    father: "64f2016130efa5001373402f",
    mother: "64f2018130efa50013734031",
    id: "64f2012530efa5001373402d",
  },
  {
    name: "Raul ",
    surname: "Rodriguez",
    father: "64f201d730efa50013734035",
    mother: "64f201b030efa50013734033",
    id: "64f2016130efa5001373402f",
  },
  {
    name: "Yoriko",
    surname: "Vizuet",
    father: "64f2023e30efa50013734039",
    mother: "64f2021030efa50013734037",
    id: "64f2018130efa50013734031",
  },
  {
    name: "Lidia",
    surname: "Trejo",
    family_tree: "64f1fd9930efa50013734022",
    id: "64f201b030efa50013734033",
  },
  {
    name: "Calixto",
    surname: "Rodriguez",
    id: "64f201d730efa50013734035",
  },
  {
    name: "Maria",
    surname: "Olguin",
    family_tree: "64f1fd9930efa50013734022",
    id: "64f2021030efa50013734037",
  },
  {
    name: "Dante",
    surname: "Vizuet",
    id: "64f2023e30efa50013734039",
  },
];

export const initialMock3 = [
  {
    id: 1,
    name: "Mukti",
    surname: "Rodriguez",
    gender: "F",
    motherId: 2,
    fatherId: 3,
    picture: {
      url: "https://robohash.org/mukti"
    }
  },
  {
    id: 0,
    name: "Mukti2",
    surname: "Rodriguez",
    gender: "F",
    motherId: 2,
    fatherId: 3,
    picture: {
      url: "https://robohash.org/mukti2"
    }
  },
  {
    id: -1,
    name: "Mukti3",
    surname: "Rodriguez",
    gender: "F",
    motherId: 2,
    fatherId: 3,
    picture: {
      url: "https://robohash.org/mukti3"
    }
  },
  {
    id: 2,
    name: "Yori",
    surname: "Vizuet",
    gender: "F",
    motherId: 4,
    fatherId: 5,
    picture: {
      url: "https://robohash.org/yori"
    }
  },
  {
    id: 3,
    name: "Ralex",
    surname: "Rodriguez",
    gender: "M",
    motherId: 6,
    fatherId: 7,
    picture: {
      url: "https://robohash.org/ralex"
    }
  },
  {
    id: 4,
    name: "Mari",
    surname: "Olguin",
    gender: "F",
    picture: {
      url: "https://robohash.org/mari"
    }
  },
  {
    id: 5,
    name: "Dante",
    surname: "Vizuet",
    gender: "M",
    picture: {
      url: "https://robohash.org/dante"
    }
  },
  {
    id: 6,
    name: "Lidia",
    surname: "Trejo",
    gender: "F",
    motherId: 14,
    picture: {
      url: "https://robohash.org/lidia"
    }
  },
  {
    id: 7,
    name: "Rauli",
    surname: "Rodriguez",
    gender: "M",
    picture: {
      url: "https://robohash.org/rauli"
    }
  },
  {
    id: 8,
    name: "Maridan",
    surname: "Olguin",
    gender: "F",
    motherId: 4,
    fatherId: 5,
    picture: {
      url: "https://robohash.org/maridan"
    }
  },
  {
    id: 9,
    name: "Rich",
    surname: "Vizuet",
    gender: "M",
    motherId: 6,
    fatherId: 7,
    picture: {
      url: "https://robohash.org/rich"
    }
  },
  {
    id: 10,
    name: "Dan",
    surname: "Rodriguez",
    gender: "M",
    motherId: 4,
    fatherId: 5,
    picture: {
      url: "https://robohash.org/dan"
    }
  },
  {
    id: 11,
    name: "Fana",
    surname: "Vizuet",
    gender: "F",
    motherId: 6,
    fatherId: 7,
    picture: {
      url: "https://robohash.org/fana"
    }
  },
  {
    id: 12,
    name: "Salomón",
    surname: "Rodriguez",
    gender: "M",
    motherId: 4,
    fatherId: 5,
    picture: {
      url: "https://robohash.org/salomon"
    }
  },
  {
    id: 13,
    name: "Mich",
    surname: "Vizuet",
    gender: "F",
    motherId: 6,
    fatherId: 7,
    picture: {
      url: "https://robohash.org/mich"
    }
  },
  {
    id: 14,
    name: "Coty",
    surname: "Trejo",
    gender: "F",
    picture: {
      url: "https://robohash.org/coty"
    }
  },
];