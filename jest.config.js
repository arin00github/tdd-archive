/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest", //TypeScript 코드를 Jest가 이해할 수 있는 JavaScript로 컴파일하는 역할을 담당
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js", "msw"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
};
