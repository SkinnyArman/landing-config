import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { moneyFormat } from "./utils";

describe("VpsSummary logic", () => {
  it("turns a number to money format", async () => {
    expect(moneyFormat(0)).toEqual("0.00");
    expect(moneyFormat(0.0)).toEqual("0.00");
    expect(moneyFormat(1.2)).toEqual("1.20");
    expect(moneyFormat(100.28397192)).toEqual("100.28");
  });
});
