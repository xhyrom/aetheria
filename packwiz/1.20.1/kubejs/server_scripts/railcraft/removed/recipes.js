ServerEvents.recipes((event) => {
  const METALS = [
    "iron",
    "copper",
    "gold",
    "lead",
    "nickel",
    "silver",
    "tin",
    "zinc",
    "steel",
    "brass",
    "bronze",
    "invar",
  ];

  METALS.forEach((metal) => {
    // Remove plate recipes
    event.remove({ id: `railcraft:rolling/${metal}_plate` });

    // Remove gear recipes
    event.remove({
      id: `railcraft:${metal}_gear`,
    });

    // Remove nugget recipes
    event.remove({
      id: `railcraft:${metal}_nugget`,
    });
  });

  event.remove({ id: "railcraft:bushing_gear_brass" });
  event.remove({ id: "railcraft:bushing_gear_bronze" });
  event.remove({ id: "railcraft:rolling/bushing_gear_brass" });
  event.remove({ id: "railcraft:rolling/bushing_gear_bronze" });
});
