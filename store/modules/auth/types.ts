export enum Types {
  // Getters (GET*)
  // [CONTEXT]_[ACTION]_[PROPERTY]
  // Mutations (SET*, ADD*, REMOVE*)
  // [CONTEXT]_[ACTION]_[PROPERTY]
  AUTH_SET_USER = 'AUTH_SET_USER',
  // Actions (FETCH*, CREATE*, UPDATE*, DELETE*)
  // [CONTEXT]_[ACTION]_[PROPERTY]_[STATUS]
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGOUT = 'AUTH_LOGOUT'
}
