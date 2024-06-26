import { describe, test, expect, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
  test("should execute logFn if provided", () => {
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
