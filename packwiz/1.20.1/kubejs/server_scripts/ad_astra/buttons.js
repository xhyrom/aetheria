// Modifies the recipes for buttons to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  ["ad_astra:glacian_button"].forEach((d) =>
    gregifyButtonRecipe(event, "<identifier>:<name>", d)
  );

  [
    "ad_astra:iron_plating_button",
    "ad_astra:steel_plating_button",
    "ad_astra:desh_plating_button",
    "ad_astra:ostrum_plating_button",
    "ad_astra:calorite_plating_button",
  ].forEach((d) =>
    gregifyButtonRecipe(event, "<identifier>:<name>", d, [
      `ad_astra:${idToType(d)}`,
      "#forge:tools/hammers",
    ])
  );
});
