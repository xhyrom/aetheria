const AD_ASTRA_REMOVED_PLATES = ["steel"];

const AD_ASTRA_REMOVED_RODS = ["steel"];

const AD_ASTRA_REMOVED_NUGGETS = ["steel"];

JEIEvents.hideItems((event) => {
  AD_ASTRA_REMOVED_PLATES.forEach((metal) => {
    event.hide(`ad_astra:${metal}_plate`);
  });

  AD_ASTRA_REMOVED_RODS.forEach((metal) => {
    event.hide(`ad_astra:${metal}_rod`);
  });

  AD_ASTRA_REMOVED_NUGGETS.forEach((metal) => {
    event.hide(`ad_astra:${metal}_nugget`);
  });
});
