onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.widgetTexture = "calmnorth:textures/widgets.png";
    ui.minecraftPanorama();

    console.info(ui.width);

    console.info(ui.height);

    let leftSide = ui.width / 6;
    let buttonHeight = 20;
    let space = 5;
    let buttonCount = 0;
    let halfHeight = ui.height / 2;
    let buttonXPos = leftSide - 100;
    let getButtonHeight = () => {
      return halfHeight + buttonCount++ * (space + buttonHeight);
    };

    ui.image((img) => {
      img.height = 2160;
      img.width = 300;
      img.x = 0;
      img.y = 0;
      img.texture = "calmnorth:textures/overlay.png";
    });

    // Pack Logo
    ui.image((img) => {
      img.height = 384 * 0.2;
      img.width = 384 * 0.2;
      img.x = leftSide - img.width / 2;
      img.y = ui.height / 4 - img.height / 2;
      img.texture = "calmnorth:textures/logo.png";
    });

    // Pack Name
    ui.image((img) => {
      img.height = 300 * 0.2;
      img.width = 800 * 0.2;
      img.x = leftSide - img.width / 2;
      img.y = ui.height / 2 - img.height * 1.4;
      img.texture = "calmnorth:textures/name.png";
    });

    // Singleplayer
    ui.button((btn) => {
      btn.name = Text.translate("menu.singleplayer");
      btn.width = 200;
      btn.x = buttonXPos;
      btn.y = getButtonHeight();
      btn.action = "minecraft:singleplayer";
      btn.shadow = false;
    });

    // Multiplayer
    ui.button((btn) => {
      btn.name = Text.translate("menu.multiplayer");
      btn.width = 200;
      btn.x = buttonXPos;
      btn.y = getButtonHeight();
      btn.action = "minecraft:multiplayer";
      btn.shadow = false;
    });

    // Mods
    ui.button((btn) => {
      btn.name = Text.translate("fml.menu.mods");
      btn.width = 200;
      btn.x = buttonXPos;
      btn.y = getButtonHeight();
      btn.action = "forge:mod_list";
      btn.shadow = false;
    });

    // Options
    ui.button((btn) => {
      btn.name = Text.translate("menu.options");
      btn.width = 200;
      btn.x = buttonXPos;
      btn.y = getButtonHeight();
      btn.action = "minecraft:options";
      btn.shadow = false;
    });

    // Quit
    ui.button((btn) => {
      btn.name = Text.of("Quit");
      btn.width = 200;
      btn.x = buttonXPos;
      btn.y = getButtonHeight();
      btn.action = "minecraft:quit";
      btn.shadow = false;
    });

    // Modpack Name & Version
    ui.label((label) => {
      label.height = 10;
      label.name = Text.of("Calm North 0.4.0").color(0x9aba9a);
      label.x = 4;
      label.y = ui.height - 31;
    });

    // Mods Loaded
    ui.label((label) => {
      label.height = 10;
      label.name = Text.of(Platform.mods.size() + " Mods Loaded").color(
        0x9aba9a
      );
      label.x = 4;
      label.y = ui.height - 21;
    });

    // MC & Forge Version
    ui.label((label) => {
      label.height = 10;
      label.name = Text.of(
        "Minecraft 1.18.2 / Forge " + Platform.getInfo("forge").version
      ).color(0x9aba9a);
      label.x = 4;
      label.y = ui.height - 11;
    });

    // Mojang Copyright
    ui.label((label) => {
      label.height = 10;
      label.name = Text.of("Copyright Mojang AB").color(0x9aba9a);
      label.x = ui.width - label.width - 4;
      label.y = ui.height - 11;
    });
  });
});
