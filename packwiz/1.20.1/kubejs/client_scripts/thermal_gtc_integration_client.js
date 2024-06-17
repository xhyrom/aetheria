const THERMAL_REMOVED_PLATES = [
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

const THERMAL_REMOVED_GEARS = [
  "tin",
  "lead",
  "silver",
  //"nickel",
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

const THERMAL_REMOVED_NUGGETS = [
  "tin",
  "lead",
  "silver",
  "nickel",
  "bronze",
  "electrum",
  "invar",
  "copper",
];

JEIEvents.hideItems((event) => {
  THERMAL_REMOVED_PLATES.forEach((metal) => {
    event.hide(`thermal:${metal}_plate`);
  });

  THERMAL_REMOVED_GEARS.forEach((metal) => {
    event.hide(`thermal:${metal}_gear`);
  });

  THERMAL_REMOVED_NUGGETS.forEach((metal) => {
    event.hide(`thermal:${metal}_nugget`);
  });
});
