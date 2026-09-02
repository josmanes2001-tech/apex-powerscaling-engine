# APEX POWER SCALING ENGINE — DOSSIER INTEGRAL DEL ROSTER

> **Dossier Técnico Maestro de Auditoría, Powerscaling y Telemetría**  
> *Preparado para el Diseño y Ejecución del Prompt Narrativo y Táctico de Laguna S 2.1 (Poolside)*

---

## 1. Fuentes Analizadas y Jerarquía de Datos

| Fuente | Ruta | Tipo / Rol | Estado |
|---|---|---|---|
| **Roster Maestro Activo** | `src/data/characters.js` | Exporta `INITIAL_CHARACTERS` (821 fichas) | **Activo / Fuente Primaria** |
| **Índice Rápido APEX** | `src/data/apexRosterIndex.json` | Snapshot para carga optimizada de UI | Activo / Sincronizado |
| **Base Auditada v2** | `src/data/allAuditedCharacters.v2.json` | Consolidación de 821 fichas | Activo / Solo Lectura |
| **Configuración de Formas** | `src/data/formScalingConfig.js` | 1.522 líneas de multiplicadores y alias | Activo / Blindado |
| **Resolver de Combate** | `src/lib/combatStateResolver.js` | Prioridades P1-P7 y cálculo de APEX-Ki | Activo / Solo Lectura |
| **Sistema de Tiers** | `src/lib/apexTierSystem.js` | 51 Tiers, TIER_ORDER y Scouter Anchors | Activo / Solo Lectura |
| **Simulación Determinista** | `src/services/combatSimulationCore.js` | 4 Fases, 19 Eventos Oráculo y Logs | Activo / Solo Lectura |

---

## 2. Inventario General del Roster Activo

- **Total de Registros:** 821 personajes.
- **Total de Estados y Transformaciones Auditados:** 1366 estados.
- **Personajes con Árbol de Transformaciones:** 821 personajes.
- **Personajes con Source Ki Canónico (Dragon Ball):** 1 personajes.
- **Personajes con APEX-Ki en Runtime:** 821 personajes (100% resolubles sin NaN ni Infinity).

### Cobertura Completa por Universo

| Universo | Personajes | Sagas Registradas | Tiers Presentes |
|---|---|---|---|
| **Dragon Ball Super** | 89 | Torneo del Poder / Granolah, Granolah, Super Hero, Torneo del Poder / Saga de Moro (+ 31 más) | 2-C, 3-A, 4-B, 4-C, 9-A |
| **Dragon Ball Z** | 75 | Saga Saiyan, Saga de Namek, Juegos de Cell, Saga de Buu (+ 27 más) | 5-A, 4-B, 4-C, 5-B, 3-A |
| **Dragon Ball Multiverse (Fan-Manga)** | 64 | Torneo del Multiverso / Universo 16, Torneo del Multiverso / Rebelión de Babidi, Torneo del Multiverso / Universo 4, Torneo del Multiverso / Universo 7 (+ 27 más) | 3-A, 3-C, 4-A, 4-B, 4-C |
| **Jujutsu Kaisen** | 49 | Incidente de Shibuya / Batalla de Shinjuku, Era Heian / Batalla de Shinjuku, Jujutsu Kaisen 0 / Batalla de Shinjuku, Preparación Perfecta / Batalla de Shinjuku (+ 23 más) | 7-A, 8-A, 7-B, 8-B, 9-A |
| **Hunter x Hunter** | 48 | Saga de las Hormigas Quimera, Saga de las Hormigas Quimera / Elecciones, Ciudad Yorkshin / Guerra de Sucesión, Arena del Cielo / Muerte y Resurrección Post-Chrollo (+ 23 más) | 7-B, 8-A, 7-A, 8-B, 8-C |
| **JoJo's Bizarre Adventure** | 42 | Vento Aureo, Stone Ocean, Stardust Crusaders / Diamond is Unbreakable / Stone Ocean, Stardust Crusaders (+ 9 más) | Tier 8-C Físico | Tier 2-C Hax Causal / Trascendental, Tier 8-C Físico | Tier 2-C a 2-A Nivel Multiversal (Reinicio Cósmico), 8-C, Tier 8-C Físico | Tier 2-C Hax Temporal, Tier 8-C Físico | Tier 2-C a 2-A Hax del Giro Infinito |
| **DC Comics** | 40 | Post-Crisis / Rebirth, Liga de la Justicia / Batman Endgame, Flashpoint / Crisis en Tierras Infinitas, Crisis Final / Guerra de Darkseid (+ 19 más) | 2-C, Tier 9-A Físico | Tier 2-C con Hellbat y Tiempo de Preparación, 1-C, 9-A, 7-A |
| **Marvel Comics** | 39 | Rune King Thor / All-Black Thor, Avengers / Model Prime / Godkiller, World War Hulk / Immortal Hulk, Classic Strange / Damnation (+ 9 más) | 2-C, Tier 7-A Físico | Tier 2-C con Armaduras Buster Cósmicas, Tier 2-C Físico | Tier 2-A con Guantelete del Infinito, 8-A, 1-C |
| **One Punch Man** | 36 | Saga de los Monstruos / Combate en la Luna de Júpiter, Saga de los Monstruos / Pelea Cósmica de Júpiter, Saga de la Invasión Alienígena, Saga de la Asociación de Monstruos (+ 7 más) | 4-A, 5-A, Tier High 6-A a 5-C | Nivel Multicontinental a Lunar, 7-A, 10-B |
| **Dragon Ball Z — Películas, OVAs y Relleno Toei** | 34 | Película 8: El Poder Invencible, Película 1 / Saga Garlic, Saga de Garlic Jr. (Relleno), Torneo del Otro Mundo / Película Fusión (+ 14 más) | 4-B, 5-B, 5-A, 4-C, Tier 9-A Físico | Tier 4-C a 4-B con Biotecnología y Bio-Guerreros |
| **My Hero Academia** | 32 | Shie Hassaikai, Ejército de Liberación / Guerra de Liberación Paranormal, Arco de Pasantías / USJ, Arco del Héroe Oscuro / Fugas de Tartarus (+ 15 más) | 8-A, 8-C, 8-B, 7-B, High 6-A | Nivel Multicontinental |
| **Shuumatsu no Valkyrie (Record of Ragnarok)** | 30 | Ronda 2: El Padre de la Humanidad vs El Padre del Cosmos, Ronda 2: El Dios Supremo vs Adam, Ronda 3: El Mayor Perdedor vs El Tirano de los Mares, Ronda 3: El Tirano de los Mares vs El Mayor Perdedor (+ 17 más) | 3-A, 4-B, 3-C, 8-A |
| **Dragon Ball (Clásico)** | 29 | Búsqueda de las Esferas / Red Ribbon / Rey Piccolo, 23º Torneo de las Artes Marciales / Final DB Clásico, 21º - 23º Tenkaichi Budokai / Rey Piccolo, Búsqueda de las Esferas / 21º-23º Torneo (+ 12 más) | 7-B, 7-A, 8-A, 8-B, 9-A |
| **Invincible** | 25 | Invasión Viltrumita / Guerra Viltrumita, Final de la Serie / 500 Años en el Futuro, Guerra Viltrumita / El Fin de Todo, Guerra Viltrumita (+ 13 más) | 5-B, 7-A, 5-A, 2-C, 8-A |
| **Chainsaw Man** | 23 | Parte 1 / Parte 2, Parte 1 (Saga de Seguridad Pública), Arco de la Chica Bomba, Arco de la Escuela / Post-Makima (+ 5 más) | 7-B, 8-A, 7-A, 6-C, 8-B |
| **Demon Slayer: Kimetsu no Yaiba** | 23 | Arco del Distrito del Entretenimiento, Arco del Castillo Infinito, Arco de la Aldea de los Herreros, Arco de la Aldea de los Herreros / Castillo Infinito (+ 8 más) | 7-B, 7-C, 8-A, 10-C, 9-B |
| **Baki the Grappler** | 23 | Arco de la Prisión Estatal de Arizona, Torneo Máximo / Death Row Convicts, Arco de Musashi Miyamoto / Death Row Convicts, Torneo Raitai (+ 10 más) | 7-C, 8-C, 7-B, 8-B, 8-A |
| **Dragon Ball Daima** | 18 | Reino de los Demonios, Aventura en el Reino Demoníaco (Daima), Prólogo y Clímax del Reino Demoníaco (Daima) | 4-B, 8-A, 4-A, 5-A, Tier 7-B Base | Tier 4-B con Pistola Mágica y Nave Espacial |
| **Dragon Ball GT** | 16 | Baby / Dragones Oscuros, Búsqueda Galáctica / Dragones, Saga Baby, Super 17 (+ 7 más) | 3-A, 4-C, 3-C, 3-B, 2-C |
| **Demon Slayer (Kimetsu no Yaiba)** | 14 | Fortaleza Dimensional Infinita / Cuenta Regresiva, Era Sengoku (Flashbacks), Fortaleza Dimensional Infinita, Castillo Infinito / Batalla contra los Pilares (+ 9 más) | 7-B, 7-C |
| **The Boys** | 14 | Temporadas 1 a 4 / Cómics, Temporadas 3 y 4, Temporada 3, Temporadas 1 a 4 (+ 5 más) | 7-B, 8-A, 7-A, 9-A, 8-C |
| **Dragon Ball (Apariciones Multi-Era)** | 9 | Clásico / Torneo del Poder, Dragon Ball Clásico / Saga Saiyan, Rey Demonio Piccolo / Namek / Buu, Saga Saiyan (+ 5 más) | 5-C, 7-B, 8-B, Tier 9-A Físico | Tier 2-C Hax de Creación de Esferas, 9-B |
| **My Hero Academia (Boku no Hero)** | 9 | Guerra Final / Arco del Héroe Oscuro, Guerra Final / Despertar Apex, Era Dorada / Batalla Legendaria contra All For One, Guerra Final / Arco de Shigaraki All For One (+ 5 más) | Tier High 6-A a 5-C | Nivel Multicontinental a Lunar Pequeño, 6-A, 7-A, Tier High 6-A | Nivel Multicontinental |
| **Baki the Grappler / Baki Hanma** | 8 | Son of Ogre / Torneo Máximo, Son of Ogre / Padre contra Hijo, Baki Dou (2018) / Guerra de Mordidas, Saga de Pickle / Son of Ogre (+ 4 más) | 7-B, 7-C |
| **Dragon Ball What-If (Brokoly350)** | 7 | Ruta Alterna: Baby absorbe Ki Divino | 3-B, 4-B, 4-A, 3-A |
| **Dragon Ball Kakumei (Fan-Manga)** | 7 | Entrenamiento de los Universos, Guerra del Universo Cero / Multiverso 0 | 2-C, 2-B, 2-A |
| **Dragon Ball New Hope (Fan-Manga)** | 6 | Sin saga especificada | 4-B, 3-C, 4-A |
| **Dragon Ball After (Fan-Manga)** | 4 | La Caída de la Tierra | 4-B, 3-A |
| **Spy x Family** | 2 | Operación Strix | 8-A, 7-C |
| **Dragon Ball Multiverse** | 2 | Torneo del Multiverso / Universo 3, Torneo del Multiverso / Universo 13 | 4-B |
| **Dragon Ball Z (Canon Toriyama)** | 2 | Saga Saiyan (Llegada de Raditz), Saga Saiyan (Invasión de Nappa y Vegeta) | 6-A, 5-B |
| **Universo Híbrido (APEX Original)** | 1 | Sin saga especificada | 9-B |
| **Dragon Ball Multiverse (Fan-Manga, Canon DBM)** | 1 | Torneo Interuniversal DBM — Universo 8 | 4-B |

### Distribución de Tiers en el Roster

| Tier | Cantidad de Personajes | Descripción Dimensional |
|---|---|---|
| **8-A** | 94 | Nivel Edificio/Bloque |
| **4-B** | 93 | Nivel Estelar/Solar |
| **7-B** | 92 | Nivel Ciudad/Montaña |
| **3-A** | 67 | Nivel Galáctico |
| **4-C** | 55 | Nivel Estelar/Solar |
| **2-C** | 49 | Nivel Multiversal |
| **7-A** | 48 | Nivel Ciudad/Montaña |
| **8-C** | 46 | Nivel Edificio/Bloque |
| **5-B** | 39 | Nivel Planetario |
| **8-B** | 37 | Nivel Edificio/Bloque |
| **7-C** | 30 | Nivel Ciudad/Montaña |
| **5-A** | 27 | Nivel Planetario |
| **9-B** | 21 | Nivel Sobrehumano |
| **3-C** | 14 | Nivel Galáctico |
| **4-A** | 14 | Nivel Estelar/Solar |
| **9-A** | 14 | Nivel Sobrehumano |
| **3-B** | 10 | Nivel Galáctico |
| **2-B** | 8 | Nivel Multiversal |
| **1-C** | 8 | Nivel Hyperversal/Outerversal |
| **5-C** | 7 | Nivel Planetario |
| **6-C** | 6 | Nivel Isla/País/Continental |
| **6-A** | 5 | Nivel Isla/País/Continental |
| **9-C** | 4 | Nivel Sobrehumano |
| **10-A** | 3 | Nivel Humano |
| **Tier High 6-A | Nivel Multicontinental** | 3 | Nivel Trascendente/Boundless |
| **10-C** | 3 | Nivel Humano |
| **10-B** | 2 | Nivel Humano |
| **Tier 8-C Físico | Tier 2-C Hax Temporal** | 2 | Nivel Trascendente/Boundless |
| **Tier High 6-A a 5-C | Nivel Multicontinental a Lunar Pequeño** | 2 | Nivel Trascendente/Boundless |
| **2-A** | 2 | Nivel Multiversal |
| **6-B** | 2 | Nivel Isla/País/Continental |
| **Tier 9-C Físico | Tier 8-B con Ejército y Armas Bélicas** | 1 | Nivel Trascendente/Boundless |
| **Tier 9-A Físico | Tier 2-C Hax de Creación de Esferas** | 1 | Nivel Trascendente/Boundless |
| **Tier 9-A Físico | Tier 4-C a 4-B con Biotecnología y Bio-Guerreros** | 1 | Nivel Trascendente/Boundless |
| **Tier 8-C Físico | Tier 2-C Hax Causal / Trascendental** | 1 | Nivel Trascendente/Boundless |
| **Tier 8-C Físico | Tier 2-C a 2-A Nivel Multiversal (Reinicio Cósmico)** | 1 | Nivel Trascendente/Boundless |
| **Tier 7-A Físico | Tier 2-C con Armaduras Buster Cósmicas** | 1 | Nivel Trascendente/Boundless |
| **Tier 9-A Físico | Tier 2-C con Hellbat y Tiempo de Preparación** | 1 | Nivel Trascendente/Boundless |
| **Tier 8-C Físico | Tier 2-C a 2-A Hax del Giro Infinito** | 1 | Nivel Trascendente/Boundless |
| **Tier 2-C Físico | Tier 2-A con Guantelete del Infinito** | 1 | Nivel Trascendente/Boundless |
| **Tier High 6-A a 5-C | Nivel Multicontinental a Lunar** | 1 | Nivel Trascendente/Boundless |
| **Tier 7-B Base | Tier 4-B con Pistola Mágica y Nave Espacial** | 1 | Nivel Trascendente/Boundless |
| **Tier 8-C Físico | Tier 2-C a 2-A Hax Multiversal (D4C - Love Train)** | 1 | Nivel Trascendente/Boundless |
| **Tier 8-C Físico | Tier 2-C Hax Temporal (mediante Bites the Dust)** | 1 | Nivel Trascendente/Boundless |
| **High 6-A | Nivel Multicontinental** | 1 | Nivel Trascendente/Boundless |

---

## 3. Diagnóstico de Salud y Calidad de las Fichas

| Estado de la Ficha | Cantidad | Porcentaje | Observaciones |
|---|---|---|---|
| **Fichas Completas (`complete`)** | 138 | 16.8% | Datos plenos de identidad, arsenal, stats y sinergias |
| **Fichas Usables (`usable-but-incomplete`)** | 683 | 83.2% | Combatibles en motor; estadísticas numéricas en plantilla |
| **Fichas Agrupadas (`grouped-characters`)** | 14 | 1.7% | Requieren separación en fichas individuales |
| **Fichas con Revisión de Lore (`needs-lore-review`)** | 821 | 100.0% | Pendientes de calibración fina individual |

### Campos con Mayor Ausencia o Contenido Genérico

| Campo | Registros Faltantes | Acción de Mejora Futura |
|---|---|---|
| `tierExact` | 821 | Completar en fase de revisión |
| `stats` | 821 | Completar en fase de revisión |
| `sourceKi` | 820 | Completar en fase de revisión |
| `synergies` | 669 | Definir compañeros afines y combos |
| `version` | 49 | Completar en fase de revisión |
| `alias` | 22 | Completar en fase de revisión |
| `saga` | 22 | Completar en fase de revisión |
| `battleIQ` | 22 | Completar en fase de revisión |
| `range` | 4 | Completar en fase de revisión |

---

## 4. Detección de Duplicados, Variantes Válidas y Fichas Agrupadas

| Personaje(s) / Registros | Clasificación | Confianza | Acción Recomendada | Evidencia |
|---|---|---|---|---|
| Son Goku (Niño) vs Son Goku (23º Tenkaichi Budokai) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Búsqueda de las Esferas / Red Ribbon / Rey Piccolo vs 23º Torneo de las Artes Marciales / Final DB Clásico) |
| Son Goku (Llegada DBZ) vs Son Goku (Saga Namek) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Saga de Namek) |
| Son Goku (Llegada DBZ) vs Son Goku (Saga Cell) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Juegos de Cell) |
| Son Goku (Llegada DBZ) vs Son Goku (Saga Buu, Base) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Saga de Buu) |
| Son Goku (Llegada DBZ) vs Son Goku (Saga Freezer / Post-Zenkai) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Saga de Freezer) |
| Son Goku (Llegada DBZ) vs Son Goku (Saga Buu, SSJ3) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Saga Majin Buu) |
| Son Goku (Saga Namek) vs Son Goku (Saga Cell) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Namek vs Juegos de Cell) |
| Son Goku (Saga Namek) vs Son Goku (Saga Buu, Base) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Namek vs Saga de Buu) |
| Son Goku (Saga Namek) vs Son Goku (Saga Freezer / Post-Zenkai) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Namek vs Saga de Freezer) |
| Son Goku (Saga Namek) vs Son Goku (Saga Buu, SSJ3) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Namek vs Saga Majin Buu) |
| Son Goku (Saga Cell) vs Son Goku (Saga Buu, Base) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Juegos de Cell vs Saga de Buu) |
| Son Goku (Saga Cell) vs Son Goku (Saga Freezer / Post-Zenkai) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Juegos de Cell vs Saga de Freezer) |
| Son Goku (Saga Cell) vs Son Goku (Saga Buu, SSJ3) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Juegos de Cell vs Saga Majin Buu) |
| Son Goku (Saga Buu, Base) vs Son Goku (Saga Freezer / Post-Zenkai) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Buu vs Saga de Freezer) |
| Son Goku (Saga Buu, Base) vs Son Goku (Saga Buu, SSJ3) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Buu vs Saga Majin Buu) |
| Son Goku (Saga Super) vs Son Goku (Ultra Instinto Limitado / Perfecto) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Torneo del Poder / Granolah vs Torneo del Poder / Saga Moro / Saga Granolah) |
| Son Goku (Mini) vs Son Goku (Daima — Mini) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Reino de los Demonios vs Aventura en el Reino Demoníaco (Daima)) |
| Son Goku (Mini) vs Son Goku (Daima — Adulto) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Reino de los Demonios vs Prólogo y Clímax del Reino Demoníaco (Daima)) |
| Son Goku (Saga Freezer / Post-Zenkai) vs Son Goku (Saga Buu, SSJ3) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Freezer vs Saga Majin Buu) |
| Son Goku (Daima — Mini) vs Son Goku (Daima — Adulto) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Aventura en el Reino Demoníaco (Daima) vs Prólogo y Clímax del Reino Demoníaco (Daima)) |
| Vegeta (Llegada a la Tierra) vs Vegeta (Saga Namek) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Saga Namek) |
| Vegeta (Llegada a la Tierra) vs Vegeta (Saga Cell) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Saga Androides / Cell) |
| Vegeta (Llegada a la Tierra) vs Vegeta (Saga Buu Base) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan vs Torneo de las Artes Marciales / Pui Pui) |
| Vegeta (Saga Namek) vs Vegeta (Saga Cell) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Namek vs Saga Androides / Cell) |
| Vegeta (Saga Namek) vs Vegeta (Saga Buu Base) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Namek vs Torneo de las Artes Marciales / Pui Pui) |
| Vegeta (Saga Cell) vs Vegeta (Saga Buu Base) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Androides / Cell vs Torneo de las Artes Marciales / Pui Pui) |
| Vegeta (Saga Super) vs Vegeta (Ultra Ego / Destrucción) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Granolah vs Saga Granolah) |
| Vegeta (Daima Mini) vs Vegeta (Daima — Mini) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Reino de los Demonios vs Aventura en el Reino Demoníaco (Daima)) |
| Vegeta (Daima Mini) vs Vegeta (Daima — Adulto) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Reino de los Demonios vs Prólogo y Clímax del Reino Demoníaco (Daima)) |
| Vegeta (Daima — Mini) vs Vegeta (Daima — Adulto) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Aventura en el Reino Demoníaco (Daima) vs Prólogo y Clímax del Reino Demoníaco (Daima)) |
| Vegeta (Universo 18, Línea Temporal Principal DBM) vs Vegeta (Universo 13) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Torneo Interuniversal DBM — Universo 18 (Universo Principal) vs Torneo Interuniversal DBM — Universo 13) |
| Vegeta (Universo 18, Línea Temporal Principal DBM) vs Vegeta (Rey, Universo 18 — DBM) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Torneo Interuniversal DBM — Universo 18 (Universo Principal) vs Torneo Interuniversal DBM) |
| Vegeta (Universo 13) vs Vegeta (Rey, Universo 18 — DBM) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Torneo Interuniversal DBM — Universo 13 vs Torneo Interuniversal DBM) |
| Son Gohan (Niño) vs Son Gohan (Joven / Cell Games) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan / Namek vs Saga de los Androides y Cell) |
| Son Gohan (Saga Super) vs Son Gohan (Dragon Ball Super — Resurrección de 'F' / Pre-Torneo) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Super Hero vs Saga de la Resurrección de 'F' y Entrenamiento Pre-Torneo del Poder) |
| Son Gohan (Dragon Ball Super — Resurrección de 'F' / Pre-Torneo) vs Son Gohan (Super Hero) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de la Resurrección de 'F' y Entrenamiento Pre-Torneo del Poder vs Super Hero) |
| Piccolo (Saga Namek) vs Piccolo (Saga Androides / Cell) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Namek vs Saga Androides / Cell) |
| Piccolo (Saga Super) vs Piccolo (Finales de Z / Principios de Super) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Torneo del Poder / Saga de Moro vs Batalla de los Dioses / Resurrección de F (Principios de Super)) |
| Piccolo (Saga Super) vs Piccolo (Super Hero) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Torneo del Poder / Saga de Moro vs Super Hero) |
| Piccolo (Finales de Z / Principios de Super) vs Piccolo (Super Hero) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Batalla de los Dioses / Resurrección de F (Principios de Super) vs Super Hero) |
| Piccolo (Inicio Saga Saiyan / vs Raditz) vs Piccolo (Final Saga Saiyan / vs Nappa) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga Saiyan (Llegada de Raditz) vs Saga Saiyan (Invasión de Nappa y Vegeta)) |
| Freezer (Dragon Ball Super — Torneo del Poder) vs Freezer (Dragon Ball Super — Resurrección de 'F') | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de la Supervivencia Universal / Torneo del Poder (DBS) vs Saga de la Resurrección de 'F' (DBS)) |
| Freezer (Dragon Ball Super — Torneo del Poder) vs Freezer (Dragon Ball Super: Broly — Película Canónica) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de la Supervivencia Universal / Torneo del Poder (DBS) vs Película Dragon Ball Super: Broly) |
| Freezer (Dragon Ball Super — Resurrección de 'F') vs Freezer (Dragon Ball Super: Broly — Película Canónica) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de la Resurrección de 'F' (DBS) vs Película Dragon Ball Super: Broly) |
| Majin Buu (Gordo) vs Majin Buu (Buuhan) | `valid-variant` | high | `keep-both` | Progresion temporal o narrativa distinta entre sagas (Saga de Buu / DBS vs Saga Majin Buu) |

---

## 5. Auditoría de Formas, Estados y Transformaciones

- **Total de Personajes con Estados:** 821
- **Total de Estados Registrados:** 1366
- **Estados Resueltos con Multiplicador:** 1066
- **Estados en Fallback Base Seguro (x1):** 300

### Distribución por Colecciones en la Base de Datos

| Nombre de Colección | Total de Entradas Registradas |
|---|---|
| `forms` | 1366 |

---

## 6. Auditoría de Arsenal, HaxTags y Pasivas

- **Personajes con Ataques Básicos:** 821
- **Personajes con Super Ataques:** 821
- **Personajes con Ultimate Attacks:** 818
- **Personajes con Habilidades Pasivas:** 821
- **Personajes con HaxTags Estructurados:** 821
- **Personajes con Arsenal Vacío:** 0 (0% de error)

---

## 7. Auditoría de Sinergias, Fusiones y Equipos Candidatos

- **Personajes con Sinergias:** 152
- **Personajes con Team Combos:** 0
- **Personajes con Métodos de Fusión:** 0

### Equipos de Alta Afinidad para Simulación Multiversal

| Equipo / Miembros | Justificación Táctica y Canónica | Estado |
|---|---|---|
| **son-goku-saga-saiyan + vegeta-llegada-a-la-tierra** | Rivalidad eterna Saiyan y combate cooperativo canonico. | `candidate-only` |
| **son-goten-nino + trunks-nino** | Duo de fusion Gotenks y combate en equipo permanente. | `candidate-only` |
| **satoru-gojo + suguru-geto** | Duo de los mas fuertes de Jujutsu Kaisen (Arco Pasado). | `candidate-only` |
| **batman-dc-comics + superman-dc-comics** | Trinidad de DC Comics / World Finest. | `candidate-only` |
| **saitama-opm + genos-opm** | Maestro y discipulo de One-Punch Man. | `candidate-only` |
| **baki-hanma + yujiro-hanma** | Linaje de la Bestia / Sangre Hanma. | `candidate-only` |
| **denji-chainsaw-man + power-chainsaw-man** | Duo caotico Division Especial 4. | `candidate-only` |
| **jotaro-kujo + noriaki-kakyoin** | Stardust Crusaders / Hermanos de Armas Stand. | `candidate-only` |

---

## 8. Cola de Revisión Priorizada para Futuras Mejoras

### Lote 1: Prioridad 1 (Crítica / Inmediata - Fichas Agrupadas y Duplicados)

| ID de Registro | Nombre | Universo | Problemas Detectados | Acción Requerida |
|---|---|---|---|---|
| `soldados-de-freezer-saga-namek-793` | **Soldados de Freezer** | Dragon Ball (Apariciones Multi-Era) | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `adult-gon-hxh` | **Gon Adulto (Voto y Restricción Suprema)** | Hunter x Hunter | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `tamagami-2-escudo-daima` | **Tamagami #2 (Guardián del Escudo y Lanza)** | Dragon Ball Daima | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `kat-syd-u6-dbm` | **Kat y Syd (Guerreras Misteriosas, Universo 6)** | Dragon Ball Multiverse (Fan-Manga) | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `tidar-xeniloum-u19-dbm` | **Tidar y Xeniloum (Guerreros Heliotas, Universo 19)** | Dragon Ball Multiverse (Fan-Manga) | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `saiyans-namekianos-u10-grupo` | **Mahissu, Romanesco, Cargot, Caracoru y Lumaca (Guerreros del Universo 10)** | Dragon Ball Multiverse (Fan-Manga) | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `goten-trunks-ninos-u16-dbm` | **Goten y Trunks (Niños, Universo 16, Pre-Fusión)** | Dragon Ball Multiverse (Fan-Manga) | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `dr-raichi-fantasmas-del-odio-u3-dbm` | **Dr. Raichi (y los Fantasmas del Odio)** | Dragon Ball Multiverse (Fan-Manga) | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `mai-shu-pilaf` | **Mai y Shu (Subordinados de Pilaf)** | Dragon Ball (Clásico) | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `silva-illumi-zoldyck` | **Silva e Illumi Zoldyck** | Hunter x Hunter | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `trunks-futuro-v1-espada-ssj-basico` | **Trunks del Futuro (DBZ — Primer Viaje al Pasado, Espada y SSJ Básico)** | Dragon Ball Z | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `trunks-futuro-v2-armadura-grados` | **Trunks del Futuro (DBZ — Saga Cell, Armadura y SSJ Grado 3)** | Dragon Ball Z | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `trunks-futuro-v3-saga-buu-ssj2` | **Trunks del Futuro (Continuidad Extendida Post-Cell — SSJ Perfeccionado y SSJ2)** | Dragon Ball Z | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |
| `gyutaro-daki-kny-ed` | **Gyutaro y Daki** | Demon Slayer: Kimetsu no Yaiba | Personaje agrupado multiple en una sola ficha | Separar en fichas individuales (split-record) |

### Lote 2: Prioridad 2 (Combate y Calibración de Stats)

| ID de Registro | Nombre | Universo | Problemas Detectados | Acción Requerida |
|---|---|---|---|---|
| `son-goku-ni-o-dragon-ball-cl-sico-987` | **Son Goku (Niño)** | Dragon Ball (Clásico) | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-23-tenkaichi` | **Son Goku (23º Tenkaichi Budokai)** | Dragon Ball (Clásico) | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-llegada-dbz-saga-saiyan-169` | **Son Goku (Llegada DBZ)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-saga-namek-saga-namek-176` | **Son Goku (Saga Namek)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-saga-cell-saga-androides-459` | **Son Goku (Saga Cell)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-saga-buu-saga-buu-646` | **Son Goku (Saga Buu, Base)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-saga-super-dragon-ball-super-732` | **Son Goku (Saga Super)** | Dragon Ball Super | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-saga-gt-dragon-ball-gt-281` | **Son Goku (Saga GT)** | Dragon Ball GT | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-goku-mini-dragon-ball-daima-751` | **Son Goku (Mini)** | Dragon Ball Daima | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `vegeta-llegada-a-la-tierra-saga-saiyan-504` | **Vegeta (Llegada a la Tierra)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `vegeta-saga-namek-saga-namek-783` | **Vegeta (Saga Namek)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `vegeta-saga-cell-saga-androides-856` | **Vegeta (Saga Cell)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `vegeta-saga-buu-saga-buu-213` | **Vegeta (Saga Buu Base)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `vegeta-saga-super-dragon-ball-super-454` | **Vegeta (Saga Super)** | Dragon Ball Super | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `vegeta-saga-gt-dragon-ball-gt-851` | **Vegeta (Saga GT)** | Dragon Ball GT | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-gohan-ni-o-saga-saiyan-namek-830` | **Son Gohan (Niño)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-gohan-joven-saga-androides-cell-945` | **Son Gohan (Joven / Cell Games)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `gohan-ultimate-mystic-897` | **Gohan Definitivo (Ultimate/Mystic)** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `son-gohan-saga-super-dragon-ball-super-39` | **Son Gohan (Saga Super)** | Dragon Ball Super | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |
| `gohan-del-futuro-l-nea-temporal-futura-43` | **Gohan del Futuro** | Dragon Ball Z | Estadisticas numericas basadas en plantilla equilibrada | Calibrar stats finos [0, 1] acordes al personaje |

---

## 9. Catálogo de Fichas Muestra Representativas (28 Personajes)

### 1. Son Goku (Niño) (Dragon Ball (Clásico))

- **ID:** `son-goku-ni-o-dragon-ball-cl-sico-987`
- **Alias:** El Niño Mono Salvaje
- **Saga / Versión:** Búsqueda de las Esferas / Red Ribbon / Rey Piccolo | Pre-Rey Piccolo (Agua Ultra Divina)
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `260 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `260 Unidades (Scouter)`
- **Ataques Principales:** Kamehameha, Janken (Piedra, Papel, Tijeras)
- **Remates (Ultimates):** Golpe del Mono Gigante (Penetración Oozaru)
- **Formas Registradas:** Goku Niño (Estado Base) (x1), Goku Niño (Ohzaru / Mono Gigante) (x1)
- **HaxTags:** `Cola de Oozaru`, `Báculo Mágico (Nyoibo Extensión Infinita)`, `Kamehameha Impulsor`
- **Debilidades:** Su cola (si la agarran con fuerza, pierde el 100% de su energía y cae al suelo inútil). El hambre extrema lo debilita muchísimo.
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 2. Son Goku (Saga Namek) (Dragon Ball Z)

- **ID:** `son-goku-saga-namek-saga-namek-176`
- **Alias:** El Legendario Super Saiyajin
- **Saga / Versión:** Saga de Namek | Despertar del Super Saiyajin (Furia en Namek)
- **Tier Base:** `4-B` (TierRank: 32)
- **APEX-Ki:** `3.00 Millones` (PowerKey: 3299)
- **Source Ki Canónico (Dragon Ball):** `3.0 Millones (Scouter)`
- **Ataques Principales:** Kamehameha Furioso, Ráfaga Rompe-Meteoros
- **Remates (Ultimates):** Super Kamehameha (Ira de Namek)
- **Formas Registradas:** Son Goku (Estado Base Namek) (x1), Kaio-ken x10 / x20 (x1), Super Saiyan 1 (Despertar Legendario) (x1)
- **HaxTags:** `Amplificación de Ira`, `Telepatía Básica (Kaio)`, `Telequinesis Defensiva Mínima`
- **Debilidades:** Falta de control de ira, pérdida de Stamina drástica hacia el final del combate, y vulnerabilidad a ataques en áreas orgánicas sin Ki si baja la guardia (sobrevive al vacío de milagro).
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 3. Vegeta (Llegada a la Tierra) (Dragon Ball Z)

- **ID:** `vegeta-llegada-a-la-tierra-saga-saiyan-504`
- **Alias:** El Príncipe de los Saiyans
- **Saga / Versión:** Saga Saiyan | Invasor Élite
- **Tier Base:** `5-A` (TierRank: 27)
- **APEX-Ki:** `18.00 Mil` (PowerKey: 2794)
- **Source Ki Canónico (Dragon Ball):** `18.000 Unidades (Scouter)`
- **Ataques Principales:** Cañón Galick (Galick Gun), Luna Artificial
- **Remates (Ultimates):** Transformación Oozaru
- **Formas Registradas:** Príncipe Saiyan (x1)
- **HaxTags:** `Transformación Oozaru Cósmica`, `Luna Artificial de Ki (Bola de Poder)`, `Resiliencia de Orgullo`
- **Debilidades:** Cortar su cola anula el modo Oozaru. Si su orgullo es quebrado (ser superado por un 'clase baja'), pierde los estribos y desperdicia Ki.
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 4. Son Gohan (Joven / Cell Games) (Dragon Ball Z)

- **ID:** `son-gohan-joven-saga-androides-cell-945`
- **Alias:** El Despertar del Guerrero Definitivo
- **Saga / Versión:** Saga de los Androides y Cell | Super Saiyan 2
- **Tier Base:** `4-B` (TierRank: 32)
- **APEX-Ki:** `2.80 Mil Millones` (PowerKey: 3299)
- **Source Ki Canónico (Dragon Ball):** `2.80 Mil Millones (Scouter)`
- **Ataques Principales:** Masenko, Super Kamehameha, Gekiretsu Madan
- **Remates (Ultimates):** Father-Son Kamehameha (Oyako Kamehameha)
- **Formas Registradas:** Son Gohan (Estado Base) (x1), Super Saiyajin (Máximo Poder) (x1), Super Saiyajin 2 (Ira Desatada) (x1)
- **HaxTags:** `Saiyan`, `Híbrido Saiyan-Humano`, `Furia Latente / Rage Boost`, `Zenkai`, `Voluntad Inquebrantable`, `Usuario de Ki`
- **Debilidades:** Exceso de arrogancia que llevó a la muerte de Goku y Trunks. Falta de instinto marcial puro sin estar impulsado por la furia.
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 5. Krilin (Dragon Ball Clásico) (Dragon Ball (Clásico))

- **ID:** `krilin-db-clasico`
- **Alias:** El Monje de Orin / Discípulo de Roshi
- **Saga / Versión:** 21º - 23º Tenkaichi Budokai / Rey Piccolo | Joven Artista Marcial de la Escuela Tortuga
- **Tier Base:** `8-A` (TierRank: 9)
- **APEX-Ki:** `366 Unidades` (PowerKey: 976)
- **Source Ki Canónico (Dragon Ball):** `366 Unidades (Scouter)`
- **Ataques Principales:** Kamehameha, Zanshinken (Técnica de la Imagen Residual)
- **Remates (Ultimates):** Doble Kamehameha Dirigido
- **Formas Registradas:** Krilin Niño (Estado Base) (x1), Krilin (21º Torneo / Estilo Tortuga) (x1), Krilin (23º Torneo / Adulto Joven) (x1)
- **HaxTags:** `Kamehameha`, `Zanshinken (Imagen Residual)`, `Inmunidad Olfativa (Sin Nariz)`
- **Debilidades:** Fuerza física limitada comparada con los Saiyans o demonios.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 6. Vegetto (Saga Buu) (Dragon Ball Z)

- **ID:** `vegetto-base-saga-buu-120`
- **Alias:** El Guerrero Pothala Supremo / Super Vegetto
- **Saga / Versión:** Saga de Buu | Super Saiyan (Pothala Fusion)
- **Tier Base:** `3-B` (TierRank: 35)
- **APEX-Ki:** `5.00 Billones` (PowerKey: 3602)
- **Source Ki Canónico (Dragon Ball):** `5.00 Billones (Scouter)`
- **Ataques Principales:** Big Bang Attack / Kamehameha, Espada de Espíritu Estelar (Spirit Sword)
- **Remates (Ultimates):** Final Kamehameha
- **Formas Registradas:** Vegetto Base (x1), Super Vegetto (x1)
- **HaxTags:** `Fusión Pothala`, `Inmunidad Total a Transmutación (Caramelo Peleonero)`, `Barrera de Energía Penetrante`, `Espada Espiritual Pura`
- **Debilidades:** El ambiente del estómago de Buu desactivó temporalmente el estado divino/mágico de los pendientes, separando a Goku y Vegeta (Retcon en DBS: Límite de 1 hora por no ser Kaioshins).
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 7. Rey Cold (Dragon Ball Z)

- **ID:** `rey-cold-saga-androides-751`
- **Alias:** El Gran Patriarca del Imperio del Frío
- **Saga / Versión:** Saga Androides / Mecha Freezer | Forma Restringida (Segunda Forma)
- **Tier Base:** `4-C` (TierRank: 30)
- **APEX-Ki:** `156.00 Millones` (PowerKey: 3097)
- **Source Ki Canónico (Dragon Ball):** `156.0 Millones (Scouter)`
- **Ataques Principales:** Rayo de Muerte Real
- **Remates (Ultimates):** Estocada de la Espada Saiyan
- **Formas Registradas:** Forma Estándar (Segunda Forma) (x1)
- **HaxTags:** `Supervivencia en el Vacío Espacial`, `Linaje Mutante del Frío`, `Voluntad Indomable`
- **Debilidades:** Pésima evaluación del Ki ajeno; creyó que la espada le daba poder a Trunks.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 8. Yujiro Hanma (Baki the Grappler / Baki Hanma)

- **ID:** `yujiro-hanma-baki`
- **Alias:** El Ogro / La Criatura Más Fuerte del Planeta
- **Saga / Versión:** Son of Ogre / Torneo Máximo | Demon Back (Espalda del Demonio Activada)
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Benda (Golpe del Látigo Dérmico), Xiao-Lee Ofensivo (Flujo de Absorción y Devolución)
- **Remates (Ultimates):** Puñetazo del Ogro: Despertar de la Espalda del Demonio
- **Formas Registradas:** Estado Base (El Ogro Relajado) (x1), Espalda del Demonio (Demon Back) (x1)
- **HaxTags:** `Demon Back (Espalda del Demonio)`, `Xiao-Lee Defensivo & Ofensivo`, `Lectura Anatómica de Debilidades de Rayos X`, `Golpe de Látigo Benda`, `Detener Terremotos a Puño Limpio`
- **Debilidades:** Arrogancia extrema: Disfruta recibiendo los mejores ataques del rival solo para demostrar su absoluta superioridad genética.
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 9. Baki Hanma (Baki the Grappler / Baki Hanma)

- **ID:** `baki-hanma-baki`
- **Alias:** El Campeón del Domo Subterráneo / El Hijo del Ogro
- **Saga / Versión:** Son of Ogre / Padre contra Hijo | Demon Back + Demon Brain
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Cockroach Dash (Aceleración Instantánea), Inconsciencia de 0.5 Segundos
- **Remates (Ultimates):** Puño Triceratops + Demon Back
- **Formas Registradas:** Estado Base (El Campeón Técnico) (x1), Espalda del Demonio Despertada (x1)
- **HaxTags:** `Demon Back (Espalda del Demonio)`, `Demon Brain (Cerebro del Demonio)`, `Ataque del 0.5 Segundo (Inconsciencia Motora)`, `Puño Triceratops (Estilo Imaginario)`, `Gota de Cockroach Dash (Aceleración de Cucaracha Mach 3)`
- **Debilidades:** Masa muscular humana estándar: Puede ser dañado por armas cortantes directas o golpes de seres con AP masivamente superior.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 10. Satoru Gojo (Jujutsu Kaisen)

- **ID:** `satoru-gojo-jjk`
- **Alias:** El Hechicero Más Fuerte de la Era Moderna
- **Saga / Versión:** Batalla Decisiva de Shinjuku | Seis Ojos + Infinito + Púrpura Ilimitado 200%
- **Tier Base:** `7-A` (TierRank: 15)
- **APEX-Ki:** `1.75 Mil` (PowerKey: 1582)
- **Source Ki Canónico (Dragon Ball):** `800 Unidades (Scouter)`
- **Ataques Principales:** Azul (Atracción) & Rojo (Repulsión Divergente), Expansión de Dominio: Vacío Inconmensurable (Muryōkūsho)
- **Remates (Ultimates):** Púrpura Ilimitado Ilimitado (200% Hollow Purple Remoto)
- **Formas Registradas:** Estado Base (Venda en los Ojos) (x1), Seis Ojos Desatados (Shinjuku Showdown) (x1)
- **HaxTags:** `Barrera del Infinito (Mugen - Intangibilidad Espacial)`, `Seis Ojos (Rikugan - Visión Atómica & Cero Gasto de Energía)`, `Expansión de Dominio: Vacío Inconmensurable (Muryōkūsho)`, `Púrpura Ilimitado (Hollow Purple - Borrado de Masa)`, `Azul & Rojo (Atracción y Repulsión Espacial)`
- **Debilidades:** Ataques que corten o anulen el espacio mismo (como el Corte Mundial de Sukuna o la Lanza Invertida del Cielo).
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 11. Ryomen Sukuna (Jujutsu Kaisen)

- **ID:** `sukuna-ryomen-jjk-20sellos-s001`
- **Alias:** El Rey de las Maldiciones / La Calamidad
- **Saga / Versión:** Era Heian / Batalla de Shinjuku | Forma Verdadera (4 Brazos / 20 Dedos)
- **Tier Base:** `7-A` (TierRank: 15)
- **APEX-Ki:** `1.75 Mil` (PowerKey: 1582)
- **Source Ki Canónico (Dragon Ball):** `800 Unidades (Scouter)`
- **Ataques Principales:** Desmantelar y Hender, Flecha de Fuego (Fuga / Horno)
- **Remates (Ultimates):** Expansión de Dominio: Santuario Malevolente (Fukuma Mizushi), Corte que Corta el Mundo (World Slash)
- **Formas Registradas:** Ryomen Sukuna (Estado Base) (x1), Sukuna (Cuerpo de Megumi / 20 Dedos) (x1), Forma Verdadera (Era Heian) (x1)
- **HaxTags:** `Corte que Divide el Mundo (Ignora Durabilidad / Corta el Espacio)`, `Expansión de Dominio Abierta: Santuario Malevolente`, `Llamas Divinas: Fuga (Flecha de Fuego Termobárica)`, `Cuerpo Verdadero de 4 Brazos y 2 Bocas`
- **Debilidades:** Ataques que golpeen directamente la barrera entre su alma y el cuerpo del anfitrión (como los golpes de Yuji Itadori) o la Escalera de Jacob.
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 12. Jotaro Kujo (JoJo's Bizarre Adventure)

- **ID:** `jotaro-kujo`
- **Alias:** El Portador de Star Platinum
- **Saga / Versión:** Stardust Crusaders / Diamond is Unbreakable / Stone Ocean | Pico de Poder (Star Platinum: The World)
- **Tier Base:** `Tier 8-C Físico | Tier 2-C Hax Temporal` (TierRank: 6)
- **APEX-Ki:** `94 Unidades` (PowerKey: 673)
- **Source Ki Canónico (Dragon Ball):** `80 Unidades (Scouter)`
- **Ataques Principales:** Star Finger
- **Remates (Ultimates):** Star Platinum: The World (Detención del Tiempo)
- **Formas Registradas:** Jotaro Kujo (Star Platinum / Base) (x1), Jotaro (Star Platinum: The World / Parada Temporal) (x1)
- **HaxTags:** `Star Platinum: The World (Detención del Tiempo de 5 Segundos)`, `Velocidad FTL y Precisión Microscópica`, `Star Finger`
- **Debilidades:** Rango muy corto de 2 metros y cuerpo humano normal susceptible a heridas si Star Platinum es eludido.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 13. Giorno Giovanna (GER) (JoJo's Bizarre Adventure)

- **ID:** `giorno-giovanna-ger-jojo-gg001`
- **Alias:** El Jefe de Passione / Portador del Réquiem
- **Saga / Versión:** Vento Aureo | Gold Experience Requiem (Flecha de la Dominación)
- **Tier Base:** `Tier 8-C Físico | Tier 2-C Hax Causal / Trascendental` (TierRank: 6)
- **APEX-Ki:** `94 Unidades` (PowerKey: 673)
- **Source Ki Canónico (Dragon Ball):** `80 Unidades (Scouter)`
- **Ataques Principales:** Disparo de Piedra Viva
- **Remates (Ultimates):** Retorno a Cero (Return to Zero), Bucle de Muerte Infinita (Infinite Death Loop)
- **Formas Registradas:** Gold Experience (Base) (x1), Gold Experience Requiem (x1)
- **HaxTags:** `Retorno a Cero (Return to Zero - Anulación Causal Absoluta)`, `Bucle de Muerte Infinita`, `Creación de Vida Orgánica y Reflejo de Daño`
- **Debilidades:** Su poder físico bruto destructivo (sin contar el hax de Réquiem) es comparable al de un Stand de combate estándar.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 14. Saitama (One Punch Man)

- **ID:** `saitama-opm`
- **Alias:** El Calvo con Capa / Saitama Modo Serio
- **Saga / Versión:** Saga de los Monstruos / Combate en la Luna de Júpiter | Crecimiento Exponencial (Viaje en el Tiempo)
- **Tier Base:** `4-A` (TierRank: 33)
- **APEX-Ki:** `93.60 Mil Millones` (PowerKey: 3400)
- **Source Ki Canónico (Dragon Ball):** `80.00 Mil Millones (Scouter)`
- **Ataques Principales:** Golpes Normales Consecutivos, Tabla Invertida Seria (Serious Table Flip)
- **Remates (Ultimates):** Golpe Serio al 100% (Serious Punch / Omnidireccional), Golpe Cero (Zero Punch - Causalidad Revertida)
- **Formas Registradas:** Estado Base (Despreocupado / Modo Compra del Súper) (x1), Modo Serio (Júpiter Escalado) (x1), Crecimiento Exponencial Absoluto (x1)
- **HaxTags:** `Crecimiento Exponencial Infinito (Sin Limitador)`, `Manipulación Hiperespacial Física (Patear Portales)`, `Puño Cero (Zero Punch - Viaje Temporal)`, `Inmunidad a la Radiación Cósmica`, `Estornudo Serio Interplanetario`
- **Debilidades:** Falta de motivación y aburrimiento crónico: Suele contenerse para buscar una pelea entretenida y llega tarde por las rebajas del supermercado.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 15. Cosmic Garou (Modo Despertar Cósmico) (One Punch Man)

- **ID:** `garou-cosmico-opm`
- **Alias:** El Terror Cósmico / Garou Dios del Miedo
- **Saga / Versión:** Saga de los Monstruos / Pelea Cósmica de Júpiter | Modo Saitama (Puño de Dios)
- **Tier Base:** `4-A` (TierRank: 33)
- **APEX-Ki:** `93.60 Mil Millones` (PowerKey: 3400)
- **Source Ki Canónico (Dragon Ball):** `80.00 Mil Millones (Scouter)`
- **Ataques Principales:** Explosión de Rayos Gamma (Gamma Ray Burst), Portales de Urdimbre Hiperespacial
- **Remates (Ultimates):** Modo Saitama: Golpes Serios Consecutivos Cósmicos
- **Formas Registradas:** Cosmic Garou (Modo Despertar Cósmico) (Estado Base) (x1), Garou Monstruo Despertado (Pre-Cósmico) (x1), Modo Miedo Cósmico (Bendición de Dios) (x1), Modo Saitama (Copia de Fuerza Ilimitada) (x1)
- **HaxTags:** `Copiar Modo (Modo Saitama / All-Out Copy)`, `Emisión de Radiación Gamma Nuclear Pasiva`, `Manipulación de Portales Hiperespaciales`, `Explosión de Rayos Gamma (Gamma Ray Burst)`, `Puño de la Erradicación de Toda la Vida`
- **Debilidades:** Influencia de Dios: Si rechaza la voluntad de Dios pierde su energía cósmica; su tasa de copiado tiene un límite si el rival escala más rápido que él.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 16. Lord Boros (One Punch Man)

- **ID:** `lord-boros-opm`
- **Alias:** El Conquistador del Universo / El Dominador de Galaxias
- **Saga / Versión:** Saga de la Invasión Alienígena | Modo Meteoric Burst (Cañón de Estrella Colapsante)
- **Tier Base:** `5-A` (TierRank: 27)
- **APEX-Ki:** `175.50 Millones` (PowerKey: 2794)
- **Source Ki Canónico (Dragon Ball):** `150.0 Millones (Scouter)`
- **Ataques Principales:** Ráfaga de Meteoro: Patada a la Luna, Regeneración por Núcleo de Energía
- **Remates (Ultimates):** Cañón de Estrella Colapsante (Collapsing Star Roaring Cannon)
- **Formas Registradas:** Forma Contenida (Armadura Selladora) (x1), Forma Liberada (Sin Armadura) (x1), Meteoric Burst (Estallido Meteórico) (x1)
- **HaxTags:** `Meteoric Burst (Impulso Metabólico Extremo)`, `Regeneración Celular Instantánea (Núcleo de Energía)`, `Cañón de Estrella Colapsante (Collapsing Star Roaring Cannon)`, `Emisión de Energía Latente Desbordante`
- **Debilidades:** Gasto de energía en Meteoric Burst: Drena su esperanza de vida y si su núcleo de energía se agota por completo, no puede regenerarse.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 17. Meruem (Hunter x Hunter)

- **ID:** `meruem-hxh-911`
- **Alias:** El Rey de las Hormigas Quimera
- **Saga / Versión:** Saga de las Hormigas Quimera | Post-Rosa (Alimentado por Youpi y Pouf)
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** En de Fotones, Rage Blast
- **Remates (Ultimates):** Desplazamiento Fotónico y Decapitación
- **Formas Registradas:** Rey Hormiga (Base) (x1), Meruem Post-Rosa (x1)
- **HaxTags:** `En de Fotones (Lectura Mente y Emociones / Teletransporte)`, `Síntesis de Aura por Ingestión`, `Alas de Metamorfosis`, `Rage Blast (Cañón de Masa)`
- **Debilidades:** Envenenamiento por radiación tóxica (La Rosa Miniatura causó necrosis celular irreversible que acabó con su vida).
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 18. Gon Freecss (Hunter x Hunter)

- **ID:** `gon-freecss`
- **Alias:** El Niño Monstruo / Gon Adulto (Restricción Absoluta)
- **Saga / Versión:** Saga de las Hormigas Quimera | Pico de Juramento y Restricción (Gon Adulto)
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Jajanken: Tijeras (Corte de Aura)
- **Remates (Ultimates):** Jajanken: Piedra Definitivo (Gon Adulto)
- **Formas Registradas:** Gon (Base) (x1), Gon Adulto (Transformación) (x1)
- **HaxTags:** `Juramento y Restricción Absoluta (Poder Equivalente al Rey)`, `Jajanken: Piedra (Golpe Masivo Concentrado)`, `Jajanken: Tijeras (Espada de Aura Cortante)`, `Jajanken: Papel (Disparo de Aura)`
- **Debilidades:** La transformación es un pacto suicida; tras terminar el combate, su cuerpo queda en un estado momificado de descomposición y necrosis espiritual.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 19. Isaac Netero (Hunter x Hunter)

- **ID:** `netero-hxh-912`
- **Alias:** El 12° Presidente de la Asociación de Cazadores
- **Saga / Versión:** Saga de las Hormigas Quimera | Pico de Poder (Guanyin Bodhisattva de 100 Brazos)
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Primera / Tercera / Noventa y Nueve Mano
- **Remates (Ultimates):** Mano Cero (Zero Hand), La Rosa Miniatura (Poor Man's Rose)
- **Formas Registradas:** Presidente Netero (Estado Base) (x1), Guanyin Bodhisattva de 100 Tipos (Pico) (x1)
- **HaxTags:** `Guanyin Bodhisattva de 100 Brazos`, `Plegaria más Rápida que el Sonido`, `Mano Cero (Rayo de Aura Total)`, `Bomba de la Rosa del Pobre (Bomba Nuclear en el Corazón)`
- **Debilidades:** Cuerpo humano de 110 años susceptible al daño penetrante letal si el enemigo logra atravesar la estatua.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 20. Denji (Chainsaw Man) (Chainsaw Man)

- **ID:** `denji-csm-903`
- **Alias:** El Demonio Motosierra / El Héroe del Infierno
- **Saga / Versión:** Parte 1 / Parte 2 | Forma Verdadera (Pochita / Héroe del Infierno)
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Lanzamiento de Cadena Espinal
- **Remates (Ultimates):** Devoración Conceptual del Demonio
- **Formas Registradas:** Denji (Humano) (x1), Híbrido Motosierra (x1), Héroe del Infierno (Pochita Verdadero) (x1)
- **HaxTags:** `Borrado Conceptual de la Existencia (Al Devorar)`, `Inmortalidad Híbrida (Reinicio por Cuerda)`, `Cadenas de Intestinos de Motosierra`
- **Debilidades:** Si se queda sin sangre en su organismo y no puede tirar de su cuerda, queda temporalmente inerte.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 21. Makima (Chainsaw Man)

- **ID:** `makima-csm-904`
- **Alias:** El Demonio del Control
- **Saga / Versión:** Parte 1 (Saga de Seguridad Pública) | Demonio del Control (Poder Pleno)
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Disparo 'Bang', Ritual del Santuario
- **Remates (Ultimates):** Cadena de Dominación Absoluta
- **Formas Registradas:** Makima (Estado Base) (x1), Líder de Seguridad Pública (x1)
- **HaxTags:** `Control Mental Absoluto (De seres que considere inferiores)`, `Contrato con el Primer Ministro (Redirección de Daño Mortal)`, `Disparo Invisible 'Bang'`, `Ritual de Aplastamiento a Distancia`
- **Debilidades:** Ataques que no nazcan de la hostilidad o el rencor asesino (como Denji devorándola por amor culinario, lo que evitó la activación de su contrato).
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 22. Yoriichi Tsugikuni (Demon Slayer (Kimetsu no Yaiba))

- **ID:** `yoriichi-tsugikuni-kny-902`
- **Alias:** El Creador de la Respiración Solar / El Cazador Inalcanzable
- **Saga / Versión:** Era Sengoku (Flashbacks) | Pico de Poder Marcial
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Respiración Solar: Sol Ardiente
- **Remates (Ultimates):** Forma Decimotercera de la Respiración Solar
- **Formas Registradas:** Yoriichi Tsugikuni (Estado Base) (x1), Yoriichi (Pico Sengoku) (x1), Yoriichi Anciano (85 Años) (x1)
- **HaxTags:** `Respiración Solar Pura (Quema Celular Permanente)`, `Mundo Transparente (Visión Rayos X Anatómica)`, `Estado Desinteresado (Cero Sed de Sangre)`, `Espada Nichirin Carmesí Permanente`
- **Debilidades:** Posee un cuerpo biológico humano; falleció pacíficamente de vejez.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 23. Muzan Kibutsuji (Demon Slayer (Kimetsu no Yaiba))

- **ID:** `muzan-kibutsuji-kny-901`
- **Alias:** El Rey de los Demonios / El Progenitor
- **Saga / Versión:** Fortaleza Dimensional Infinita / Cuenta Regresiva | Forma de Combate Final
- **Tier Base:** `7-B` (TierRank: 14)
- **APEX-Ki:** `936 Unidades` (PowerKey: 1481)
- **Source Ki Canónico (Dragon Ball):** `400 Unidades (Scouter)`
- **Ataques Principales:** Onda de Choque de Espasmo Neuronal
- **Remates (Ultimates):** Infusión de Sangre Asesina
- **Formas Registradas:** Disfraz Humano (x1), Forma de Combate Final (x1), Armadura de Bebé Gigante (x1)
- **HaxTags:** `Regeneración Instantánea Extrema`, `Sangre Venenosa Celular`, `7 Corazones y 5 Cerebros Móviles`, `Onda de Choque Neuronal`
- **Debilidades:** Luz solar directa (lo desintegra por completo), espadas Nichirin Carmesí y la Respiración Solar pura de Yoriichi.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 24. Iron Man (Tony Stark) (Marvel Comics)

- **ID:** `iron-man-marvel-908`
- **Alias:** El Vengador Dorado / El Hombre de Hierro
- **Saga / Versión:** Avengers / Model Prime / Godkiller | Pico Tecnológico (Armadura Godbuster / Bleeding Edge)
- **Tier Base:** `Tier 7-A Físico | Tier 2-C con Armaduras Buster Cósmicas` (TierRank: 15)
- **APEX-Ki:** `1.75 Mil` (PowerKey: 1582)
- **Source Ki Canónico (Dragon Ball):** `800 Unidades (Scouter)`
- **Ataques Principales:** Unibeam Máximo
- **Remates (Ultimates):** Despliegue Godbuster / Armadura Celestial
- **Formas Registradas:** Bleeding Edge (Armadura Base) (x1), Armadura Godbuster (x1)
- **HaxTags:** `Nanotecnología Adaptativa`, `Rayo Unibeam`, `IA de Análisis Predictivo de Combate`, `Armaduras Buster Específicas`
- **Debilidades:** Cuerpo humano vulnerable dentro de la armadura; vulnerable a virus informáticos alienígenas o EMP de grado dimensional.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 25. Thor Odinson (Marvel Comics)

- **ID:** `thor-marvel-907`
- **Alias:** El Dios del Trueno / El Rey de Asgard
- **Saga / Versión:** Rune King Thor / All-Black Thor | Rey Thor (Fuerza de Odín / Runas de Yggdrasil)
- **Tier Base:** `2-C` (TierRank: 39)
- **APEX-Ki:** `1.17 Trillones` (PowerKey: 4006)
- **Source Ki Canónico (Dragon Ball):** `10.00 Trillones (Scouter)`
- **Ataques Principales:** Llamada del Trueno Celestial, Anti-Force
- **Remates (Ultimates):** God-Blast (Ráfaga de Dios)
- **Formas Registradas:** Thor Vengador (Estado Base / Mjolnir) (x1), Rune King Thor (x1)
- **HaxTags:** `Fuerza de Odín / Magia de las Runas`, `God-Blast (Ráfaga de la Esencia Divina)`, `Manipulación Absoluta del Clima y la Tormenta`, `Encantamiento del Mjolnir (Solo los Dignos)`
- **Debilidades:** Furia de Guerrero (Warrior's Madness), un estado de locura berserker que multiplica su fuerza pero le hace perder la razón táctica.
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*

### 26. Batman (Bruce Wayne) (DC Comics)

- **ID:** `batman-dc-910`
- **Alias:** El Caballero de la Noche / El Detective Supremo
- **Saga / Versión:** Liga de la Justicia / Batman Endgame | Pico Táctico (Armadura Hellbat / Plan de Contingencia)
- **Tier Base:** `Tier 9-A Físico | Tier 2-C con Hellbat y Tiempo de Preparación` (TierRank: 5)
- **APEX-Ki:** `47 Unidades` (PowerKey: 572)
- **Source Ki Canónico (Dragon Ball):** `40 Unidades (Scouter)`
- **Ataques Principales:** Batarang de Kryptonita / Granadas de Frecuencia Sónica
- **Remates (Ultimates):** Despliegue de la Armadura Hellbat
- **Formas Registradas:** Caballero Oscuro (Batsuit Estándar) (x1), Armadura Hellbat (x1)
- **HaxTags:** `Tiempo de Preparación Supremo (Prep-Time)`, `Armadura Hellbat`, `Planes de Contingencia de la Liga de la Justicia (Kryptonita, EMP, Nanites)`
- **Debilidades:** Es biológicamente un ser humano mortal; la armadura Hellbat drena su propio metabolismo celular si se usa por tiempo prolongado.
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 27. Superman (Clark Kent / Kal-El) (DC Comics)

- **ID:** `superman-dc-909`
- **Alias:** El Hombre de Acero / El Último Hijo de Krypton
- **Saga / Versión:** Post-Crisis / Rebirth | Pico de Poder Solar (Radiación Solar Amarilla)
- **Tier Base:** `2-C` (TierRank: 39)
- **APEX-Ki:** `1.17 Trillones` (PowerKey: 4006)
- **Source Ki Canónico (Dragon Ball):** `10.00 Trillones (Scouter)`
- **Ataques Principales:** Visión Calorífica Solar, Aliento Ártico
- **Remates (Ultimates):** Infinite Mass Punch (Puñetazo de Masa Infinita), Solar Flare (Super llamarada Solar)
- **Formas Registradas:** Superman (Clark Kent / Kal-El) (Estado Base) (x1), Superman (Traje Clásico) (x1), Superman Sun-Dipped (x1)
- **HaxTags:** `Fisiología Kryptoniana Solar`, `Visión Calorífica del Big Bang`, `Aliento Ártico de Cero Absoluto`, `Bio-Matriz de Invulnerabilidad`
- **Debilidades:** Radiación de Kryptonita verde (debilita y envenena sus células), magia mística pura y radiación de soles rojos.
- **Puntos Pendientes:** *Estadisticas numericas en plantilla temporal*

### 28. Omni-Man (Nolan Grayson) (Invincible)

- **ID:** `omni-man-invincible-905`
- **Alias:** El Conquistador de Viltrum
- **Saga / Versión:** Invasión Viltrumita / Guerra Viltrumita | Pico de Poder (Guerra Viltrumita)
- **Tier Base:** `5-B` (TierRank: 26)
- **APEX-Ki:** `620.10 Mil` (PowerKey: 2693)
- **Source Ki Canónico (Dragon Ball):** `530.000 Unidades (Scouter)`
- **Ataques Principales:** Vuelo de Ignición Atmosférica
- **Remates (Ultimates):** Embestida Partenúcleos de Viltrum
- **Formas Registradas:** Omni-Man (Nolan Grayson) (Estado Base) (x1), Héroe de la Tierra (x1), Emperador de Viltrum (x1)
- **HaxTags:** `Fisiología Viltrumita Pura`, `Vuelo Espacial MFTL`, `Longevidad de Milenios`, `Respiración Contenida de 2 Semanas en el Vacío`
- **Debilidades:** Vulnerabilidad a frecuencias sonoras extremadamente agudas que desestabilizan el oído interno viltrumita, calor estelar del centro del sol y el virus del Azote (Scourge Virus).
- **Puntos Pendientes:** *Campo synergies ausente o vacio, Estadisticas numericas en plantilla temporal*


---

## 10. Esquema de Contexto Reducido e Instrucciones para Laguna S 2.1

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "APEX Simulation Context Schema for Laguna S 2.1",
  "description": "Esquema de entrada compacto que el modelo narrativo Laguna S 2.1 debe recibir para sintetizar combates sin alucinaciones.",
  "rules": {
    "rule1_narrativeCannotOverrideVerdict": "La narrativa no puede alterar el ganador ni la dificultad determinada por el veredicto del motor.",
    "rule2_sourceKiIsDragonBallOnly": "El campo sourceKi pertenece exclusivamente a Dragon Ball; los demas universos usan APEX-Ki monotonico.",
    "rule3_apexKiIsUniversal": "Todos los personajes tienen un APEX-Ki numerico proporcional a su Tier y multiplicadores de forma.",
    "rule4_haxDoesNotAutomaticallyChangeTier": "Las habilidades de Hax modulan la estrategia y duracion pero no alteran el APEX-Ki base salvo eventos de anulacion explicitos.",
    "rule5_oracleEventsMustBeAuthorized": "Laguna solo puede narrar eventos Oraculo si aparecen con status authorized o triggered en el snapshot."
  },
  "simulationContext": {
    "engineVersion": "APEX v2.2",
    "scenario": {
      "mapId": "string (slug del escenario)",
      "mapName": "string (nombre visible)",
      "ruleset": "string (ej. apex-standard | strict-canon)",
      "collateralMode": "string (ej. standard | contained | unbounded)",
      "allowFusion": "boolean",
      "allowExternalItems": "boolean",
      "allowPreparation": "boolean",
      "allowNonCanonical": "boolean"
    },
    "combatants": [
      {
        "combatantId": "string (identificador unico de combate)",
        "name": "string (nombre del luchador)",
        "universe": "string (franquicia)",
        "saga": "string (saga cronologica)",
        "version": "string (version)",
        "activeState": "string (forma activa)",
        "tierExact": "string (ej. 7-B, 4-A)",
        "apexKiDisplay": "string (ej. 29.4 B, 351.00 Mil)",
        "canonicalScouterKiDisplay": "string | null (ej. 2.600 Unidades (Scouter))",
        "stats": {
          "ap": "number (0 a 1)",
          "speed": "number (0 a 1)",
          "durability": "number (0 a 1)",
          "battleIQ": "number (0 a 1)",
          "haxReliability": "number (0 a 1)"
        },
        "allowedAbilities": [
          {
            "id": "string",
            "name": "string",
            "type": "super | ultimate | passive",
            "staminaCost": "number",
            "description": "string"
          }
        ],
        "specialMechanics": [
          "string"
        ],
        "weaknesses": [
          "string"
        ],
        "synergies": [
          "string"
        ]
      }
    ],
    "oracleEvents": [
      {
        "id": "string",
        "name": "string",
        "phase": "number (1 a 4)",
        "triggered": "boolean",
        "type": "string"
      }
    ],
    "combatLog": [
      {
        "turn": "number",
        "phase": "number (1 a 4)",
        "phaseName": "string",
        "actorId": "string",
        "targetId": "string",
        "actionName": "string",
        "hpChangeA": "number",
        "staminaChangeA": "number",
        "hpChangeB": "number",
        "staminaChangeB": "number",
        "mapEffect": "string",
        "result": "hit | counter | decisive-hit"
      }
    ],
    "verdict": {
      "winnerTeamId": "string",
      "winnerName": "string",
      "winnerTierExact": "string",
      "loserName": "string",
      "loserTierExact": "string",
      "difficulty": "No-Diff | Low-Diff | Mid-Diff | High-Diff | Extreme-Diff",
      "finalMapState": "string",
      "finalBiometrics": [
        {
          "combatantId": "string",
          "hp": "number",
          "stamina": "number",
          "vitalStatus": "string"
        }
      ]
    }
  },
  "lagunaExpectedOutputSchema": {
    "narrative": "string (Cronica completa estructurada en 4 fases)",
    "phaseSummaries": "Array<{ phase: number, summary: string }>",
    "tacticalNotes": "string[]",
    "consistencyWarnings": "string[]",
    "suggestedNextActions": "string[]"
  }
}
```

---

## 11. Reglas Inviolables de Simulación y Entrega a Laguna S 2.1

1. **Consistencia Absoluta de Resultados:** La crónica narrativa debe reflejar exactamente el ganador y la dificultad calculados por APEX.
2. **Uso Exclusivo de Habilidades Registradas:** Laguna no puede añadir técnicas fuera de `allowedAbilities`.
3. **Integridad de Transformaciones:** Los cambios de forma solo ocurren en los turnos indicados por el `combatLog`.
4. **Telemetría Biometría Obligatoria:** Cada fase de la narrativa debe concluir con el bloque `||BIOMETRICS|...` reflejando HP y Stamina exactos.
