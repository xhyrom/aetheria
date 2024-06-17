ServerEvents.recipes((event) => {
  const THERMAL_REMOVED_PLATE_RECIPES = [
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

  const THERMAL_REMOVED_GEAR_RECIPES = [
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

  const THERMAL_REMOVED_NUGGET_RECIPES = [
    "tin",
    "lead",
    "silver",
    "nickel",
    "bronze",
    "electrum",
    "invar",
    "copper",
  ];

  // Remove Thermal Foundation recipes for plates
  THERMAL_REMOVED_PLATE_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:machines/press/press_${metal}_ingot_to_plate`,
    });
  });

  // Remove Thermal Foundation recipes for gears
  THERMAL_REMOVED_GEAR_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:parts/${metal}_gear`,
    });
  });

  // Remove Thermal Foundation recipes for nuggets
  THERMAL_REMOVED_NUGGET_RECIPES.forEach((metal) => {
    event.remove({
      id: `thermal:storage/${metal}_nugget_from_ingot`,
    });
  });
});
