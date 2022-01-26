export const logger = () => {
  return next => action => {
    if (action.type === 'delete_user') console.log(action.payload);
    return next(action)
  };
};