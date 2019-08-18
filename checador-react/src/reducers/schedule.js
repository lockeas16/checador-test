const schedule = (state = [], action) => {
  switch (action.type) {
    case "CHECKIN":
      return state;

    case "CHECKOUT":
      return state;

    default:
      return state;
  }
};

export default schedule;
