class SchematicDetails {
    constructor(id, name, description, videolink, downloadlink, thumbnail) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.videolink = videolink;
        this.downloadlink = downloadlink;
        this.thumbnail = thumbnail;
    }
}

var schematics =
    [
        new SchematicDetails(
            "azalea-tree",
            "Azalea Tree Farm",
            "An azalea tree farm that doesn't have the best rates but does the job. No detection so cycles are fixed and slow and waste bonemeal.",
            "oqbJdWznr_8",
            "sch-azalea-tree/azalea_tree_farm.litematic"),

        new SchematicDetails(
            "end-wither-rose",
            "Simple End-Based Wither Rose Farm",
            "A wither rose farm based in the end that can produce about 20k wither roses per hour with two double speed item sorters by ilmango. Uses the movable wither cage by cubicmetre for build simplicity. Uses a trick pioneered by me where the side heads are embedded in blocks so that they don't cause any damage to the farm and can kill mobs easily.",
            "OFseeB2fWIs",
            "sch-end-wither-rose/end_wither_rose_farm.litematic"),

        new SchematicDetails(
            "simple-glow-squid",
            "Simple Glow Squid Farm",
            "A simple glow squid farm that produces 3k glow ink sacs per hour, by periodically triggering a waterlogged trapdoor to drop spawned glow squid to their deaths on soul campfires.",
            "8OXARJ3ryVw",
            "sch-glowsquid/glow_squid_farm.litematic"),

        new SchematicDetails(
            "simple-large-glow-squid",
            "Large Version of Simple Glow Squid Farm",
            "A larger version of the simple glow squid farm that produces 8k per hour using the same concept.",
            "V2lVzLhcFpU",
            "sch-glowsquid-large/glow_squid_farm_large.litematic"),

        new SchematicDetails(
            "portal-glow-squid",
            "Portal Glow Squid Farm",
            "A portal-based glow squid farm, producing 25k/h or 33k/h with looting 3, relying on glow squid random pathfinding to eliminate lifetime spent on death animation and fall distance.",
            "V2lVzLhcFpU",
            "sch-glowsquid-2d/2d_glow_squid_farm_overworld.litematic"),

        new SchematicDetails(
            "light-harvester",
            "\"The Light Harvester\" - A Fast Portal-Based Glow Squid Farm",
            "A very fast portal-based glow squid farm producing 124k/h or 223k/h if using looting 3 that works by pushing glow squid into a portal with pistons and waiting for the water to flow back in before repeating the process.",
            "xrTwgurunjg",
            "sch-light-harvester/light_harvester_glow_squid_farm_overworld.litematic"),

        new SchematicDetails(
            "light-harvester-ghast",
            "\"The Light Harvester\" - lag-friendly version",
            "A lag friendly version of the original Light Havester that only produces 90k or 160k with looting 3, however is more lag-friendly because less water and redstone updates but is harder to build because of the requirement of ghasts.",
            "xrTwgurunjg",
            "sch-ghast-glow-squid-farm/ghast_shoving_glow_squid_farm.litematic"),

        new SchematicDetails(
            "sinking-hoglin",
            "Sinking Hoglin Farm",
            "One of the fastest 1-dimensional hoglin farms that doesn't use any pistons (e.g. downaccel). Uses a trick pioneered by me where mobs spawn on soul sand and immediately sink into the block, which causes their hitbox to intersect lava, which kills them within 5 seconds.",
            "BIWz0tf7a_0",
            "sch-sinking-hoglin-farm/sinking_hoglin_farm.litematic"),

        new SchematicDetails(
            "trident-1.18",
            "Large River Trident Farm - 1.18+",
            "A bubble column based farm that takes advantage of large \"lakes\" that are actually river biomes that can generate with 1.18 terrain generation.",
            "Pk9FUXtf2BE",
            "sch-trident1.18/trident_farm_large_river.litematic"),

        new SchematicDetails(
            "spider-rose-bugged",
            "Spider Farm using Wither Rose Spawning Bug",
            "An efficient spider farm making use of a spawning oversight, producing 22k string per hour. Spawning only checks blocks in the block the mob is spawning in, but not the ones to the side, so wither roses can be placed there.",
            "hhu03zZaKNU",
            "sch-wither-rose-spider/wither_rose_spider_farm.litematic"),

        new SchematicDetails(
            "turtle-egg-wireless-receiver",
            "Receiver Circuit for Turtle Egg Wireless Redstone",
            "The receiver circuit for a wireless redstone signal sender using turtle eggs, that can send a signal from x0 z0 to anywhere in the world. Works by detecting when a zombie stops pathfinding towards a turtle egg, which happens when a wooden button is pressed and its head extends over the turtle egg for just the right duration to pause zombie pathfinding.",
            "OHP2llzKgQM",
            "sch-turtle-egg-wireless/turtle_egg_wireless_redstone.litematic",
            "turtle_egg_wireless_redstone"),

        new SchematicDetails(
            "sinking-magma-cube",
            "Sinking Magma Cube Farm",
            "A farm that uses soul sand to make magma cubes immediately sink into the block that they spawn on and intersect wither roses.",
            "dowvmCzSPOM",
            "sch-sinking-magma-cube/sinking_magma_cube_farm.litematic",
            "sinking_magma_cube"),
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
        document.getElementById("download").href = "https://github.com/Redstonia2020/MinecraftDownloads/releases/download/" + schematicInfo.downloadlink;
        if (schematicInfo.thumbnail) {
            document.getElementById("background").style.backgroundImage = "url(\"images/thumbnails/" + schematicInfo.thumbnail + ".png\")";
        }
        document.getElementById("showcase").src = "https://www.youtube.com/embed/" + schematicInfo.videolink;
    }
}