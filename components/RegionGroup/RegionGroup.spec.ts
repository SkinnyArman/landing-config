import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import RegionGroup from "./RegionGroup.vue";
import { Region } from "models/Region";
import { isLocationDisabled, isLocationActive } from "./utils";

describe("Region Group Logic", () => {
  it("returns true when location is disabled", () => {
    expect(
      isLocationDisabled(
        new Region("ssda", "asd", "sd", true, "sdsd", "ff", "sds", 2, false)
      )
    ).toEqual(true);
  });

  it("returns true when two locations' id are the same", () => {
    const randomRegion = new Region(
      "iran",
      "asd",
      "Asd",
      false,
      "sd",
      "sds",
      "2.2",
      2,
      false
    );
    expect(
      isLocationActive(
        randomRegion,
        new Region("iran", "Sdd", "scc", false, "fvf", "dfm", "3.2", 1, false)
      )
    ).toEqual(true);
  });
});

describe("RegionGroup", () => {
  it("emits an region object when clicked on a region", async () => {
    const rendered = render(RegionGroup, {
      props: {
        defaultLocation: {
          id: "DTX",
          configId: null,
          abbr: "dtx",
          disabled: false,
        },
        locationList: [
          {
            id: "DTX",
            name: "US, Dallas, Texas",
            abbr: "dtx",
            image: "someurl",
            disabled: false,
            configId: null,
            hourlyPrice: "0.0",
            monthlyPrice: 0,
            isZyrrus: true,
          },
        ],
      },
    });
    const regionCard = await screen.findByText("US, Dallas, Texas");
    regionCard.click();
    const { emitted } = rendered;
    expect(emitted().region[0]).toEqual([
      new Region(
        "DTX",
        null,
        "dtx",
        false,
        "US, Dallas, Texas",
        "someurl",
        "0.0",
        0,
        true
      ),
    ]);
  });

  it("doesnt emit anything when the clicked region is disabled", async () => {
    const rendered = render(RegionGroup, {
      props: {
        defaultLocation: {
          id: "DTX",
          configId: null,
          abbr: "dtx",
          disabled: false,
        },
        locationList: [
          {
            id: "DTX",
            name: "US, Dallas, Texas",
            abbr: "dtx",
            image: "someurl",
            disabled: false,
            configId: null,
            hourlyPrice: "0.0",
            monthlyPrice: 0,
            quarterlyPrice: 0,
            annuallyPrice: 0,
            semiannuallyPrice: 0,
            bienniallyPrice: 0,
            isZyrrus: true,
            isPremium: true,
          },
          {
            id: "DE-Frankfurt",
            name: "DE, Frankfurt",
            abbr: "DE-Frankfurt",
            image: "https://dev3.cloudzy.com/api/static/region/Germany.svg",
            disabled: true,
            configId: null,
            hourlyPrice: "0.0",
            monthlyPrice: 0,
            quarterlyPrice: 0,
            annuallyPrice: 0,
            semiannuallyPrice: 0,
            bienniallyPrice: 0,
            isZyrrus: true,
            isPremium: true,
          },
        ],
      },
    });
    const germanyCard = await screen.findByText("DE, Frankfurt");
    germanyCard.click();
    const { emitted } = rendered;
    expect(emitted().region).toBeUndefined();
  });
});
