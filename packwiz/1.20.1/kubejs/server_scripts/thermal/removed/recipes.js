ServerEvents.recipes((event) => {
  const REMOVED_PLATE_RECIPES = [
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "invar",
    "iron",
    "gold",
    "copper",
    "electrum",
  ];

  const REMOVED_GEAR_RECIPES = [
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "invar",
    "iron",
    "gold",
    "copper",
    "electrum",
    "lapis",
    "emerald",
    //"quartz"
  ];

  const REMOVED_NUGGET_RECIPES = [
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "electrum",
    "invar",
    "copper",
  ];

  const REMOVED_BLEND_RECIPES = ["bronze", "electrum", "invar"];
  const REMOVED_DUST_RECIPES = [
    "bronze",
    "tin",
    "lead",
    "silver",
    "electrum",
    "invar",
    "nickel",
    "ruby",
    "sapphire",
    "apatite",
    "niter",
    "lapis",
    "diamond",
    "emerald",
    "sulfur",
    "cinnabar",
  ];

  REMOVED_PLATE_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:machines/press/press_${metal}_ingot_to_plate`,
    });
  });

  REMOVED_GEAR_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:parts/${metal}_gear`,
    });

    event.remove({
      id: `thermal:machines/press/press_${metal}_ingot_to_gear`,
    });
  });

  REMOVED_NUGGET_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:storage/${metal}_nugget_from_ingot`,
    });
  });

  REMOVED_BLEND_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:${metal}_dust_2`,
    });
    event.remove({
      id: `thermal:${metal}_dust_3`,
    });
    event.remove({
      id: `thermal:${metal}_dust_4`,
    });

    event.remove({
      id: `thermal:machines/pulverizer/pulverizer_${metal}_plate_to_dust`,
    });

    event.remove({
      id: `thermal:machines/pulverizer/pulverizer_${metal}_ingot_to_dust`,
    });
  });

  REMOVED_DUST_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:machines/centrifuge/centrifuge_${metal}_dust`,
    });
    event.remove({
      id: `thermal:machines/pulverizer/pulverizer_${metal}`,
    });
    event.remove({
      id: `thermal:machines/pulverizer/pulverizer_${metal}_ore`,
    });
    event.remove({
      id: `thermal:machines/pulverizer/pulverizer_raw_${metal}`,
    });
    event.remove({
      id: `thermal:machines/pulverizer/pulverizer_${metal}_ingot_to_dust`,
    });
    event.remove({
      id: `thermal:machines/pulverizer/pulverizer_${metal}_plate_to_dust`,
    });
    event.remove({
      id: `thermal:earth_charge/${metal}_dust_from_${metal}`,
    });
  });
});
