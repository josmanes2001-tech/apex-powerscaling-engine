import fs from 'fs';

const content = `/**
 * APEX Engine — Form Scaling Configuration
 * Universe-indexed aliases and explicit multipliers for form resolution.
 */

export const FORM_SCALING_CONFIG = {
  "dragon-ball": {
    "super_saiyan": {
      aliases: ["ss", "ssj", "ssj1", "ss1", "super saiyan", "super saiyajin", "super saiyan 1", "super saiyajin 1"],
      apexKiMultiplier: 50,
      tierBoost: 0
    },
    "super_saiyan_grade_2": {
      aliases: ["super vegeta", "ssj grado 2", "super saiyan grade 2", "super saiyajin segundo grado"],
      apexKiMultiplier: 65,
      tierBoost: 0
    },
    "super_saiyan_grade_3": {
      aliases: ["ultra trunks", "ssj grado 3", "super saiyan grade 3", "super saiyajin ultra"],
      apexKiMultiplier: 85,
      tierBoost: 0
    },
    "super_saiyan_2": {
      aliases: ["ss2", "ssj2", "super saiyan 2", "super saiyajin 2"],
      apexKiMultiplier: 100,
      tierBoost: 1
    },
    "super_saiyan_3": {
      aliases: ["ss3", "ssj3", "super saiyan 3", "super saiyajin 3"],
      apexKiMultiplier: 400,
      tierBoost: 1
    },
    "super_saiyan_4": {
      aliases: ["ss4", "ssj4", "super saiyan 4", "super saiyajin 4", "super saiyan 4 limit breaker", "ssj4 limit breaker"],
      apexKiMultiplier: 4000,
      tierBoost: 2
    },
    "super_saiyan_god": {
      aliases: ["ssg", "ssj god", "super saiyan god", "super saiyajin god", "dios super saiyan", "super saiyan rojo"],
      apexKiMultiplier: 20000,
      tierBoost: 3
    },
    "super_saiyan_blue": {
      aliases: ["ssb", "ssj blue", "super saiyan blue", "super saiyajin blue", "super saiyan god super saiyan", "ssgss"],
      apexKiMultiplier: 50000,
      tierBoost: 4
    },
    "ssb_kaioken": {
      aliases: ["ssb kaioken", "super saiyan blue kaioken", "ssb kkx10", "ssb kkx20", "super saiyan blue kaioken x20", "ssb kaio-ken"],
      apexKiMultiplier: 1000000,
      tierBoost: 4
    },
    "ssb_evolution": {
      aliases: ["ssb evolution", "super saiyan blue evolution", "ssb evolucion", "ssb shinka", "super saiyan blue shinka"],
      apexKiMultiplier: 1000000,
      tierBoost: 4
    },
    "ultra_instinct_sign": {
      aliases: ["ultra instinto senal", "ultra instinto señal", "ui sign", "migatte no gokui omen", "doctrina egoista senal"],
      apexKiMultiplier: 5000000,
      tierBoost: 5
    },
    "ultra_instinct_mastered": {
      aliases: ["ultra instinto dominado", "ultra instinto perfecto", "ui mastered", "migatte no gokui", "doctrina egoista completa", "mui", "ultra instinto completo"],
      apexKiMultiplier: 25000000,
      tierBoost: 6
    },
    "ultra_ego": {
      aliases: ["ultra ego", "wagamama no gokui", "megainstinto", "ultra ego vegeta"],
      apexKiMultiplier: 25000000,
      tierBoost: 6
    },
    "oozaru": {
      aliases: ["oozaru", "ohzaru", "mono gigante", "great ape"],
      apexKiMultiplier: 10,
      tierBoost: 0
    },
    "golden_oozaru": {
      aliases: ["golden oozaru", "mono gigante dorado", "golden great ape"],
      apexKiMultiplier: 500,
      tierBoost: 1
    },
    "kaioken_x2": {
      aliases: ["kaioken x2", "kaio-ken x2"],
      apexKiMultiplier: 2,
      tierBoost: 0
    },
    "kaioken_x3": {
      aliases: ["kaioken x3", "kaio-ken x3"],
      apexKiMultiplier: 3,
      tierBoost: 0
    },
    "kaioken_x4": {
      aliases: ["kaioken x4", "kaio-ken x4"],
      apexKiMultiplier: 4,
      tierBoost: 0
    },
    "kaioken_x10": {
      aliases: ["kaioken x10", "kaio-ken x10"],
      apexKiMultiplier: 10,
      tierBoost: 0
    },
    "kaioken_x20": {
      aliases: ["kaioken x20", "kaio-ken x20"],
      apexKiMultiplier: 20,
      tierBoost: 0
    },
    "potential_unleashed": {
      aliases: ["estado definitivo", "mystic", "mystic gohan", "ultimate gohan", "potencial desbloqueado", "gohan definitivo"],
      apexKiMultiplier: 500,
      tierBoost: 1
    },
    "beast_gohan": {
      aliases: ["gohan beast", "modo bestia", "beast", "bestia", "gohan bestia"],
      apexKiMultiplier: 30000000,
      tierBoost: 6
    },
    "orange_piccolo": {
      aliases: ["orange piccolo", "piccolo naranja", "forma naranja"],
      apexKiMultiplier: 20000000,
      tierBoost: 5
    },
    "golden_frieza": {
      aliases: ["golden frieza", "golden freezer", "freezer dorado", "frieza dorado"],
      apexKiMultiplier: 50000,
      tierBoost: 4
    },
    "black_frieza": {
      aliases: ["black frieza", "black freezer", "freezer negro", "frieza negro"],
      apexKiMultiplier: 50000000,
      tierBoost: 6
    },
    "cooler_fifth_form": {
      aliases: ["quinta forma", "forma final cooler", "cooler forma final", "5th form"],
      apexKiMultiplier: 20,
      tierBoost: 0
    },
    "metal_cooler": {
      aliases: ["metal cooler", "meta cooler", "cuerpo de aleacion", "meta-cooler"],
      apexKiMultiplier: 60,
      tierBoost: 1
    },
    "king_cold_form": {
      aliases: ["rey cold forma final", "king cold 100%", "rey cold 100%", "king cold super", "king cold forma 2", "king cold forma 3"],
      apexKiMultiplier: 15,
      tierBoost: 0
    },
    "legendary_super_saiyan": {
      aliases: ["lssj", "super saiyan legendario", "ssj legendario", "broly berserk", "ssj berserk", "super saiyajin legendario"],
      apexKiMultiplier: 1500,
      tierBoost: 2
    },
    "broly_full_power": {
      aliases: ["broly full power", "super saiyan full power (broly)", "ssj fp broly", "broly fp"],
      apexKiMultiplier: 40000000,
      tierBoost: 6
    },
    "cell_semi_perfect": {
      aliases: ["cell semi-perfecto", "cell segunda forma", "semi-perfect cell"],
      apexKiMultiplier: 4,
      tierBoost: 0
    },
    "cell_perfect": {
      aliases: ["cell perfecto", "forma perfecta cell", "perfect cell"],
      apexKiMultiplier: 20,
      tierBoost: 1
    },
    "cell_super_perfect": {
      aliases: ["super perfect cell", "cell super perfecto", "super cell", "cell renacido"],
      apexKiMultiplier: 100,
      tierBoost: 1
    },
    "cell_max": {
      aliases: ["cell max", "cell max desatado"],
      apexKiMultiplier: 25000000,
      tierBoost: 6
    },
    "super_buu": {
      aliases: ["super buu", "majin buu maldad pura", "evil buu"],
      apexKiMultiplier: 5,
      tierBoost: 0
    },
    "buutenks": {
      aliases: ["buutenks", "buu gotenks", "super buu (gotenks absorbido)"],
      apexKiMultiplier: 25,
      tierBoost: 1
    },
    "buuhan": {
      aliases: ["buuhan", "buu gohan", "super buu (gohan absorbido)"],
      apexKiMultiplier: 60,
      tierBoost: 1
    },
    "kid_buu": {
      aliases: ["kid buu", "buu pequeno", "buu puro", "pure buu"],
      apexKiMultiplier: 4,
      tierBoost: 0
    }
  }
};
`;

fs.writeFileSync('src/data/formScalingConfig.js', content, 'utf8');
console.log('formScalingConfig.js created!');
