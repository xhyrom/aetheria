// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "regions_unexplored:baobab_door",
    "regions_unexplored:blackwood_door",
    "regions_unexplored:blue_bioshroom_door",
    "regions_unexplored:brimwood_door",
    "regions_unexplored:cobalt_door",
    "regions_unexplored:cypress_door",
    "regions_unexplored:dead_door",
    "regions_unexplored:eucalyptus_door",
    "regions_unexplored:green_bioshroom_door",
    "regions_unexplored:joshua_door",
    "regions_unexplored:kapok_door",
    "regions_unexplored:larch_door",
    "regions_unexplored:magnolia_door",
    "regions_unexplored:maple_door",
    "regions_unexplored:mauve_door",
    "regions_unexplored:palm_door",
    "regions_unexplored:pine_door",
    "regions_unexplored:pink_bioshroom_door",
    "regions_unexplored:redwood_door",
    "regions_unexplored:socotra_door",
    "regions_unexplored:willow_door",
    "regions_unexplored:yellow_bioshroom_door",
  ].forEach((d) => gregifyDoorRecipe(event, "<identifier>:<name>", d));

  event.remove({ id: "regions_unexplored:oak_door" });
});
