let CURRENT_USER_ID = 'a123';
export const getCurrentUserId = () => CURRENT_USER_ID;
export const setCurrentUserId = (id: string) => {
  CURRENT_USER_ID = id;
}