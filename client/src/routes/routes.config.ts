export const ROUTES_CONFIG = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
  },
  USERS: {
    LIST: '/users',
    PROFILE: '/profile',
    EDIT: '/users/edit',
  },
  CARDS: {
    ALL: '/cards',
    DETAIL: '/cards/:id',
  },
  ERROR: {
    NOT_FOUND: '/404',
    FORBIDDEN: '/403',
  }
} as const;


export type Routes = typeof ROUTES_CONFIG;
