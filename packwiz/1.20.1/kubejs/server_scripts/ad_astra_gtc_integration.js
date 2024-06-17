ServerEvents.recipes((event) => {
  const AD_ASTRA_REMOVED_PLATE_RECIPES = ["steel", "iron"];

  const AD_ASTRA_REMOVED_ROD_RECIPES = ["steel"];

  const AD_ASTRA_REMOVED_NUGGET_RECIPES = ["steel"];

  // Remove Ad Astra recipes for plates
  AD_ASTRA_REMOVED_PLATE_RECIPES.forEach((metal) => {
    event.remove({
      id: `ad_astra:compressing/${metal}_plate_from_compressing_${metal}_ingots`,
    });
    event.remove({
      id: `ad_astra:compressing/${metal}_plate_from_compressing_${metal}_blocks`,
    });
  });

  // Remove Ad Astra recipes for gears
  AD_ASTRA_REMOVED_ROD_RECIPES.forEach((metal) => {
    event.remove({
      id: `ad_astra:${metal}_rod`,
    });
  });

  // Remove Ad Astra recipes for nuggets
  AD_ASTRA_REMOVED_NUGGET_RECIPES.forEach((metal) => {
    event.remove({
      id: `ad_astra:${metal}_nugget`,
    });
  });
});
