export const toastAction = value => (
  {
    type: 'TOAST',
    payload: value
  }
);
export const alertAction = value => (
  {
    type: 'ALERT',
    payload: value
  }
);
export const userAction = value => (
  {
    type: 'USER',
    payload: value
  }
);
export const userOneAction = (index, value)=> (
  {
    type: 'USERONE',
    key: index,
    payload: value
  }
);

