const REMOVED_PLATES = [
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

const REMOVED_GEARS = [
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

const REMOVED_NUGGETS = [
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
  REMOVED_PLATES.forEach((metal) => {
    event.hide(`thermal:${metal}_plate`);
  });

  REMOVED_GEARS.forEach((metal) => {
    event.hide(`thermal:${metal}_gear`);
  });

  REMOVED_NUGGETS.forEach((metal) => {
    event.hide(`thermal:${metal}_nugget`);
  });
});
