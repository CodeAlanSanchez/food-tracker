export const addLog = (log) => (dispatch) => {
  try {
    dispatch(log);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateLog = (log) => (dispatch) => {
  try {
    dispatch(log);
  } catch (error) {
    console.error(error.message);
  }
};
