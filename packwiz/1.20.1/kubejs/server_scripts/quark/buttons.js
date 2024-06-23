// Modifies the recipes for buttons to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "quark:ancient_button",
    "quark:azalea_button",
    "quark:blossom_button",
  ].forEach((d) =>
    gregifyButtonRecipe(event, "quark:world/crafting/woodsets/<type>/button", d)
  );
});
