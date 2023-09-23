/* eslint-disable */
const isFather = (obj, id) => {
  return obj.some((item) => item.father === id);
};

const getChilds = (obj, id) => {
  const result = obj.filter((item) => item.father === id || item.mother === id);
  return result.length > 0 ? result : null;
};

const getPartner = (obj, parentId) => {
  if (findByProp(obj, "mother", parentId)) {
    const commonChild = findByProp(obj, "mother", parentId);
    return findById(obj, commonChild.father);
  }
  if (findByProp(obj, "father", parentId)) {
    const commonChild = findByProp(obj, "father", parentId);
    return findById(obj, commonChild.mother);
  }
  return null;
};

const findByProp = (obj, key, value) => {
  return obj.find((item) => item[key] === value);
};

const findById = (obj, id) => {
  return obj.find((item) => item.id === id);
};

const isRoot = (item) => {
  return !item.mother && !item.father;
};

const generateMarriges = (tree, id) => {
  const marriagesObj = {};
  if (getChilds(tree, id)) {
    marriagesObj.children = getChilds(tree, id);
  }
  if (getPartner(tree, id)) {
    marriagesObj.spouse = getPartner(tree, id);
  }
  // console.log(marriagesObj);
  const marriagesArray = Object.keys(marriagesObj).length > 0 ? [marriagesObj] : [];
  return marriagesArray.length > 0 ? marriagesArray : null;
};

const setMariges = (initTree, rootObj) => {
  const recursiveSet = (currentObj) => {
    const marriages = generateMarriges(initTree, currentObj.id);
    currentObj.marriages = marriages;
    console.log(currentObj);
    if (
      currentObj.marriages &&
      currentObj.marriages[0] &&
      currentObj.marriages[0].children
    ) {
      currentObj.marriages[0].children.forEach((child) => {
        recursiveSet(child);
      });
    }
  };
  recursiveSet(rootObj);
  return rootObj;
};

function transformItem(item) {
  const scheme = {
    name: `${item.name} ${item.surname}`,
    id: item.id,
    father: item.father,
    mother: item.mother,
    extra: {
      userpic: item.picture.url,
    },
  };

  const nestedItem = {};

  for (const key in scheme) {
    if (typeof scheme[key] !== 'undefined') {
      nestedItem[key] = scheme[key];
    }
  }

  return nestedItem;
}

// add root elements
// root elements requirements:
// 1. have not parent &
// 2. mention as father &
// 3. have not pair

export const buildTree = (tree) => {
  const filterKeys = tree.map((item) => transformItem(item));
  const rootItems = filterKeys.filter(
    (item) => isRoot(item) && isFather(filterKeys, item.id)
  );
  const buildedtree = rootItems.map((item) => {
    const setMr =     setMariges(filterKeys, item);
    console.log(setMr);
    return setMr;
  });
  return buildedtree;
};
