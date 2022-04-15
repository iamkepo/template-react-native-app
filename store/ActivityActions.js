export const setStateAction = (index, value) => (
  {
    type: 'STATE',
    index: index,
    value: value
  }
);
export const userAction = index => (
  {
    type: 'USER',
    payload: index
  }
);

