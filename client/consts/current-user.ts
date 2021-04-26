export type CURRENT_USER_ID_TYPE = string;
let CURRENT_USER_ID = '' as CURRENT_USER_ID_TYPE;

export const getCurrentUserId = () => CURRENT_USER_ID;
export const setCurrentUserId = (id: CURRENT_USER_ID_TYPE) => {
  CURRENT_USER_ID = id;
}