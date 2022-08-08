onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.widgetTexture = "calmnorth:textures/widgets.png";
    ui.minecraftPanorama();

    console.info(ui.width);

    console.info(ui.height);

    let scaleW = ui.width / 640;
    let scaleH = ui.height / 360;

    let panelWidth = 250 * scaleW;

    let btnSpacing = 5;
    let btnWidth = Math.min(200 * scaleW, 200);
    let btnHeight = Math.min(20 * scaleW, 20);
    let buttonXPos = panelWidth / 2 - btnWidth / 2;

    // Panel
    ui.image((img) => {
      img.height = ui.height + 1;
      img.width = panelWidth;
      img.x = 0;
      img.y = 0;
      img.texture = "calmnorth:textures/overlay.png";
    });

    // Pack Logo
    ui.image((img) => {
      img.height = 92 * scaleW;
      img.width = 92 * scaleW;
      img.x = panelWidth / 2 - img.width / 2;
      img.y = (360 * scaleH) / 4 - img.height / 2 - 4;
      img.texture = "calmnorth:textures/logo.png";
    });

    // Pack Name
    ui.image((img) => {
      img.height = 45 * scaleW;
      img.width = 120 * scaleW;
      img.x = panelWidth / 2 - img.width / 2;
      img.y = (360 * scaleH) / 2 - img.height - 10;
      img.texture = "calmnorth:textures/name.png";
    });

    // Singleplayer
    ui.button((btn) => {
      btn.name = Text.translate("menu.singleplayer");
      btn.width = btnWidth;
      btn.height = btnHeight;
      btn.x = buttonXPos;
      btn.y = ui.height / 2;
      btn.action = "minecraft:singleplayer";
      btn.shadow = false;
    });

    // Multiplayer
    ui.button((btn) => {
      btn.name = Text.translate("menu.multiplayer");
      btn.width = btnWidth;
      btn.height = btnHeight;
      btn.x = buttonXPos;
      btn.y = ui.height / 2 + btnSpacing + btnHeight;
      btn.action = "minecraft:multiplayer";
      btn.shadow = false;
    });

    // Mods
    ui.button((btn) => {
      btn.name = Text.translate("fml.menu.mods");
      btn.width = btnWidth;
      btn.height = btnHeight;
      btn.x = buttonXPos;
      btn.y = ui.height / 2 + 2 * (btnSpacing + btnHeight);
      btn.action = "forge:mod_list";
      btn.shadow = false;
    });

    // Options
    ui.button((btn) => {
      btn.name = Text.translate("menu.options");
      btn.width = btnWidth;
      btn.height = btnHeight;
      btn.x = buttonXPos;
      btn.y = ui.height / 2 + 3 * (btnSpacing + btnHeight);
      btn.action = "minecraft:options";
      btn.shadow = false;
    });

    // Quit
    ui.button((btn) => {
      btn.name = Text.of("Quit");
      btn.width = btnWidth;
      btn.height = btnHeight;
      btn.x = buttonXPos;
      btn.y = ui.height / 2 + 4 * (btnSpacing + btnHeight);
      btn.action = "minecraft:quit";
      btn.shadow = false;
    });

    // Modpack Name & Version
    ui.label((label) => {
      label.height = 10;
      label.name = Text.of("Calm North 0.5.1.3").color(0x9aba9a);
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
