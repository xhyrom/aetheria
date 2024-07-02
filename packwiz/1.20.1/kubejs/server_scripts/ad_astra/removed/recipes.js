ServerEvents.recipes((event) => {
  const REMOVED_PLATE_RECIPES = ["steel", "iron"];

  const REMOVED_ROD_RECIPES = ["steel", "iron"];

  const REMOVED_NUGGET_RECIPES = ["steel"];

  REMOVED_PLATE_RECIPES.forEach((metal) => {
    event.remove({
      id: `ad_astra:compressing/${metal}_plate_from_compressing_${metal}_ingot`,
    });
    event.remove({
      id: `ad_astra:compressing/${metal}_plate_from_compressing_${metal}_ingots`,
    });

    event.remove({
      id: `ad_astra:compressing/${metal}_plate_from_compressing_${metal}_block`,
    });
    event.remove({
      id: `ad_astra:compressing/${metal}_plate_from_compressing_${metal}_blocks`,
    });
  });

  REMOVED_ROD_RECIPES.forEach((metal) => {
    event.remove({
      id: `ad_astra:${metal}_rod`,
    });
  });

  REMOVED_NUGGET_RECIPES.forEach((metal) => {
    event.remove({
      id: `ad_astra:${metal}_nugget`,
    });
  });
});
