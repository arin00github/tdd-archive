import "@testing-library/jest-dom";

import { server } from "./src/msw/server";

//antd 라이브러리 사용 때문에 설치
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
// 테스트 전 mock 서버 활성화
beforeAll(() => {
  server.listen({});
});

// mock 핸들러가 다른 테스트에 영향을 미치지 않도록 각 테스트 종료 후 핸들러를 초기화
afterEach(() => server.resetHandlers());

// 모든 테스트를 종료하면 mock 서버도 종료한다.
afterAll(() => server.close());
