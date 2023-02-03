export const wait = timeout => {
  return new Promise(resolve => { setTimeout(resolve, timeout); });
};

export const screen = Dimensions.get("screen");