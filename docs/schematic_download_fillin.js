class SchematicDetails {
    constructor(id, name, description, videolink, downloadlink) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.videolink = videolink;
        this.downloadlink = downloadlink;
    }
}

var schematics =
    [
        new SchematicDetails(
            "azalea-tree",
            "Azalea Tree Farm",
            "An azalea tree farm.",
            "https://youtu.be/oqbJdWznr_8",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-azalea-tree/azalea_tree_farm.litematic"),

        new SchematicDetails(
            "end-wither-rose",
            "Wither Rose Farm",
            "A wither rose farm based in the end.",
            "https://youtu.be/OFseeB2fWIs",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-end-wither-rose/end_wither_rose_farm.litematic"),

        new SchematicDetails(
            "simple-glow-squid",
            "Simple Glow Squid Farm",
            "A simple glow squid farm that produces 3k glow ink sacs per hour.",
            "https://youtu.be/8OXARJ3ryVw",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-glowsquid/glow_squid_farm.litematic"),

        new SchematicDetails(
            "simple-large-glow-squid",
            "Large Version of Simple Glow Squid Farm",
            "A larger version of the simple glow squid farm that produces 8k per hour using the same concept.",
            "https://youtu.be/V2lVzLhcFpU",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-glowsquid-large/glow_squid_farm_large.litematic"),

        new SchematicDetails(
            "portal-glow-squid",
            "Portal Glow Squid Farm",
            "A portal-based glow squid farm, producing 25k/h or 33k/h with looting 3.",
            "https://youtu.be/V2lVzLhcFpU",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-glowsquid-2d/2d_glow_squid_farm_overworld.litematic"),

        new SchematicDetails(
            "light-harvester",
            "\"The Light Harvester\" - A Fast Portal-Based Glow Squid Farm",
            "A very fast portal-based glow squid farm producing 124k/h or 223k/h if using looting 3.",
            "https://youtu.be/xrTwgurunjg",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-light-harvester/light_harvester_glow_squid_farm_overworld.litematic"),

        new SchematicDetails(
            "light-harvester-ghast",
            "\"The Light Harvester\" - lag-friendly version",
            "A lag friendly version of the original Light Havester that only produces 90k or 160k with looting 3, however is more lag-friendly because less water and redstone updates.",
            "https://youtu.be/xrTwgurunjg",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-ghast-glow-squid-farm/ghast_shoving_glow_squid_farm.litematic"),

        new SchematicDetails(
            "sinking-hoglin",
            "Sinking Hoglin Farm",
            "One of the fastest 1-dimensional hoglin farms that doesn't use any pistons (e.g. downaccel).",
            "https://youtu.be/BIWz0tf7a_0",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-sinking-hoglin-farm/sinking_hoglin_farm.litematic"),

        new SchematicDetails(
            "trident-1.18",
            "Large River Trident Farm - 1.18+",
            "A farm that takes advantage of large \"lakes\" that are actually river biomes that can generate with 1.18 terrain generation.",
            "https://youtu.be/Pk9FUXtf2BE",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-trident1.18/trident_farm_large_river.litematic"),

        new SchematicDetails(
            "spider-rose-bugged",
            "Spider Farm Using Wither Roses Spawning Bug",
            "An efficient spider farm making use of a spawning oversight, producing 22k string per hour.",
            "https://youtu.be/hhu03zZaKNU",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-wither-rose-spider/wither_rose_spider_farm.litematic"),

        new SchematicDetails(
            "turtle-egg-wireless-receiver",
            "Receiver Circuit for Turtle Egg Wireless Redstone",
            "The receiver circuit for a wireless redstone signal sender using turtle eggs, that can send a signal from x0 z0 to anywhere in the world.",
            "https://youtu.be/OHP2llzKgQM",
            "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/sch-turtle-egg-wireless/turtle_egg_wireless_redstone.litematic"),
    ];

window.onload = function () {
    var identifier = window.location.search.replace("?", "");
    var schematicInfo;

    for (var i = 0; i < schematics.length; i++) {
        if (schematics[i].id == identifier) {
            schematicInfo = schematics[i];
            break;
        }
    }

    if (!schematicInfo) {
        alert("that identifier does not correspond to any schematic");
    }

    else {
        console.log(schematicInfo);
        document.title = schematicInfo.name + " | Schematics";
        document.getElementById("title").innerHTML = schematicInfo.name;
        document.getElementById("description").innerHTML = schematicInfo.description;
        document.getElementById("download").href = schematicInfo.downloadlink;
    }
}