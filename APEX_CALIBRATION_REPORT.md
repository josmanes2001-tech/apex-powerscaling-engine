# 📊 INFORME OFICIAL DE MIGRACIÓN Y CALIBRACIÓN DE DATOS — APEX POWER SCALING ENGINE

**Fecha de Ejecución**: 2026-09-03T19:43:09.186Z
**Total de Fichas Procesadas**: 769
**Estado del Auditor (Audit Mode)**: 0 Errores Críticos | 0 Advertencias Bloqueantes

## 1. RESUMEN DE LAS 16 FRANQUICIAS

| Franquicia | Total | APEX-Ki Calibrado | Burst-Ki | Hax Profiles | Confianza (H/M/L) | Errores |
|---|---|---|---|---|---|---|
| **Dragon Ball** | 352 | 352 | 352 | 0 | 63/289/0 | 0 |
| **Baki the Grappler** | 25 | 25 | 25 | 0 | 1/24/0 | 0 |
| **Jujutsu Kaisen** | 41 | 41 | 41 | 3 | 3/38/0 | 0 |
| **One Punch Man** | 36 | 36 | 36 | 0 | 0/36/0 | 0 |
| **Marvel Comics** | 40 | 40 | 40 | 1 | 1/39/0 | 0 |
| **DC Comics** | 38 | 38 | 38 | 0 | 0/38/0 | 0 |
| **My Hero Academia** | 38 | 38 | 38 | 0 | 0/38/0 | 0 |
| **Invincible** | 28 | 28 | 28 | 0 | 0/28/0 | 0 |
| **The Boys** | 14 | 14 | 14 | 0 | 0/14/0 | 0 |
| **JoJo's Bizarre Adventure** | 39 | 39 | 39 | 0 | 0/39/0 | 0 |
| **Hunter x Hunter** | 38 | 38 | 38 | 0 | 0/38/0 | 0 |
| **Demon Slayer (Kimetsu no Yaiba)** | 31 | 31 | 31 | 0 | 0/31/0 | 0 |
| **Chainsaw Man** | 23 | 23 | 23 | 0 | 0/23/0 | 0 |
| **Record of Ragnarok** | 24 | 24 | 24 | 0 | 0/24/0 | 0 |
| **Spy x Family** | 1 | 1 | 1 | 0 | 0/1/0 | 0 |
| **APEX Original / Híbrido** | 1 | 1 | 1 | 0 | 0/1/0 | 0 |

## 2. METODOLOGÍA DE CALIBRACIÓN Y DESACOPLAMIENTO

1. **Desacoplamiento Total de Velocidad**: Los factores cinemáticos (FTL, Hipersónico, Relativista) ya no multiplican el APEX-Ki base. Modifican exclusivamente `initiativeModifier`, `dodgeModifier`, `hitChanceModifier` y `comboWindowModifier`.
2. **Aislamiento de Hax**: Habilidades espaciales (Infinity de Gojo), dominios y ataques que ignoran durabilidad (World Slash de Sukuna) se modelan en `haxProfile` con `doesNotIncrease: ["apexKi", "durabilityKi", "liftingStrength"]`.
3. **Forma Base Canónica**: El 100% de las 769 fichas poseen su forma base en el índice 0 con `id: "base"`, `category: "base"` y `apexKiMultiplier: 1.0`.
4. **Cero Falsa Precisión**: Se utilizan rangos (`apexKiRange: [min, max]`) y valores centrales redondeados.
5. **Trazabilidad de Dragon Ball**: `sourceKi` numérico existe exclusivamente en Dragon Ball con fuente canónica explícita (`sourceReference`). Para todos los personajes ajenos a Dragon Ball, `sourceKi` es estrictamente `null` con `sourceType: "cross_verse_estimate"`.

## 3. RANKINGS DE COMBATE DEL ROSTER

### 🏆 Top 30 en APEX-Ki Estable (Poder Sostenido)

1. **Molecule Man (Owen Reece)** (Marvel Comics) — **2.152.500.000.000.000.000.000 Ki** [Tier 1-C]
2. **Spectre** (DC Comics) — **1.533.000.000.000.000.000.000 Ki** [Tier 1-C]
3. **Jean Grey (Fuerza Fénix)** (Marvel Comics) — **1.386.000.000.000.000.000.000 Ki** [Tier 1-C]
4. **Anti-Monitor** (DC Comics) — **1.281.000.000.000.000.000.000 Ki** [Tier 1-C]
5. **Franklin Richards (Poder Completo Sin Restricciones)** (Marvel Comics) — **1.249.500.000.000.000.000.000 Ki** [Tier 1-C]
6. **Dr. Manhattan (Jon Osterman)** (DC Comics) — **1.071.000.000.000.000.000.000 Ki** [Tier 1-C]
7. **Scarlet Witch (Wanda Maximoff)** (Marvel Comics) — **984.900.000.000.000.000.000 Ki** [Tier 1-C]
8. **Zeno-Sama (Gran Zeno / Rey de Reyes)** (Dragon Ball) — **873.600.000.000.000.000.000 Ki** [Tier 1-C]
9. **Gran Sacerdote (Grand Priest / Dai Kaioshin)** (Dragon Ball) — **43.365.000.000.000.000.000 Ki** [Tier 2-A]
10. **Swamp Thing** (DC Comics) — **1.134.000.000.000.000 Ki** [Tier 2-B]
11. **Merus** (Dragon Ball) — **1.043.700.000.000.000 Ki** [Tier 2-B]
12. **Galactus** (Marvel Comics) — **746.550.000.000.000 Ki** [Tier 2-B]
13. **Amond** (Dragon Ball) — **741.300.000.000.000 Ki** [Tier 2-B]
14. **The Flash (Barry Allen / Wally West)** (DC Comics) — **212.100.000.000.000 Ki** [Tier 2-C]
15. **Reverse-Flash** (DC Comics) — **192.150.000.000.000 Ki** [Tier 2-C]
16. **Black Freezer (Manga de Dragon Ball Super — Saga de Granolah)** (Dragon Ball) — **183.750.000.000.000 Ki** [Tier 2-C]
17. **Arale Norimaki (Participante Oficial del Torneo DBM)** (Dragon Ball) — **182.700.000.000.000 Ki** [Tier 2-C]
18. **Superman (Clark Kent / Kal-El)** (DC Comics) — **165.900.000.000.000 Ki** [Tier 2-C]
19. **The Sentry (Robert Reynolds)** (Marvel Comics) — **161.700.000.000.000 Ki** [Tier 2-C]
20. **Champa** (Dragon Ball) — **158.550.000.000.000 Ki** [Tier 2-C]
21. **Gamma 1** (Dragon Ball) — **157.500.000.000.000 Ki** [Tier 2-C]
22. **Silver Surfer (Norrin Radd)** (Marvel Comics) — **154.350.000.000.000 Ki** [Tier 2-C]
23. **Thor Odinson** (Marvel Comics) — **145.950.000.000.000 Ki** [Tier 2-C]
24. **Moro** (Dragon Ball) — **141.750.000.000.000 Ki** [Tier 2-C]
25. **Darkseid (Uxas)** (DC Comics) — **136.500.000.000.000 Ki** [Tier 2-C]
26. **Green Lantern (Hal Jordan)** (DC Comics) — **136.500.000.000.000 Ki** [Tier 2-C]
27. **Gamma 2** (Dragon Ball) — **135.450.000.000.000 Ki** [Tier 2-C]
28. **Doctor Fate** (DC Comics) — **132.300.000.000.000 Ki** [Tier 2-C]
29. **Sinestro** (DC Comics) — **132.300.000.000.000 Ki** [Tier 2-C]
30. **Granolah** (Dragon Ball) — **129.150.000.000.000 Ki** [Tier 2-C]

### ⚡ Top 30 en Velocidad e Iniciativa Táctica

1. **Androide 8** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
2. **Bacterian** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
3. **Chichi** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
4. **Comandante Red** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
5. **Coronel Murasaki** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
6. **Coronel Silver** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
7. **Cymbal** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
8. **Drum** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
9. **Emperador Pilaf** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
10. **General Blue** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
11. **Giran** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
12. **Jackie Chun** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
13. **Krilin (Dragon Ball Clásico)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
14. **Mai (Escuadrón Pilaf)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
15. **Mai y Shu (Subordinados de Pilaf)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
16. **Mayor Metallitron** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
17. **Nam** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
18. **Piccolo Jr.** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
19. **Ranfan** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
20. **Rey Demonio Piccolo (Daimaoh)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
21. **Shen (Kami-sama)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
22. **Shu (Escuadrón Pilaf)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
23. **Son Gohan (Abuelo)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
24. **Son Goku (23º Tenkaichi Budokai)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
25. **Son Goku (Niño)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
26. **Tambourine** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
27. **Tao Pai Pai** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
28. **Ten Shin Han (Dragon Ball Clásico)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
29. **Yamcha (Dragon Ball Clásico)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**
30. **Anciano Kaio-shin (Ro Kaio-shin)** (Dragon Ball) — Iniciativa: **1x** | Evasión: **1x**

### 🛡️ Top 30 en Durabilidad Física / Energética

1. **Molecule Man (Owen Reece)** (Marvel Comics) — Durabilidad: **2.152.500.000.000.000.000.000**
2. **Spectre** (DC Comics) — Durabilidad: **1.533.000.000.000.000.000.000**
3. **Jean Grey (Fuerza Fénix)** (Marvel Comics) — Durabilidad: **1.386.000.000.000.000.000.000**
4. **Anti-Monitor** (DC Comics) — Durabilidad: **1.281.000.000.000.000.000.000**
5. **Franklin Richards (Poder Completo Sin Restricciones)** (Marvel Comics) — Durabilidad: **1.249.500.000.000.000.000.000**
6. **Dr. Manhattan (Jon Osterman)** (DC Comics) — Durabilidad: **1.071.000.000.000.000.000.000**
7. **Scarlet Witch (Wanda Maximoff)** (Marvel Comics) — Durabilidad: **984.900.000.000.000.000.000**
8. **Zeno-Sama (Gran Zeno / Rey de Reyes)** (Dragon Ball) — Durabilidad: **873.600.000.000.000.000.000**
9. **Gran Sacerdote (Grand Priest / Dai Kaioshin)** (Dragon Ball) — Durabilidad: **43.365.000.000.000.000.000**
10. **Swamp Thing** (DC Comics) — Durabilidad: **1.134.000.000.000.000**
11. **Merus** (Dragon Ball) — Durabilidad: **1.043.700.000.000.000**
12. **Galactus** (Marvel Comics) — Durabilidad: **746.550.000.000.000**
13. **Amond** (Dragon Ball) — Durabilidad: **741.300.000.000.000**
14. **The Flash (Barry Allen / Wally West)** (DC Comics) — Durabilidad: **212.100.000.000.000**
15. **Reverse-Flash** (DC Comics) — Durabilidad: **192.150.000.000.000**
16. **Black Freezer (Manga de Dragon Ball Super — Saga de Granolah)** (Dragon Ball) — Durabilidad: **183.750.000.000.000**
17. **Arale Norimaki (Participante Oficial del Torneo DBM)** (Dragon Ball) — Durabilidad: **182.700.000.000.000**
18. **Superman (Clark Kent / Kal-El)** (DC Comics) — Durabilidad: **165.900.000.000.000**
19. **The Sentry (Robert Reynolds)** (Marvel Comics) — Durabilidad: **161.700.000.000.000**
20. **Champa** (Dragon Ball) — Durabilidad: **158.550.000.000.000**
21. **Gamma 1** (Dragon Ball) — Durabilidad: **157.500.000.000.000**
22. **Silver Surfer (Norrin Radd)** (Marvel Comics) — Durabilidad: **154.350.000.000.000**
23. **Thor Odinson** (Marvel Comics) — Durabilidad: **145.950.000.000.000**
24. **Moro** (Dragon Ball) — Durabilidad: **141.750.000.000.000**
25. **Darkseid (Uxas)** (DC Comics) — Durabilidad: **136.500.000.000.000**
26. **Green Lantern (Hal Jordan)** (DC Comics) — Durabilidad: **136.500.000.000.000**
27. **Gamma 2** (Dragon Ball) — Durabilidad: **135.450.000.000.000**
28. **Doctor Fate** (DC Comics) — Durabilidad: **132.300.000.000.000**
29. **Sinestro** (DC Comics) — Durabilidad: **132.300.000.000.000**
30. **Granolah** (Dragon Ball) — Durabilidad: **129.150.000.000.000**
