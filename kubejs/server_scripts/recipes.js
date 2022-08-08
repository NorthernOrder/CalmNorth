onEvent("recipes", (event) => {
  event.remove({ output: "ae2wtlib:infinity_booster_card" });

  event.remove({ output: "moreminecarts:chunk_loader" });

  // prettier-ignore
  event.shaped("moreminecarts:chunk_loader", [
    "SOG",
    "OEO",
    "GOS",
  ], {
    O: "minecraft:obsidian",
    G: "minecraft:glass",
    E: "minecraft:emerald_block",
    S: "moreminecarts:silica_steel_block",
  });
});
