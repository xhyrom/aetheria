// Modifies the recipes for buttons to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  ["gtceu:rubber_button", "gtceu:treated_wood_button"].forEach((d) =>
    gregifyButtonRecipe(event, "<identifier>:shapeless/<name>", d)
  );
});
