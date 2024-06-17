function idToType(id) {
  return id.split(":")[1].split("_").slice(0, -1).join("_");
}

function optionalNullChaining(obj, keys) {
  for (const key of keys) {
    if (obj[key]) return obj[key];
  }
}

function gregifyBoatRecipe(event, recipePattern, id) {
  const [identifier, name] = id.split(":");
  const type = idToType(id);

  event.remove({
    id: recipePattern
      .replace("<identifier>", identifier)
      .replace("<name>", name)
      .replace("<type>", type),
  });

  event.shaped(Item.of(id, 1), ["WHW", "WKW", "SSS"], {
    W: `${identifier}:${type}_planks`,
    H: "minecraft:wooden_shovel",
    K: "#forge:tools/knives",
    S: `${identifier}:${identifier === "quark" ? `${type}_planks` : type}_slab`,
  });
}

function gregifyDoorRecipe(event, recipePattern, id, materials) {
  const [identifier, name] = id.split(":");
  const type = idToType(id);

  event.remove({
    id: recipePattern
      .replace("<identifier>", identifier)
      .replace("<name>", name)
      .replace("<type>", type),
  });

  if (!materials) materials = [];
  if (materials.length === 0) materials.push(`${identifier}:${type}_planks`);

  event.shaped(Item.of(id, 1), ["WTS", "GRC", "OPB"], {
    W: materials[0],
    G: optionalNullChaining(materials, [1, 0]),
    O: optionalNullChaining(materials, [2, 1, 0]),
    P: optionalNullChaining(materials, [3, 1, 0]),
    T: `${identifier}:${type}_trapdoor`,
    S: "#forge:tools/screwdrivers",
    R: "gtceu:iron_ring",
    C: "gtceu:iron_screw",
    B: "#forge:tools/saws",
  });
}
