// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "ad_astra:aeronos_door",
    "ad_astra:strophar_door",
    "ad_astra:glacian_door",
  ].forEach((d) => gregifyDoorRecipe(event, "<identifier>:<name>", d));

  gregifyDoorRecipe(event, "<identifier>:<name>", "ad_astra:steel_door", [
    "gtceu:steel_plate",
  ]);
});
