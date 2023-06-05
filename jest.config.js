module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    /**
     * Note: this only exposes the `@core/index.ts`
     * which effectively prohibits deep imports from `@core`
     */
    "@core": "<rootDir>/src/@core"
  },
};
