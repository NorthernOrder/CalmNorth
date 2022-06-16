onEvent("worldgen.remove", (event) => {
    event.removeFeatureById('underground_ores', 'galosphere:ore_silver_small');
    event.removeFeatureById('underground_ores', 'galosphere:ore_silver_middle');
    event.removeFeatureById('underground_ores', 'mekanism:ore_tin_small');
    event.removeFeatureById('underground_ores', 'mekanism:ore_tin_large');
    event.removeFeatureById('underground_ores', 'mekanism:ore_uranium_small');
    event.removeFeatureById('underground_ores', 'mekanism:ore_uranium_buried');
    event.removeFeatureById('underground_ores', 'mekanism:ore_lead_normal');
    event.removeFeatureById('underground_ores', 'thermal:tin_ore');
    event.removeFeatureById('underground_ores', 'thermal:lead_ore');
});
