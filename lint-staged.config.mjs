/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{ts,js}': ['pnpm run lint'],
};
