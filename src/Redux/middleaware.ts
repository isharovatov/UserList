import {actionInterfece} from '../types/ContainerTypes'

export const logger = () => {
  return (next: any) => (action: actionInterfece) => {
    if (action.type === 'delete_user') console.log(action.payload);
    return next(action)
  };
};