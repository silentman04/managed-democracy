// Helldivers 2 Enemy Parts & Anatomy Catalog
// Source: helldivers.wiki.gg

const ENEMIES_DATA = {
    "Bile Titan":  {
                       "faction":  "Terminid",
                       "main":  6500,
                       "main_av":  4,
                       "fire":  1.7,
                       "parts":  [
                                     [
                                         "Head",
                                         1500,
                                         4,
                                         0.95,
                                         1.0,
                                         0.5,
                                         true
                                     ],
                                     [
                                         "Torso Armor",
                                         1500,
                                         4,
                                         1.0,
                                         1.0,
                                         0.5,
                                         false
                                     ],
                                     [
                                         "Inner Flesh (under torso armor)",
                                         null,
                                         0,
                                         0.7,
                                         1.0,
                                         0.5,
                                         true
                                     ],
                                     [
                                         "Butt Armor",
                                         3500,
                                         4,
                                         1.0,
                                         1.0,
                                         0.5,
                                         true
                                     ],
                                     [
                                         "Upper/Lower Bile Sac",
                                         750,
                                         0,
                                         1.0,
                                         1.0,
                                         0.5,
                                         false
                                     ],
                                     [
                                         "Underside (belly)",
                                         4000,
                                         2,
                                         0.8,
                                         0.6,
                                         0,
                                         true
                                     ],
                                     [
                                         "Claw",
                                         1000,
                                         4,
                                         0,
                                         1.0,
                                         0.5,
                                         false
                                     ],
                                     [
                                         "Leg Armor",
                                         1000,
                                         4,
                                         1.0,
                                         1.0,
                                         0.5,
                                         false
                                     ],
                                     [
                                         "Leg Flesh (after armor broken, +2,000 constitution)",
                                         4000,
                                         4,
                                         1.0,
                                         1.0,
                                         0.5,
                                         true
                                     ]
                                 ]
                   },
    "Spore Burst Bile Titan":  {
                                   "faction":  "Terminid",
                                   "main":  7000,
                                   "main_av":  4,
                                   "fire":  1.7,
                                   "parts":  [
                                                 [
                                                     "Head",
                                                     2500,
                                                     4,
                                                     0.95,
                                                     1.0,
                                                     0.5,
                                                     true
                                                 ],
                                                 [
                                                     "Torso Armor",
                                                     1500,
                                                     4,
                                                     1.0,
                                                     0,
                                                     0.5,
                                                     false
                                                 ],
                                                 [
                                                     "Inner Flesh (under torso armor)",
                                                     null,
                                                     0,
                                                     0.7,
                                                     1.0,
                                                     0.5,
                                                     true
                                                 ],
                                                 [
                                                     "Butt Armor",
                                                     3500,
                                                     4,
                                                     1.0,
                                                     1.0,
                                                     0.5,
                                                     true
                                                 ],
                                                 [
                                                     "Upper/Lower Spore Sac",
                                                     1000,
                                                     0,
                                                     1.0,
                                                     1.0,
                                                     0.5,
                                                     false
                                                 ],
                                                 [
                                                     "Underside (belly)",
                                                     4000,
                                                     2,
                                                     0.8,
                                                     0.6,
                                                     0,
                                                     true
                                                 ],
                                                 [
                                                     "Claw",
                                                     1000,
                                                     4,
                                                     0,
                                                     0,
                                                     0.5,
                                                     false
                                                 ],
                                                 [
                                                     "Leg Armor",
                                                     1000,
                                                     4,
                                                     1.0,
                                                     1.0,
                                                     0.5,
                                                     false
                                                 ],
                                                 [
                                                     "Leg Flesh (after armor broken, +2,000 constitution)",
                                                     4000,
                                                     4,
                                                     1.0,
                                                     1.0,
                                                     0.5,
                                                     true
                                                 ]
                                             ]
                               },
    "Charger":  {
                    "faction":  "Terminid",
                    "main":  2400,
                    "main_av":  4,
                    "fire":  1.5,
                    "parts":  [
                                  [
                                      "Head",
                                      1200,
                                      4,
                                      0.75,
                                      0.7,
                                      0.25,
                                      true
                                  ],
                                  [
                                      "Torso Armor",
                                      800,
                                      4,
                                      0.85,
                                      1.0,
                                      0.25,
                                      false
                                  ],
                                  [
                                      "Inner Flesh (under torso armor)",
                                      null,
                                      1,
                                      0.3,
                                      3.0,
                                      1.0,
                                      true
                                  ],
                                  [
                                      "Underside",
                                      null,
                                      2,
                                      1.0,
                                      1.0,
                                      1.0,
                                      true
                                  ],
                                  [
                                      "Rear Armor Plates",
                                      2200,
                                      4,
                                      0.75,
                                      0.75,
                                      1.0,
                                      true
                                  ],
                                  [
                                      "Butt",
                                      950,
                                      0,
                                      0.8,
                                      1.5,
                                      0.25,
                                      true
                                  ],
                                  [
                                      "Claw",
                                      500,
                                      4,
                                      0.7,
                                      0.7,
                                      1.0,
                                      false
                                  ],
                                  [
                                      "Front Leg Armor",
                                      800,
                                      4,
                                      0.7,
                                      0.6,
                                      0.25,
                                      false
                                  ],
                                  [
                                      "Leg Flesh (after armor broken)",
                                      800,
                                      2,
                                      0.7,
                                      0.5,
                                      0.25,
                                      true
                                  ]
                              ]
                },
    "Charger Behemoth":  {
                             "faction":  "Terminid",
                             "main":  3000,
                             "main_av":  4,
                             "fire":  1.5,
                             "parts":  [
                                           [
                                               "Head",
                                               1600,
                                               4,
                                               1.0,
                                               0.7,
                                               0.25,
                                               true
                                           ],
                                           [
                                               "Torso Armor",
                                               1000,
                                               4,
                                               0.85,
                                               1.0,
                                               0.25,
                                               false
                                           ],
                                           [
                                               "Inner Flesh (under torso armor)",
                                               null,
                                               1,
                                               0.3,
                                               3.0,
                                               1.0,
                                               true
                                           ],
                                           [
                                               "Underside",
                                               null,
                                               2,
                                               1.0,
                                               1.0,
                                               1.0,
                                               true
                                           ],
                                           [
                                               "Rear Armor Plates",
                                               2200,
                                               4,
                                               0.75,
                                               0.75,
                                               1.0,
                                               true
                                           ],
                                           [
                                               "Butt",
                                               950,
                                               0,
                                               1.0,
                                               0.5,
                                               0.25,
                                               true
                                           ],
                                           [
                                               "Claw",
                                               500,
                                               4,
                                               0.7,
                                               0.7,
                                               1.0,
                                               false
                                           ],
                                           [
                                               "Front Leg Armor",
                                               1000,
                                               4,
                                               0.8,
                                               0.6,
                                               0.25,
                                               false
                                           ],
                                           [
                                               "Leg Flesh (after armor broken)",
                                               800,
                                               2,
                                               0.7,
                                               0.5,
                                               0.25,
                                               true
                                           ]
                                       ]
                         },
    "Impaler":  {
                    "faction":  "Terminid",
                    "main":  4000,
                    "main_av":  4,
                    "fire":  1.7,
                    "parts":  [
                                  [
                                      "Head (face, when exposed)",
                                      1250,
                                      1,
                                      0.75,
                                      1.5,
                                      0,
                                      true
                                  ],
                                  [
                                      "Tentacle Armor",
                                      null,
                                      4,
                                      0.75,
                                      1.0,
                                      0,
                                      false
                                  ],
                                  [
                                      "Tentacle Flesh",
                                      500,
                                      1,
                                      0.7,
                                      0.5,
                                      0,
                                      false
                                  ],
                                  [
                                      "Crest Armor",
                                      1000,
                                      4,
                                      0.8,
                                      0.75,
                                      0,
                                      false
                                  ],
                                  [
                                      "Torso Armor",
                                      1000,
                                      4,
                                      0.75,
                                      0.75,
                                      0,
                                      false
                                  ],
                                  [
                                      "Inner Flesh (under torso armor)",
                                      null,
                                      0,
                                      0.9,
                                      1.5,
                                      1.0,
                                      true
                                  ],
                                  [
                                      "Underside",
                                      null,
                                      2,
                                      1.0,
                                      1.5,
                                      1.0,
                                      true
                                  ],
                                  [
                                      "Rear Armor Plates",
                                      1000,
                                      4,
                                      0.75,
                                      0.75,
                                      0,
                                      false
                                  ],
                                  [
                                      "Butt",
                                      1100,
                                      1,
                                      0.85,
                                      1.4,
                                      0,
                                      false
                                  ],
                                  [
                                      "Leg Armor",
                                      1000,
                                      4,
                                      0.7,
                                      0.5,
                                      0,
                                      false
                                  ],
                                  [
                                      "Leg Flesh",
                                      1000,
                                      0,
                                      0.7,
                                      0.5,
                                      0,
                                      true
                                  ]
                              ]
                },
    "Hive Lord":  {
                      "faction":  "Terminid",
                      "main":  150000,
                      "main_av":  5,
                      "fire":  1.7,
                      "parts":  [
                                    [
                                        "Crown",
                                        150000,
                                        10,
                                        0,
                                        0.25,
                                        1.0,
                                        false
                                    ],
                                    [
                                        "Jaws",
                                        150000,
                                        6,
                                        0,
                                        0.5,
                                        1.0,
                                        false
                                    ],
                                    [
                                        "Mandible",
                                        10000,
                                        6,
                                        0,
                                        0.5,
                                        1.0,
                                        false
                                    ],
                                    [
                                        "Mouth",
                                        150000,
                                        2,
                                        0,
                                        1.0,
                                        1.0,
                                        false
                                    ],
                                    [
                                        "Dorsal/Sterna Plate Armor",
                                        15000,
                                        5,
                                        0,
                                        0.1,
                                        0.25,
                                        false
                                    ],
                                    [
                                        "Inner Flesh (under plates)",
                                        150000,
                                        2,
                                        0,
                                        1.0,
                                        1.0,
                                        false
                                    ],
                                    [
                                        "Fin",
                                        5000,
                                        5,
                                        0,
                                        0.25,
                                        0.5,
                                        false
                                    ]
                                ]
                  },
    "Dragonroach":  {
                        "faction":  "Terminid",
                        "main":  6500,
                        "main_av":  4,
                        "fire":  1.7,
                        "parts":  [
                                      [
                                          "Head",
                                          1500,
                                          4,
                                          0.95,
                                          1.0,
                                          0.5,
                                          true
                                      ],
                                      [
                                          "Carapace",
                                          1500,
                                          4,
                                          1.0,
                                          1.0,
                                          0.5,
                                          false
                                      ],
                                      [
                                          "Claw",
                                          1000,
                                          4,
                                          0,
                                          1.0,
                                          0.5,
                                          false
                                      ],
                                      [
                                          "Wing",
                                          1500,
                                          0,
                                          1.0,
                                          0.3,
                                          0.5,
                                          true
                                      ],
                                      [
                                          "Thorax/Abdomen Sac",
                                          750,
                                          0,
                                          1.0,
                                          1.0,
                                          0.5,
                                          false
                                      ],
                                      [
                                          "Thorax Innards",
                                          3000,
                                          4,
                                          0.8,
                                          0.6,
                                          1.0,
                                          true
                                      ],
                                      [
                                          "Abdomen Armor",
                                          3500,
                                          4,
                                          1.0,
                                          1.0,
                                          0.5,
                                          true
                                      ],
                                      [
                                          "Leg Armor",
                                          1000,
                                          4,
                                          0,
                                          1.0,
                                          0.5,
                                          false
                                      ]
                                  ]
                    },
    "Factory Strider":  {
                            "faction":  "Automaton",
                            "main":  10000,
                            "main_av":  4,
                            "fire":  1.0,
                            "parts":  [
                                          [
                                              "Head Armor",
                                              1500,
                                              5,
                                              1.0,
                                              0.3,
                                              0.4,
                                              false
                                          ],
                                          [
                                              "Head Body (eye, after armor)",
                                              2500,
                                              4,
                                              1.0,
                                              1.0,
                                              0.4,
                                              true
                                          ],
                                          [
                                              "Cannon Turret",
                                              900,
                                              5,
                                              1.0,
                                              0,
                                              0.5,
                                              false
                                          ],
                                          [
                                              "Fusion Gatling Gun",
                                              300,
                                              3,
                                              1.0,
                                              0,
                                              1.0,
                                              false
                                          ],
                                          [
                                              "Front/Side/Rear Armor",
                                              2200,
                                              5,
                                              1.0,
                                              0.3,
                                              0.4,
                                              false
                                          ],
                                          [
                                              "Front Engine Weakspot",
                                              2000,
                                              4,
                                              1.0,
                                              1.0,
                                              0.4,
                                              false
                                          ],
                                          [
                                              "Rear Engine Weakspot",
                                              1500,
                                              3,
                                              0.75,
                                              1.0,
                                              0.4,
                                              false
                                          ],
                                          [
                                              "Leg Armor",
                                              1500,
                                              5,
                                              1.0,
                                              0.3,
                                              0.4,
                                              false
                                          ],
                                          [
                                              "Leg Assembly (+2000 constitution)",
                                              3500,
                                              4,
                                              1.0,
                                              0.4,
                                              0.4,
                                              true
                                          ],
                                          [
                                              "Belly Panel (+1200 constitution)",
                                              2400,
                                              3,
                                              1.0,
                                              1.0,
                                              0.4,
                                              true
                                          ]
                                      ]
                        },
    "Vox Engine":  {
                       "faction":  "Automaton",
                       "main":  9000,
                       "main_av":  5,
                       "fire":  1.0,
                       "parts":  [
                                     [
                                         "Sarcophagus",
                                         7000,
                                         5,
                                         0.6,
                                         1.0,
                                         1.0,
                                         false
                                     ],
                                     [
                                         "Torso",
                                         9000,
                                         5,
                                         0,
                                         1.0,
                                         0.6,
                                         false
                                     ],
                                     [
                                         "Cannon",
                                         3500,
                                         4,
                                         0.7,
                                         0,
                                         0.6,
                                         false
                                     ],
                                     [
                                         "Missile Launcher",
                                         1200,
                                         3,
                                         0.6,
                                         1.0,
                                         1.0,
                                         false
                                     ],
                                     [
                                         "Minigun",
                                         300,
                                         3,
                                         1.0,
                                         0,
                                         1.0,
                                         false
                                     ],
                                     [
                                         "Speaker",
                                         800,
                                         3,
                                         0,
                                         0,
                                         1.0,
                                         false
                                     ],
                                     [
                                         "Vent",
                                         300,
                                         1,
                                         0.6,
                                         1.0,
                                         1.0,
                                         false
                                     ],
                                     [
                                         "Torso Flap",
                                         500,
                                         3,
                                         0,
                                         1.0,
                                         0.6,
                                         false
                                     ],
                                     [
                                         "Trackpod Latch",
                                         2000,
                                         3,
                                         0,
                                         0.5,
                                         0.6,
                                         false
                                     ],
                                     [
                                         "Track",
                                         3000,
                                         4,
                                         0,
                                         0.6,
                                         0.6,
                                         false
                                     ]
                                 ]
                   },
    "Hulk (Bruiser)":  {
                           "faction":  "Automaton",
                           "main":  1800,
                           "main_av":  4,
                           "fire":  1.5,
                           "parts":  [
                                         [
                                             "Head (eye)",
                                             250,
                                             4,
                                             0.25,
                                             1.0,
                                             1.0,
                                             true
                                         ],
                                         [
                                             "Arm",
                                             500,
                                             4,
                                             0.7,
                                             0.8,
                                             1.0,
                                             false
                                         ],
                                         [
                                             "Leg (+500 constitution)",
                                             1000,
                                             4,
                                             0.8,
                                             0.8,
                                             1.0,
                                             false
                                         ],
                                         [
                                             "Heatsink (back vent)",
                                             900,
                                             1,
                                             0.6,
                                             0.6,
                                             0,
                                             true
                                         ]
                                     ]
                       },
    "War Strider":  {
                        "faction":  "Automaton",
                        "main":  3500,
                        "main_av":  4,
                        "fire":  1.0,
                        "parts":  [
                                      [
                                          "Torso",
                                          3300,
                                          4,
                                          1.0,
                                          0.8,
                                          0,
                                          true
                                      ],
                                      [
                                          "Eye",
                                          500,
                                          4,
                                          0.7,
                                          0.3,
                                          1.0,
                                          true
                                      ],
                                      [
                                          "Fusion Cannon",
                                          500,
                                          4,
                                          0.8,
                                          0,
                                          0.4,
                                          false
                                      ],
                                      [
                                          "Grenade Launcher",
                                          400,
                                          4,
                                          0.7,
                                          0,
                                          1.0,
                                          false
                                      ],
                                      [
                                          "Crotch",
                                          1800,
                                          4,
                                          1.0,
                                          1.0,
                                          1.0,
                                          true
                                      ],
                                      [
                                          "Heatsink",
                                          700,
                                          4,
                                          0.7,
                                          0.7,
                                          1.0,
                                          true
                                      ],
                                      [
                                          "Hip Joint",
                                          750,
                                          3,
                                          0.8,
                                          0.5,
                                          1.0,
                                          true
                                      ],
                                      [
                                          "Leg",
                                          1500,
                                          4,
                                          0.8,
                                          0.8,
                                          0.4,
                                          true
                                      ],
                                      [
                                          "Greave",
                                          150,
                                          5,
                                          0,
                                          0.5,
                                          1.0,
                                          false
                                      ]
                                  ]
                    },
    "Berserker":  {
                      "main":  750,
                      "main_av":  1,
                      "faction":  "Automaton",
                      "fire":  1,
                      "parts":  [
                                    [
                                        "Head",
                                        125,
                                        1,
                                        0,
                                        1,
                                        0,
                                        true
                                    ],
                                    [
                                        "Waist (Glowing Midsection)",
                                        300,
                                        1,
                                        0.4,
                                        1,
                                        0,
                                        true
                                    ],
                                    [
                                        "Chest Armor",
                                        500,
                                        2,
                                        0.7,
                                        1,
                                        0,
                                        false
                                    ],
                                    [
                                        "Chainsaw Arm",
                                        250,
                                        1,
                                        0.5,
                                        0.5,
                                        0,
                                        false
                                    ]
                                ]
                  },
    "Warrior":  {
                    "main":  300,
                    "main_av":  1,
                    "faction":  "Terminid",
                    "fire":  1,
                    "parts":  [
                                  [
                                      "Head",
                                      80,
                                      1,
                                      0.3,
                                      1,
                                      0,
                                      true
                                  ],
                                  [
                                      "Torso",
                                      200,
                                      1,
                                      0.4,
                                      1,
                                      0,
                                      false
                                  ],
                                  [
                                      "Legs",
                                      80,
                                      1,
                                      0.2,
                                      0.5,
                                      0,
                                      false
                                  ]
                              ]
                },
    "Stalker":  {
                    "main":  500,
                    "main_av":  1,
                    "faction":  "Terminid",
                    "fire":  1,
                    "parts":  [
                                  [
                                      "Head",
                                      175,
                                      1,
                                      0.5,
                                      1,
                                      0,
                                      true
                                  ],
                                  [
                                      "Torso",
                                      350,
                                      1,
                                      0.5,
                                      1,
                                      0,
                                      false
                                  ],
                                  [
                                      "Claws/Legs",
                                      150,
                                      1,
                                      0.4,
                                      0.5,
                                      0,
                                      false
                                  ]
                              ]
                },
    "Bile Spewer":  {
                        "main":  750,
                        "main_av":  2,
                        "faction":  "Terminid",
                        "fire":  1.2,
                        "parts":  [
                                      [
                                          "Head (Armored)",
                                          300,
                                          3,
                                          0.8,
                                          1,
                                          0,
                                          true
                                      ],
                                      [
                                          "Mouth",
                                          200,
                                          1,
                                          0.5,
                                          1,
                                          0,
                                          true
                                      ],
                                      [
                                          "Bile Sac (Butt)",
                                          750,
                                          0,
                                          0.9,
                                          1,
                                          0,
                                          true
                                      ],
                                      [
                                          "Legs",
                                          250,
                                          2,
                                          0.6,
                                          0.5,
                                          0,
                                          false
                                      ]
                                  ]
                    },
    "Trooper / Raider":  {
                             "main":  125,
                             "main_av":  1,
                             "faction":  "Automaton",
                             "fire":  1,
                             "parts":  [
                                           [
                                               "Head",
                                               50,
                                               1,
                                               0,
                                               1,
                                               0,
                                               true
                                           ],
                                           [
                                               "Torso",
                                               100,
                                               1,
                                               0.3,
                                               1,
                                               0,
                                               false
                                           ],
                                           [
                                               "Limbs",
                                               60,
                                               1,
                                               0.2,
                                               0.5,
                                               0,
                                               false
                                           ]
                                       ]
                         },
    "Harvester":  {
                      "main":  4500,
                      "main_av":  4,
                      "faction":  "Illuminate",
                      "fire":  1.5,
                      "parts":  [
                                    [
                                        "Dome Energy Shield",
                                        2000,
                                        0,
                                        0,
                                        0,
                                        0,
                                        false
                                    ],
                                    [
                                        "Optical Sensor Eye",
                                        600,
                                        4,
                                        0.4,
                                        1,
                                        0.5,
                                        true
                                    ],
                                    [
                                        "Heavy Beam Turret",
                                        800,
                                        3,
                                        0.7,
                                        0.4,
                                        0.4,
                                        false
                                    ],
                                    [
                                        "Tripod Leg Joint",
                                        1200,
                                        3,
                                        0.6,
                                        0.5,
                                        0.3,
                                        true
                                    ],
                                    [
                                        "Armored Carapace",
                                        2500,
                                        5,
                                        0.9,
                                        0.5,
                                        0.5,
                                        false
                                    ]
                                ]
                  },
    "Votary":  {
                   "main":  250,
                   "main_av":  1,
                   "faction":  "Illuminate",
                   "fire":  1,
                   "parts":  [
                                 [
                                     "Energy Ward",
                                     150,
                                     0,
                                     0,
                                     0,
                                     0,
                                     false
                                 ],
                                 [
                                     "Head",
                                     60,
                                     1,
                                     0,
                                     1,
                                     0,
                                     true
                                 ],
                                 [
                                     "Torso",
                                     180,
                                     1,
                                     0.2,
                                     1,
                                     0,
                                     false
                                 ],
                                 [
                                     "Blades / Arms",
                                     80,
                                     1,
                                     0.2,
                                     0.5,
                                     0,
                                     false
                                 ]
                             ]
               },
    "Devastator":  {
                       "main":  600,
                       "main_av":  2,
                       "faction":  "Automaton",
                       "fire":  1,
                       "parts":  [
                                     [
                                         "Head",
                                         125,
                                         1,
                                         0,
                                         1,
                                         0,
                                         true
                                     ],
                                     [
                                         "Torso Chest",
                                         400,
                                         2,
                                         0.6,
                                         1,
                                         0,
                                         false
                                     ],
                                     [
                                         "Waist / Pelvis",
                                         350,
                                         2,
                                         0.5,
                                         1,
                                         0,
                                         true
                                     ],
                                     [
                                         "Arm",
                                         200,
                                         2,
                                         0.5,
                                         0.5,
                                         0,
                                         false
                                     ],
                                     [
                                         "Leg",
                                         300,
                                         2,
                                         0.5,
                                         0.5,
                                         0,
                                         false
                                     ]
                                 ]
                   },
    "Heavy Devastator":  {
                             "main":  600,
                             "main_av":  2,
                             "faction":  "Automaton",
                             "fire":  1,
                             "parts":  [
                                           [
                                               "Head",
                                               125,
                                               1,
                                               0,
                                               1,
                                               0,
                                               true
                                           ],
                                           [
                                               "Ballistic Shield",
                                               500,
                                               4,
                                               1,
                                               0,
                                               1,
                                               false
                                           ],
                                           [
                                               "Backpack Ammo",
                                               250,
                                               1,
                                               0.5,
                                               1,
                                               0,
                                               true
                                           ],
                                           [
                                               "Torso Chest",
                                               400,
                                               2,
                                               0.6,
                                               1,
                                               0,
                                               false
                                           ],
                                           [
                                               "Waist / Pelvis",
                                               350,
                                               2,
                                               0.5,
                                               1,
                                               0,
                                               true
                                           ]
                                       ]
                         },
    "Hive Guard":  {
                       "main":  450,
                       "main_av":  2,
                       "faction":  "Terminid",
                       "fire":  1,
                       "parts":  [
                                     [
                                         "Head Shield",
                                         250,
                                         3,
                                         0.75,
                                         0.5,
                                         0,
                                         false
                                     ],
                                     [
                                         "Head Under Shield",
                                         80,
                                         1,
                                         0.3,
                                         1,
                                         0,
                                         true
                                     ],
                                     [
                                         "Torso",
                                         250,
                                         2,
                                         0.5,
                                         1,
                                         0,
                                         false
                                     ],
                                     [
                                         "Legs",
                                         100,
                                         1,
                                         0.3,
                                         0.5,
                                         0,
                                         false
                                     ]
                                 ]
                   },
    "Brood Commander":  {
                            "main":  1000,
                            "main_av":  2,
                            "faction":  "Terminid",
                            "fire":  1,
                            "parts":  [
                                          [
                                              "Head",
                                              250,
                                              2,
                                              0.7,
                                              1,
                                              0,
                                              true
                                          ],
                                          [
                                              "Torso",
                                              400,
                                              2,
                                              0.6,
                                              1,
                                              0,
                                              false
                                          ],
                                          [
                                              "Front Leg",
                                              200,
                                              2,
                                              0.5,
                                              0.5,
                                              0,
                                              false
                                          ],
                                          [
                                              "Rear Leg",
                                              150,
                                              2,
                                              0.5,
                                              0.5,
                                              0,
                                              false
                                          ]
                                      ]
                        },
    "Gunship":  {
                    "main":  700,
                    "main_av":  3,
                    "faction":  "Automaton",
                    "fire":  1,
                    "parts":  [
                                  [
                                      "Engine (1 of 4)",
                                      400,
                                      3,
                                      0.8,
                                      0.5,
                                      0,
                                      true
                                  ],
                                  [
                                      "Cockpit / Nose",
                                      400,
                                      3,
                                      0.6,
                                      1,
                                      0,
                                      true
                                  ],
                                  [
                                      "Fuselage",
                                      700,
                                      3,
                                      0.8,
                                      1,
                                      0,
                                      false
                                  ],
                                  [
                                      "Thrusters",
                                      300,
                                      3,
                                      0.7,
                                      0.5,
                                      0,
                                      false
                                  ]
                              ]
                },
    "Scout Strider":  {
                          "main":  250,
                          "main_av":  3,
                          "faction":  "Automaton",
                          "fire":  1,
                          "parts":  [
                                        [
                                            "Trooper Pilot (exposed)",
                                            80,
                                            0,
                                            0,
                                            1,
                                            0,
                                            true
                                        ],
                                        [
                                            "Armored Faceplate",
                                            400,
                                            3,
                                            0.8,
                                            0,
                                            0.5,
                                            false
                                        ],
                                        [
                                            "Leg Joint",
                                            200,
                                            2,
                                            0.5,
                                            1,
                                            0,
                                            true
                                        ]
                                    ]
                      },
    "Watcher":  {
                    "main":  350,
                    "main_av":  2,
                    "faction":  "Illuminate",
                    "fire":  1,
                    "parts":  [
                                  [
                                      "Shield Bubble",
                                      200,
                                      0,
                                      0,
                                      0,
                                      0,
                                      false
                                  ],
                                  [
                                      "Sensor Eye",
                                      80,
                                      1,
                                      0,
                                      1,
                                      0,
                                      true
                                  ],
                                  [
                                      "Thrusters",
                                      150,
                                      2,
                                      0.4,
                                      0.5,
                                      0,
                                      false
                                  ]
                              ]
                },
    "Shredder Tank":  {
                          "main":  1500,
                          "main_av":  5,
                          "faction":  "Automaton",
                          "fire":  1,
                          "parts":  [
                                        [
                                            "Turret Heatsink (rear)",
                                            750,
                                            3,
                                            0.8,
                                            1,
                                            0.5,
                                            true
                                        ],
                                        [
                                            "Quad Autocannon Turret",
                                            750,
                                            5,
                                            1,
                                            0,
                                            0.5,
                                            false
                                        ],
                                        [
                                            "Hull Front/Sides",
                                            1500,
                                            5,
                                            1,
                                            0,
                                            0.5,
                                            false
                                        ],
                                        [
                                            "Tracks",
                                            800,
                                            3,
                                            0.7,
                                            0.5,
                                            0.5,
                                            false
                                        ]
                                    ]
                      },
    "Overseer":  {
                     "main":  2200,
                     "main_av":  3,
                     "faction":  "Illuminate",
                     "fire":  1.2,
                     "parts":  [
                                   [
                                       "Kinetic Energy Shield",
                                       1000,
                                       0,
                                       0,
                                       0,
                                       0,
                                       false
                                   ],
                                   [
                                       "Head",
                                       300,
                                       3,
                                       0.5,
                                       1,
                                       0,
                                       true
                                   ],
                                   [
                                       "Psionic Robes / Torso",
                                       1200,
                                       3,
                                       0.7,
                                       1,
                                       0.3,
                                       false
                                   ],
                                   [
                                       "Warp Staff / Focus",
                                       400,
                                       2,
                                       0.4,
                                       0.5,
                                       0,
                                       false
                                   ]
                               ]
                 },
    "Annihilator Tank":  {
                             "main":  1500,
                             "main_av":  5,
                             "faction":  "Automaton",
                             "fire":  1,
                             "parts":  [
                                           [
                                               "Turret Heatsink (rear)",
                                               750,
                                               3,
                                               0.8,
                                               1,
                                               0.5,
                                               true
                                           ],
                                           [
                                               "Heavy Cannon Turret",
                                               800,
                                               5,
                                               1,
                                               0,
                                               0.5,
                                               false
                                           ],
                                           [
                                               "Hull Front/Sides",
                                               1500,
                                               5,
                                               1,
                                               0,
                                               0.5,
                                               false
                                           ],
                                           [
                                               "Tracks",
                                               800,
                                               3,
                                               0.7,
                                               0.5,
                                               0.5,
                                               false
                                           ]
                                       ]
                         },
    "Hunter":  {
                   "main":  160,
                   "main_av":  0,
                   "faction":  "Terminid",
                   "fire":  1,
                   "parts":  [
                                 [
                                     "Head",
                                     50,
                                     0,
                                     0,
                                     1,
                                     0,
                                     true
                                 ],
                                 [
                                     "Torso",
                                     100,
                                     0,
                                     0,
                                     1,
                                     0,
                                     false
                                 ],
                                 [
                                     "Wings/Legs",
                                     50,
                                     0,
                                     0,
                                     0.5,
                                     0,
                                     false
                                 ]
                             ]
               },
    "Nursing Spewer":  {
                           "main":  750,
                           "main_av":  1,
                           "faction":  "Terminid",
                           "fire":  1.2,
                           "parts":  [
                                         [
                                             "Head",
                                             250,
                                             2,
                                             0.7,
                                             1,
                                             0,
                                             true
                                         ],
                                         [
                                             "Spew Sac (Butt)",
                                             750,
                                             0,
                                             0.9,
                                             1,
                                             0,
                                             true
                                         ],
                                         [
                                             "Legs",
                                             250,
                                             1,
                                             0.5,
                                             0.5,
                                             0,
                                             false
                                         ]
                                     ]
                       },
    "Great Council Overseer":  {
                                   "main":  7500,
                                   "main_av":  4,
                                   "faction":  "Illuminate",
                                   "fire":  1.5,
                                   "parts":  [
                                                 [
                                                     "Bastion Shield Matrix",
                                                     3500,
                                                     0,
                                                     0,
                                                     0,
                                                     0,
                                                     false
                                                 ],
                                                 [
                                                     "Crown of Psionics",
                                                     1500,
                                                     4,
                                                     0.5,
                                                     1,
                                                     0.4,
                                                     true
                                                 ],
                                                 [
                                                     "Inner Psionic Core",
                                                     2500,
                                                     3,
                                                     0.6,
                                                     1,
                                                     0.2,
                                                     true
                                                 ],
                                                 [
                                                     "Heavy Carapace Plates",
                                                     4000,
                                                     5,
                                                     0.9,
                                                     0.5,
                                                     0.5,
                                                     false
                                                 ]
                                             ]
                               },
    "Outcast":  {
                    "main":  400,
                    "main_av":  1,
                    "faction":  "Illuminate",
                    "fire":  1,
                    "parts":  [
                                  [
                                      "Cloak Barrier",
                                      200,
                                      0,
                                      0,
                                      0,
                                      0,
                                      false
                                  ],
                                  [
                                      "Head",
                                      75,
                                      1,
                                      0,
                                      1,
                                      0,
                                      true
                                  ],
                                  [
                                      "Torso",
                                      250,
                                      1,
                                      0.2,
                                      1,
                                      0,
                                      false
                                  ],
                                  [
                                      "Limbs",
                                      100,
                                      1,
                                      0.2,
                                      0.5,
                                      0,
                                      false
                                  ]
                              ]
                },
    "Summoner":  {
                     "main":  3000,
                     "main_av":  4,
                     "faction":  "Illuminate",
                     "fire":  1.2,
                     "parts":  [
                                   [
                                       "Warp Barrier Array",
                                       1500,
                                       0,
                                       0,
                                       0,
                                       0,
                                       false
                                   ],
                                   [
                                       "Core Focus Prism",
                                       800,
                                       2,
                                       0.3,
                                       1,
                                       0,
                                       true
                                   ],
                                   [
                                       "Generator Hull",
                                       2000,
                                       4,
                                       0.8,
                                       0.8,
                                       0.4,
                                       false
                                   ]
                               ]
                 },
    "Scavenger":  {
                      "main":  80,
                      "main_av":  0,
                      "faction":  "Terminid",
                      "fire":  1,
                      "parts":  [
                                    [
                                        "Head",
                                        30,
                                        0,
                                        0,
                                        1,
                                        0,
                                        true
                                    ],
                                    [
                                        "Body",
                                        60,
                                        0,
                                        0,
                                        1,
                                        0,
                                        false
                                    ]
                                ]
                  },
    "Adept":  {
                  "main":  650,
                  "main_av":  1,
                  "faction":  "Illuminate",
                  "fire":  1,
                  "parts":  [
                                [
                                    "Phase Barrier",
                                    400,
                                    0,
                                    0,
                                    0,
                                    0,
                                    false
                                ],
                                [
                                    "Head",
                                    100,
                                    1,
                                    0,
                                    1,
                                    0,
                                    true
                                ],
                                [
                                    "Torso",
                                    350,
                                    1,
                                    0.3,
                                    1,
                                    0,
                                    false
                                ],
                                [
                                    "Legs",
                                    150,
                                    1,
                                    0.2,
                                    0.5,
                                    0,
                                    false
                                ]
                            ]
              },
    "Hulk (Scorcher)":  {
                            "main":  1800,
                            "main_av":  4,
                            "faction":  "Automaton",
                            "fire":  1.5,
                            "parts":  [
                                          [
                                              "Head (eye)",
                                              250,
                                              4,
                                              0.25,
                                              1,
                                              1,
                                              true
                                          ],
                                          [
                                              "Flamethrower Arm",
                                              600,
                                              4,
                                              0.7,
                                              0.8,
                                              1,
                                              false
                                          ],
                                          [
                                              "Saw Arm",
                                              500,
                                              4,
                                              0.7,
                                              0.8,
                                              1,
                                              false
                                          ],
                                          [
                                              "Leg (+500 constitution)",
                                              1000,
                                              4,
                                              0.8,
                                              0.8,
                                              1,
                                              false
                                          ],
                                          [
                                              "Heatsink (back vent)",
                                              900,
                                              1,
                                              0.6,
                                              0.6,
                                              0,
                                              true
                                          ]
                                      ]
                        }
};
