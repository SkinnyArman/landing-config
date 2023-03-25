import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import RegionGroup from "./RegionGroup.vue";

describe("HelloWorld", () => {
  it("is a Vue instance", () => {
    render(RegionGroup, {
      props: {
        defaultLocation: {
          id: "123",
          configId: "232",
          abbr: "DTX",
          disabled: false,
        },
      },
    });
  });
});
