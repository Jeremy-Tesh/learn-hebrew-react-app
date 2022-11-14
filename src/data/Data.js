export const data = {
  elements: [
    {
      number: 0,
      img: require("../assets/box/1-0.png"),
      xpos: 1,
      ypos: 1,
      item: [
        {
          title: "Row 10",
          description:
          "This row, row 8 and row 9 cover the vowel pointings that accompany the first root letter of those verbs that do not have preformtives (or the second root letter, if the first is missing).",
        },
        ],
        
    },

    {
      number: 1,
      img: require("../assets/box/2-0.png"),
      xpos: 1,
      ypos: 2,
      item: [
        {
          title: "Row 9",
          description:
          "This row, row 8 and row 10 cover the vowel pointings that accompany the first root letter of those verbs that do not have preformtives ( or the second root letter, if the first is missing).",
        },
        
        ],
    },

    {
      number: 2,
      img: require("../assets/box/3-0.png"),
      xpos: 1,
      ypos: 3,
      item: [
        {
          title: "Row 8",
          description:
          "This row, row 9 and row 10 cover the vowel pointings that accompany the first root letter of those verbs that do not have preformtives ( or the second root letter, if the first is missing).",
        },
        
        ],
    },

    {
      number: 3,
      img: require("../assets/box/4-0.png"),
      xpos: 1,
      ypos: 4,
    
      item: [
        {
          title: "Row 7",
          description:
          "This row features the preformatives of hithpael stem.",
        },
        
        ],
    },

    {
      number: 4,
      img: require("../assets/box/5-0.png"),
      xpos: 1,
      ypos: 5,
      item: [
        {
          title: "Row 6",
          description:
          "This row presents the vowel pointings that accompany the verbal preformative מ and the inseparable preposition מ",
        },
        
        ],
    },

    {
      number: 5,
      img: require("../assets/box/6-0.png"),
      xpos: 1,
      ypos: 6,
      item: [
        {
          title: "Row 5",
          description:
          "This row presents the vowel pointings that accompany the verbal preformative ה and two more options, namely, definite article ה and interrogative particle ה",
        },
        
        ],
    },

    {
      number: 6,
      img: require("../assets/box/7-0.png"),
      xpos: 1,
      ypos: 7,
      item: [
        {
          title: "Row 4",
          description:
          "This row presents the preformative vowels for נ and the diagnostics associated with them.",
        }
        ],
    },

    {
      number: 7,
      img: require("../assets/box/8-0.png"),
      xpos: 1,
      ypos: 8,
      item: [
        {
          title: "Row 3",
          description:
          "This row presents the vowel pointings that accompany the verbal preformative א י ת.",
        
        },
        
        ],
    },
    
    {
      number: 8,
      img: require("../assets/box/9-0.png"),
      xpos: 1,
      ypos: 9,
      item: [
        {
          title: "Row 2",
          description:
          "The green colored boxes of this row feature the verbal sufformatives.",
        },
        
        ],
      
    },

    {
      number: 9,
      img: require("../assets/box/10-0.png"),
      xpos: 1,
      ypos: 10,
      item: [
        {
          title: "Row 1",
          description:
          "The red colored boxes of this row present the objective suffixes that are attached to verbs",
        },
        
        ],
      
    },

/** 1st row number 10*/
    
{
  img: require("../assets/box/1-1.png"),
  xpos: 2,
  ypos: 1,
  item: [
        {
        option: "Perfect",
        stem: "Qal",
        clue: "objective suffix",
        description:
          "Qal stem in its perfect conjugation can have Shewa (ְ ) as its vowel, if the verb has objective suffix. \n Eg.נְתָנ֣וֹ",
         
        moreExamples: [
          ["נְתָנ֣וֹ", "נתן", "He gave him"],
          ["שְׁלָחַ֥נִי", "שׁלח ", "He sent me"],
          ["יְדַעְתִּ֣יךָֽ", "ידע", "I know you"],
          
        ],
        },
        {
        option: "Passive Participle",
        stem: "Qal",
        clue: "V2-וּ or ֻ",
        description:
          "Qal stem in its perfect conjugation can have Shewa (ְ ) as its vowel, if the verb has objective suffix. \n Eg. נְתָנ֣וֹ",
         
        moreExamples: [
          ["בְּר֣וּךְ", "ברך", "blessed"],
          ["שְׂנוּאָ֣ה", "שׁנא ", "unloved"],
          ["מְשֻׁחִ֣ים", "משׁח", "anointed"],
          
          ],
        },
        ],
},
  
{
  img: require("../assets/box/1-2.png"),
  xpos: 3,
  ypos: 1,
  item: [
    {
        option: "Perfect",
        stem: "Qal",
        clue: " First root guttural and Second masculine plural or feminine plural",
        description:
          "Qal stem in its perfect conjugation can have hatef patach (ֲ) as the vowel of first root letter, if the verb has guttural letter in its first root and its mark of congruency is second person masculine or feminine plural. \n Eg.עֲשִׂיתֶֽם",
         
        moreExamples: [
          ["עֲשִׂיתֶֽם", "עשׂה", "You have done"],
          ["עֲבַרְתֶּ֖ם", "עבר", "You have come"],
          ["אֲמַרְתֶּ֑ם", "אמר", "You have spoken"],
          ["הֲלַכְתֶּ֔ם", "הלך", "You went"],
        ],
      },
      {
        option: "Imperative",
        stem: "Qal",
        clue: " First root guttural and Second masculine plural or feminine plural",
        description:
          " Qal stem in its imperative conjugation can have hatef patach (ֲ  ) as the vowel of first root letter, if the verb is first root guttural and second person masculine or feminine plural. \n Eg.עֲשׂ֖וּ",
         
        moreExamples: [
            ["עֲשׂ֖וּ", "עשׂה", "do"],
            ["עֲל֥וּ", "עלה", "go up"],
            ["עֲנ֣וּ", "ענה", "testify"],
          ],
      },
  ],
},

  
{
  img: require("../assets/box/1-13.png"),
  xpos: 14,
  ypos: 1,
  item: [
    {
      option: "Imperative",
      stem: "Piel",
      clue: "Second Root letter guttural",
      description:
        "Piel stem in its Imperative conjugation can have Qamets (ָ ) as the vowel of first root letter. \n Eg. גָּרֵ֛שׁ ",
       
      moreExamples: [
        ["גָּרֵ֛שׁ ", "גרשׁ", " Cast out "],
        ["בָּרֵ֤ךְ ", "ברך", "Bless"],
        ["בָאֵ֖ר", "באר", "Make it plain"],
      ],
    },
    {
        option: "Infinitive construct",
        stem: "Qal",
        clue: "V2-Holem Waw",
        description:
          "Qal stem in its Infinitive construct conjugation can have Qamets (ָ ) as the vowel of first root letter. \n Eg. בְּרָן ",
         
        moreExamples: [
          ["בְּרָן ", "רנן", "when sing"],
        
          
        ],
      },
  ],
},


/** 2nd row number 9*/
    
{
  img: require("../assets/box/2-1.png"),
  xpos: 2,
  ypos: 2,
  item: [
    {
        option: "Perfect",
        stem: "Qal",
        clue: "Second Masculine Plural/Feminine",
        description:
          "Qal stem in its perfect conjugation can have Shewa (ְ ) as its vowel. \n Eg.יְדַעְתֶּ֔ם",
         
        moreExamples: [
          ["יְדַעְתֶּ֔ם", "ידע", "You know"],
          ["הֱיִיתֶ֖ם", "היה", "You were"],
          ["שְׁמַרְתֶּ֖ם", "שׁמר", "You kept"],
          
        ],
     },

      
  ],
},

{
  img: require("../assets/box/2-2.png"),
  xpos: 3,
  ypos: 2,

  item: [
    {
        option: "Perfect",
        stem: "Pual",
        clue: "V2 is a-class vowel ",
        description:
          "Pual stem in its Perfect conjugation can have holem   (ֹ ֹ) as the vowel of first root letter. \n Eg. שֹׂרָ֑ף ",
         
        moreExamples: [
          ["שֹׂרָ֑ף", "שׂרף", "It was burned up"],
          ["זֹרָ֔עוּ", "זרע", "They are sown"],
          ["קֹרָ֥א", "קרא", "He was called"],
            
        ],
      },
      
  ],
},

{
  img: require("../assets/box/2-11.png"),
  xpos:12,
  ypos: 2,
  item: [
    {
      option: "Perfect",
      stem: "Piel",
      clue: "Mostly Regular Verb",
      description:
        "Piel stem in its Perfect conjugation can have Hireq ( ִ  ) as the vowel of first root letter. \n Eg.שַׁבְתֶּם֙ N.B. Verbs with first root letter Nun can be confused with this form in their Nifal perfect first common plural form.",
      moreExamples: [
        ["דִּבֶּ֤ר", "דבר", "He had told"],
        ["צִוָּ֥ה", "צוה", "He commanded"],
        ["שִׁלַּח֙", "שׁלח", "He sent"],
        ["מִלֵּ֨א", "מלא", "He has filled"],
        
      ],
    },
    
  ],
},

{
  img: require("../assets/box/2-12.png"),
  xpos: 13,
  ypos: 2,
  item: [
    {
        option: "Imperative",
        stem: "Piel",
        clue: "Mostly regular verbs",
        description:
          "Piel stem in its perfect conjugation can have Patach (ַ ) as the vowel of first root letter. \n Eg.שַׁבְתֶּם֙",
         
        moreExamples: [
          ["דַּבֵּֽר", "דבר", "Speak on"],
          ["הַֽלְל֖וּ", "הלל", "Praise"],
          ["שַׁלַּ֤ח", "שׁלח", "Go"],
          ["זַמְּר֣וּ", "זמר", "Sing"],
        ],
      },
      {
        option: "Infinitive Construct or Infinitive Absolute",
        stem: "Piel",
        clue: " Inseperable prepositions",
        description:
          "Piel stem in its infinitive construct or absolute conjugation can have Patach (ַ ) as the vowel of first root letter. \n Eg. לְשַׁחֵ֥ת ",
         
        moreExamples: [
            ["לְשַׁחֵ֥ת", "שׁחת", "to destroy"],
            ["לְדַבֵּ֣ר", "דבר", "to speak"],
            ["דַבֵּ֥ר", "דבר", "speak"],
          ],
      },
  ],
},

{
  img: require("../assets/box/2-13.png"),
  xpos: 14,
  ypos: 2,
  item: [
    {
      option: "Participle Passive",
      stem: "Qal",
      clue: "V2-Shureq",
      description:
        "Qal stem in its Participle Passive conjugation can have Qamets (ָ ) as the vowel of first root letter. \n Eg. כָּת֖וּב ",
       
      moreExamples: [
        ["כָּת֖וּב", "כתב", "written"],
        ["בָּר֤וּךְ", "ברך", "blessed"],
        ["אָר֤וּר", "ארר", "cursed"],
        ["בָּח֔וּר", "בחר", "chosen"],
      ],
    },
    {
        option: "Infinitive Absolute",
        stem: "Qal",
        clue: "V2-Holem Waw",
        description:
          "Qal stem in its Infinitive Absolute conjugation can have Qamets (ָ ) as the vowel of first root letter. \n Eg.הָל֣וֹךְ",
         
        moreExamples: [
          ["הָל֣וֹךְ", "הלך", "continued"],
          ["יָדֹ֨עַ", "ידע", "know"],
          ["שָׁפ֔וֹט", "שׁפט", "judge"],
          ["רָא֣וֹ", "ראה", "see"],
        ],
      },
  ],
},


    /** 3rd row number 8 */
    
    {
      img: require("../assets/box/3-1.png"),
      xpos: 2,
      ypos: 3,
      item: [
        {
            option: "Imperative",
            stem: "Qal",
            clue: "Mostly strong",
            description:
              "Qal stem in its imperative conjugation can have Shewa (ְ ) as its vowel. \n Eg. שְׁמַ֣ע ",
             
            moreExamples: [
              ["שְׁמַ֣ע", "שׁמע", "Obey"],
              ["רְאֵה֙", "ראה", "See"],
              ["תְּנ֨וּ", "נתן", "Give"],
              
            ],
         },
    
         {
            option: "Infinitive Construct",
            stem: "Qal",
            clue: "Mostly strong",
            description:
              "Qal stem in its infinitive construct conjugation can have Shewa (ְ ) as its vowel. \n Eg.לִרְא֖וֹת",
             
            moreExamples: [
              ["לִרְא֖וֹת", "ראה", "to see"],
              ["לִשְׁמֹ֕ר", "שׁמע", "to guard"],
              ["לִקְרֹ֖א", "קרא", "to call upon"],
              
            ],
         },
          
          
      ],
    },

    {
      img: require("../assets/box/3-2.png"),
      xpos: 3,
      ypos: 3,
      item: [
        {
            option: "Participle Active",
            stem: "Qal",
            clue: "Mostly strong",
            description:
              "Qal stem in its participle active conjugation can have holem  ( ֹ ) as its vowel. \n Eg.יֹשֵׁ֥ב",
             
            moreExamples: [
              ["יֹשֵׁ֥ב", "ישׁב", "dwell"],
              ["עֹשֶֽׂה", "עשׂה", "do"],
              ["הֹלֵ֥ךְ", "הלך", "go"],
              
            ],
         },
        
         {
            option: "Imperative",
            stem: "Qal",
            clue: "Biconsonantal or Geminate",
            description:
              "Qal stem in its imperative conjugation can have holem  ( ֹ ) as its vowel, if the verb is biconsonantal or geminate. \n Eg. בֹּֽא ",
             
            moreExamples: [
              ["בֹּֽא", "בוא", "Go"],
              ["סֹ֥בּוּ ", "סבב", "March around"],
              ["בֹּ֥זּוּ", "בזז", "Plunder"],
            ],
         },
      ],
    },

    {
      img: require("../assets/box/3-3.png"),
      xpos: 4,
      ypos: 3,
      item: [
        {
            option: "Infinitive Construct",
            stem: "Qal",
            clue: "Binconsonantal",
            description:
              "Qal stem in its Infinitive Construct conjugation can have holem waw  ( וֹ ) as its vowel, if the verb is biconsonantal. \n Eg.לָב֛וֹא", 
             
            moreExamples: [
              ["לָב֛וֹא", "בוא", "to go back"],
              ["בּ֔וֹשׁ", "בושׁ", "embarrassed"],
            ],
         },
        {
            option: "Imperative",
            stem: "Qal",
            clue: "Binconsonantal",
            description:
              "Qal stem in its imperative conjugation can have holem waw  ( וֹ ) as its vowel, if the verb is biconsonantal. \n Eg. בּ֖וֹא ",
             
            moreExamples: [
              ["בּ֖וֹא ", "בוא", "come"],
              ["בּ֣וֹשִׁי ", "בושׁ", "be ashamed"],
              
            ],
         },
    
        {
            option: "Perfect",
            stem: "Qal",
            clue: "Binconsonantal",
            description:
              "Qal stem in its imperative conjugation can have holem waw  ( וֹ ) as its vowel, if the verb is biconsonantal. \n Eg. א֑וֹר ",
             
            moreExamples: [
              ["א֑וֹר ", "אור", "it was light"],
              ["בּ֣וֹשָׁה", "בושׁ", "She has been ashamed"],
              
            ],
         },
    
         {
            option: "Participle",
            stem: "Qal",
            clue: "Binconsonantal",
            description:
              "Qal stem in its participle conjugation can have holem waw  ( וֹ ) as its vowel, if the verb is biconsonantal. \n Eg. בּוֹשִׁ֔ים",
             
            moreExamples: [
              ["בּוֹשִׁ֔ים", "בושׁ", "She has been ashamed"],
              
            ],
         },
      ],
    },


    {
      img: require("../assets/box/3-4.png"),
      xpos: 5,
      ypos: 3,
      item: [
        {
          option: "Imperative",
          stem: "Qal",
          clue: "Binconsonantal",
          description:
            "Qal stem in its perfect conjugation can have shureq  ( וּ ) as its vowel, if the verb is biconsonantal. \n Eg.שׁ֥וּב",
           
          moreExamples: [
            ["שׁ֖וּבִי", "שׁוב", "Return"],
            ["קוּ֚ם", "קום", "Arise"],
            ["גּ֚וּר", "גור", "Sojourn"],      
          ],
        },
        
        {
          option: "Infinitive Construct",
          stem: "Qal",
          clue: "Binconsonantal",
          description:
            "Qal stem in its perfect conjugation can have shureq  ( וּ ) as its vowel, if the verb is biconsonantal. \n Eg.שׁ֥וּב",
           
          moreExamples: [
            ["שׁ֥וּב", "שׁוב", "to go back"],
            ["לָמ֥וּת", "מות", "to die"],
            ["לָק֣וּם", "קום", "to rise"],
            ["לָג֣וּר", "גור", "to sojourn"],      
          ],
        },
      ],
    },

    {
      img: require("../assets/box/3-5.png"),
      xpos: 6,
      ypos: 3,
      item: [
        {
          option: "Perfect",
          stem: "Pual",
          clue: "Strong Verbs",
          description:
            "The Pual stem in its perfect conjugation can have qibbuts (ֻ) as its vowel of its first root letter. \n Eg.קֻבַּ֥ר",
           
          moreExamples: [
            ["קֻבַּ֥ר", "קבר", " He was burried"],
            ["שֻׁלְּח֔וּ ", "שׁלח", "They were sent away"],
            ["גֻנַּ֖ב", "גנב", "It is stolen"],
           
          ],
        },
    {
          option: "Imperative",
          stem: "Qal",
          clue: "Biconsonantal",
          description:
            "The Qal stem in its imperative conjugation can have qibbuts (ֻ) as its vowel of its first root letter, if the verb is a biconsonantal. \n Eg.קֻבַּ֥ר",
           
          moreExamples: [
            ["קֻ֛מוּ", "קום", " Arise"],
            ["מֻ֗ת ", "מות", "Die"],
            ["פֻּ֣צוּ", "פוץ", "Disperse"],
           
          ],
        },
      ],
    },


    {
      img: require("../assets/box/3-9.png"),
      xpos: 10,
      ypos: 3,
      item: [
        {
          option: "Imperative",
          stem: "Qal",
          clue: "First Yod or Nun and the verb is connected to another word with maqqef",
          description:
            "The Qal stem in its imperative conjugation can have segol (ֶ ) as its vowel of its first root letter, if the first root letter is Yod or Nun. \n Eg.לָשֶׁ֣בֶת",
           
          moreExamples: [
            ["שֶׁב", "ישׁב", "dwell"], 
           ["תֶּן", "נתן", "Give"],
          ],
        },
    {
          option: "Infinitive",
          stem: "Qal",
          clue: "First Yod or Nun",
          description:
            "The Qal stem in its infinitive conjugation can have segol (ֶ ) as its vowel of its first root letter, if the first root letter is Yod. \n Eg.לָשֶׁ֣בֶת",
           
          moreExamples: [
            ["לָשֶׁ֣בֶת", "ישׁב", "dwelling"],
            ["מִלֶּֽדֶת", "ילד", "from bearing"],
            ["בְּרֶ֤דֶת", "ירד", "when coming down"],
           ["לָ֧תֶת", "נתן", "to give"],
          ],
        },
      ],
    },


    {
      img: require("../assets/box/3-10.png"),
      xpos: 11,
      ypos: 3,
      item: [
        {
            option: "Imperative",
            stem: "Qal",
            clue: " First root letter is Yod",
            description:
              "Qal stem in its imperative conjugation can have Tsere (ַ ) as the vowel of first root letter. \n Eg.צֵ֖א",
             
            moreExamples: [
              ["צֵ֖א", "יצא ", "Go out"],
              ["שֵֽׁב", "ישׁב", "Dwell"],
              ["רֵ֤ד", "ירד", "Go down"],
                
            ],
          },
          {
            option: "Infinitive Construct",
            stem: "Qal",
            clue: " First root letter is Nun",
            description:
              "Qal stem in its infinitive construct conjugation can have Tsere (ַ ) as the vowel of first root letter. \n Eg. לָתֵ֥ת",
             
            moreExamples: [
              ["לָתֵ֥ת", "יצא ", "to give"],
              ["לָשֵׂ֣את", "נשׂא", "to support"]
                
            ],
          },
    
          {
            option: "Perfect",
            stem: "Piel",
            clue: "Second root letter guttural",
            description:
              "Piel stem in its perfect conjugation can have Tsere (ַ ) as the vowel of first root letter. \n Eg.בֵּרַ֣כְתִּי",
             
            moreExamples: [
                ["בֵּרַ֣כְתִּי", "ברך", "I blessed"],
                ["מֵאֵ֖ן", "מאן", "He refuses"],
                ["אֵחַ֤ר", "אחר", "He delayed"],
              ],
          },
      ],
    },


    {
      img: require("../assets/box/3-11.png"),
      xpos: 12,
      ypos: 3,
      item: [
        {
          option: "Imperative",
          stem: "Qal",
          clue: "Mostly Regular Verb", 
          description:
          "Qal stem in its imperative conjugation can have Hireq ( ִ  ) as the vowel of first root letter. \n Eg.שִׁמְעוּ",
           
          moreExamples: [
            ["שִׁמְעוּ", "שׁמע", "Hear"],
            ["עִבְר֣וּ", "עבר", "Pass on "],
            ["קִבְר֥וּ", "קבר", "Bury"],
            ["עִבְד֖וּ", "עבד", "Serve"],       
          ],
        },
        {
          option: "Infinitive Construct",
          stem: "Qal",
          clue: "First Yod",
          description:
          "Qal stem in its infinitive Construct conjugation can have Hireq ( ִ  ) as the vowel of first root letter. \n Eg.לִדְתָּ֑הּ",
           
          moreExamples: [
            ["לִדְתָּ֑הּ", "ילד", "her labor"],
            ["לְיִרְאָ֥ה", "ירא", "to fear"],
            
          ],
        },
      ],
    },


    {
      img: require("../assets/box/3-12.png"),
      xpos: 13,
      ypos: 3,
      item: [
        {
            option: "Perfect",
            stem: "Qal",
            clue: "Biconsontal or Gemminate",
            description:
              "Qal stem in its perfect conjugation can have Patach (ַ ) as the vowel of first root letter. \n Eg.שַׁבְתֶּם֙",
             
            moreExamples: [
              ["שַׁבְתֶּם֙", "שׁוב", "You have turned back"],
              ["גַּ֔רְתִּי", "גור", "I have sojourned"],
              ["שַׂ֖מְתְּ", "שׂים", "You have set up"],
              ["שַׁתִּ֤י", "שׁית", "I have made"],
              ["סַבֹּתֶ֣ם", "סבב", "You surrounded"],
            ],
          },
          {
            option: "Imperative",
            stem: "Piel", 
            clue: "Second root letter with dagesh",
            description:
              "Qal stem in its imperative conjugation can have Patach (ַ ) as the vowel of first root letter. \n Eg.דַבֵּ֔ר",
             
            moreExamples: [
                ["דַבֵּ֔ר", "דבר", "Tell"],
                ["הַֽלְל֖וּ", "הלל", "Praise"],
                ["שַׁאֲלוּ", "שׁאל", "Ask"],
              ],
          },
          {
            option: "Imperative",
            stem: "Qal",
            clue: "Second root letter guttural",
            description:
              "Qal stem in its perfect conjugation can have Patach (ַ ) as the vowel of first root letter. \n Eg.שַׁבְתֶּם֙",
             
            moreExamples: [
                ["בַּחֲר֨וּ", "בחר", "Choose"],
                ["זַֽעֲקִי", "זעק", "Cry out"],
                ["שַׁאֲלוּ", "שׁאל", "Ask"],
              ],
          },
      ],
    },


    {
      img: require("../assets/box/3-13.png"),
      xpos: 14,
      ypos: 3,
      item: [
        {
          option: "Perfect",
          stem: "Qal",
          clue: "Perfect suffix",
          description:
            "Qal stem in its perfect conjugation can have Qamets (ָ ) as the vowel of first root letter. \n Eg.הָיָ֖ה",
           
          moreExamples: [
            ["הָיְתָ֥ה", "היה", "She became."],
            ["אָמַ֗ר", "אמר", "He said"],
            ["עָשׂ֣וּ", "עשׂה", "They made"],
            ["נָתַ֣תָּ", "נתן", "You gave"],
            ["רָאִ֛יתִי", "ראה", "I saw"],
          ],
        },
        {
            option: "Imperative",
            stem: "Qal",
            clue: "First Yod or First Nun",
            description:
              "Qal stem in its imperative conjugation can have Qamets (ָ ) as the vowel of first root letter. \n Eg.הָב֥וּ",
             
            moreExamples: [
              ["הָב֥וּ", "יהב", "Give"],
              ["שָׂ֣א", "נשׂא", "Lift"],
              
            ],
          },
        
      ],
    },

    /** 4th row number 7*/
  
    {
      img: require("../assets/box/4-1.png"),
      xpos: 2,
      ypos: 4,
      item: [
        {
            option: "Imperfect",
            stem: "Hithpael",
            clue: "-",
            description:
              "The Hithpael stem in its imperfect conjugation has the preformative את , if the verb is first person singular. \n Eg.אֶתְפַּלֵּ֥ל ",
             
            moreExamples: [
              ["אֶתְפַּלֵּ֥ל ", "פלל", "I will pray"],
              ["אֶתְהַלֵּ֥ךְ", "הלך", "I will walk"],      
            ],
          },
      ],
    },

    {
      img: require("../assets/box/4-2.png"),
      xpos: 3,
      ypos: 4,
      item: [
        {
            option: "Imperfect",
            stem: "Hithpael",
            clue: "-",
            description:
              "The Hithpael stem in its imperfect conjugation has the preformative נת , if the verb is first person plural. \n Eg.נִתְרָאֶ֥ה ",
             
            moreExamples: [
              ["נִתְרָאֶ֥ה ", "ראה", "Let us look"],
              ["נִֽתְחַזְּקָה֙", "חזק", "Let us use our strength"],      
            ],
          },
        
    
      ],
    },

    {
      img: require("../assets/box/4-3.png"),
      xpos: 4,
      ypos: 4,
      item: [
        {
          option: "Perfect",
          stem: "Hithpael",
          clue: "perfect suffix",
          description:
            "The Hithpael stem in its perfect conjugation has the preformative הת , if the verb is second person masculine or feminine and third person feminine. \n Eg.הִתְהַלְּכ֨וּ ",
           
          moreExamples: [
            ["הִתְהַלְּכ֨וּ ", "הלך", "They walked"],
            ["הִתְפַּלָּ֑לְתִּי", "פלל", "I prayed"],
            ["הִתְחַזַּ֔קְתִּי", "חזק", "I was strengthened"],      
          ],
        },
      ],
    },

    {
      img: require("../assets/box/4-4.png"),
      xpos: 5,
      ypos: 4,
      item: [
        {
            option: "Waw Consecutive",
            stem: "Hithpael",
            clue: "-",
            description:
              "The Hithpael stem in its Waw Consecutive conjugation has the preformative וָאת וַתת וַית , if the verb is preceded by vav with patach. \n Eg. וַיִּתְהַלֵּ֨ךְ ",
             
            moreExamples: [
              [" וַיִּתְהַלֵּ֨ךְ ", "הלך", "He walked"],
              ["וָֽאֶתְנַפַּ֞ל", "נפל", "I fell on the ground"],      
            ],
          },
        
    
      ],
    },

    {
      name: "none",
      xpos: 6,
      ypos: 4,
    },

    {
      name: "none",
      xpos: 10,
      ypos: 4,
    },

    {
      img: require("../assets/box/4-10.png"),
      xpos: 11,
      ypos: 4,
      item: [
        {
          option: "Participle",
          stem: "Hithpael",
          clue: " Participle suffix",
          description:
            "The Hithpael stem in its participle conjugation has the preformative מת. \n Eg.מִתְהַלֵּ֥ךְ",
           
          moreExamples: [
            ["מִתְהַלֵּ֥ךְ", "הלך", "walking"],
            ["מִֽתְנַבְּאִ֖ים", "נבא", "prophesying"],
            ["מִתְפַּלֵּ֔ל", "פלל", "praying"],      
          ],
        },
      ],
    },

    {
      img: require("../assets/box/4-11.png"),
      xpos: 12,
      ypos: 4,
      item: [
        {
          option: "Imperfect",
          stem: "Hithpael",
          clue: " Siblinat verbs",
          description:
            "The Hithpael stem in its imperfect conjugation has the preformative השׁת , if the verb is third person masculine or feminine. \n Eg.תִשְׂתָּרֵ֥ר",
           
          moreExamples: [
            ["תִשְׂתָּרֵ֥ר", "שׂרר", "You will make yourself a prince"],
            ["מִסְתַּתֵּ֥ר", "סתר", "hiding"],
            ["יִשְׁתַּמֵּ֞ר ", "שׁמר", "You have kept"],
            ["נִּצְטַדָּ֑ק ", "צדק", "We justify ourselves"],        
          ],
        },
      ],
    },

    {
      img: require("../assets/box/4-12.png"),
      xpos: 13,
      ypos: 4,
      item: [
        {
          option: "Imperfect",
          stem: "Hithpael",
          clue: " Second person or Thrid person feminine",
          description:
            "The Hithpael stem in its imperfect conjugation has the preformative ית , if the verb is third person masculine or feminine. \n Eg.יִתְהַלָּ֑כוּ",
           
          moreExamples: [
            ["יִתְהַלָּ֑כוּ", "הלך", "They walk."],
            ["יִתְיַצֵּב", "יצב", "He sets himself."],
            ["יִֽתְפַּֽלְל֖וּ", "פלל", "They pray."],
            
          ],
        },
      ],
    },
  
    {
      img: require("../assets/box/4-13.png"),
      xpos: 14,
      ypos: 4,
      item: [
        {
          option: "Imperfect",
          stem: "Hithpael",
          clue: " Second person or Third person feminine",
          description:
            "The Hithpael stem in its imperfect conjugation has the preformative תת , if the verb is second person masculine or feminine and third person feminine. \n Eg.תִּתְהַלָּֽל",
           
          moreExamples: [
            ["תִתְאַוֶּ֜ה", "אוה", "You will desire."],
            ["תִּתְחַ֥ר", "חרה", "You will fret yourself"],
            ["תִתְהַלָּֽל", "הלל", "She shall be praised."],
          ],
        },
      ],
    },

/** 5th row number 6 */
    {
      img: require("../assets/box/5-1.png"),
      xpos: 2,
      ypos: 5,
      item: [
        {
            option: "Participle",
            stem: "Piel",
            clue: "V1 is Patach",
            description:
              "The Preformative מ of Piel stem in its participle conjugation has Shewa (ְ ) as its vowel. \n Eg.מְבַקֵּ֑שׁ",
             
            moreExamples: [
              ["מְבַקֵּ֑שׁ", "בקשׁ", "to seek"],
              ["מְשָׁרֵ֥ת", "שׁרת", "assistant"],
              ["מְצַוָּ֥ה", "צוה", "command"],
              
            ],
          },
    
          {
            option: "Participle",
            stem: "Pual",
            clue: "V1 is Qibbuts",
            description:
              "The Preformative מ of Pual stem in its participle conjugation has Shewa (ְ ) as its vowel. \n Eg.מְיֻדַּעַת",
             
            moreExamples: [
              ["מְיֻדַּעַת", "ידע", "made known"],
              ["מְהֻלָּ֖ל", "הלל", "be praised"],
              
            ],
          },
          
          {
            option: "Participle",
            stem: "Hifil",
            clue: "Masculine Plural, Feminine Singular and Plural",
            description:
              "The Preformative מ of Hifil stem in its participle conjugation has Shewa (ְ ) as its vowel, if it is masculine plural, feminine singular and plural. \n Eg.מְבִאִ֣ים",
             
            moreExamples: [
              ["מְבִאִ֣ים", "בוא", "brought"],
              ["מְבִינִֽים", "בין", "insight"],
              
            ],
          },
      ],
    
    
    },

    {
      name: "none",
      xpos: 3,
      ypos: 5,
      
    },

    {
      img: require("../assets/box/5-3.png"),
      xpos: 4,
      ypos: 5,
      item: [
        {
            option: "Participle",
            stem: "Hifil",
            clue: " First root letter is Yod",
            description:
              "The Preformative ה of Hifil stem in its perfect conjugation has Holem Vav (וֹ) as its vowel, if the first root letter is Yod. \n Eg.מֽוֹצֵא",
             
            moreExamples: [
              ["מֽוֹצֵא", "יצא", "bring forth"],
              ["מוֹכִ֑יחַ", "יכח", "who reproves"],
              ["מוֹשִׁ֛יעַ", "ישׁע", "who saves"],
              
            ],
          },
          
      ],
    },

    {
      img: require("../assets/box/5-4.png"),
      xpos: 5,
      ypos: 5,
      item: [
        {
            option: "Participle",
            stem: "Hofal",
            clue: "First root yod, Biconsonantal, Geminate .",
            description:
              "The Preformative מ of Hofal stem in its participle conjugation has Shureq (וּ) as its vowel, if the first root letter is yod. \n Eg.מוּצָ֑ק",
             
            moreExamples: [
              ["מוּצָ֑ק", "יצק", "cast"],
              ["מוּצֵ֗את", "יצא", "was being brought out "],
              ["מֽוּבָאִ֑ים", "בוא", "brought "],
              ["מוּסַבּ֣וֹת", "סבב", "swinging "],
    
    
            ],
          },
      ],
    },

    {
      img: require("../assets/box/5-5.png"),
      xpos: 6,
      ypos: 5,
      item: [
        {
          option: "Participle",
          stem: "Hofal",
          clue: "Mostly strong verbs",
          description:
            "The Preformative מ of Hofal stem in its participle conjugation has Qibbuts (ֻ ) as its vowel. \n Eg.מֻכִּ֖ים", 
           
          moreExamples: [
            ["מֻכִּ֖ים", "נכה", "beaten"],
            ["הַמֻּפְקָדִ֔ים", "פקד", "overseers "],
            
          ],
        },
      ],
    },


    {
      img: require("../assets/box/5-8.png"),
      xpos: 9,
      ypos: 5,
      item: [
        {
          option: "Participle",
          stem: "Hifil",
          clue: "First root letter is Yod",
          description:
            "The Preformative ה of Nifal stem in its perfect conjugation has Tsere Yod ( ֵי) as its vowel, if the first root letter is Yod. \n Eg.מֵיטִ֣יב",
           
          moreExamples: [
            ["מֵיטִ֣יב", "יטב ", "be well"],
            ["מֵינִיק֛וֹת", "ינק", "milking"],
          ],
        },    
      ],
    },

    {
      name: "none",
      xpos: 10,
      ypos: 5,
      
    },

    {
      img: require("../assets/box/5-10.png"),
      xpos: 11,
      ypos: 5,
      item: [
        {
          option: "Participle",
          stem: "Hifil",
          clue: "Biconsonantal or Geminate and masculine singular",
          description:
          "The Preformative מ of hifil stem in its participle conjugation can take tsere (ֵ ) as its vowel, if the verb is biconsonantal or germinate in most of its occurences. \n Eg.מַכֶּ֣ה",
            
          moreExamples: [
            ["מֵבִ֥יא", "בוא", "bringing"],
            ["מֵשִׁ֗יב", "שׁוב", "return"],
            ["מֵקִ֛ים", "קום", "establish"],
            ["מֵבִ֔ין", "בין", "understand"],
            ["מֵרַ֔ע", "רעע", "evildoer"],
          ],
        },
          {
            option: "preposition",
            stem: "-",
            clue: "First Guttural or Resh ",
            description:
            "The prefix prepositoin מ takes  Tsere (ֵ ) as its vowel, if it is prefixed to a word that starts with  Guttural . \n Eg.מֵרְדָ֣ה",
            moreExamples: [
              ["מֵֽהַכּוֹת֙", "נכה", "from the defeated"],
              ["מֵחֲטוֹ ", "חטא", "from sinning"],
              
            ],
          },
      ],
    },

    {
      img: require("../assets/box/5-11.png"),
      xpos: 12,
      ypos: 5,
      item: [
        {
          option: "preposition",
          stem: "-",
          clue: "Dagesh Forte in the first letter ",
          description:
          "The prefix prepositoin מ takes  Hireq (ִ ) as its vowel, if it is prefixed to a word that starts with  Guttural . \n Eg.מִגֹּאֵ֑ל",
          moreExamples: [
            ["מִגֹּאֵ֑ל", "גאל", "from the avenger"],
            ["מִרְדֹף֙ ", "רדף", "from pursuing"],
            
          ],
        }
       ],
    },


    {
      img: require("../assets/box/5-12.png"),
      xpos: 13,
      ypos: 5,
      item: [
        {
            option: "Participle",
            stem: "Hifil",
            clue: "Mostly regular verbs",
            description:
            "The Preformative ה of Hifil stem in its imperative conjugation has Patach (ַ ) as its vowel, in most of its occurrences. \n Eg.מַכֶּ֣ה",
              
            moreExamples: [
              ["מַכֶּ֣ה", "נכה", "who strikes"],
              ["מַעֲלֶ֣ה", "עלה", "was offering"],
              ["מַשְׂכִּ֑יל", "שׂכל", "who understand"],
              ["מַחֲזִיקִ֖ים", "חזק", "who hold fast"],
              ["מַגִּ֖יד", "נגד", "who explain"],
            ],
          },
      ], 
    },


    {
      img: require("../assets/box/5-13.png"),
      xpos: 14,
      ypos: 5,
      item: [
        {
            option: "Participle Passive",
            stem: "Hofal",
            clue: "some third root letter he or resh",
            description:
              "The Preformative מ of Hofal stem in its participle conjugation has qamets hatuf (ָ ) as its vowel. \n Eg.מָשְׁזָ֗ר",
             
            moreExamples: [
              ["מָשְׁזָ֗ר", "שׁזר", "twined"],
              ["מָרְאֶ֖ה", "ראה", "being shown"],
              
            ],
          },     
      ],  
    },

    /** 6th row number 5*/

    {
      name: "none",
      xpos: 2,
      ypos: 6,

    },

    {
      img: require("../assets/box/6-2.png"),
      xpos: 3,
      ypos: 6,
      item: [
        {
            option: "Perfect",
            stem: "Hifil",
            clue: " First root letter is Yod",
            description:
              "The Preformative ה of Hifil stem in its perfect conjugation has Holem  (֗) as its vowel, if the first root letter is Yod. \n Eg.הֹלִ֣יד",
             
            moreExamples: [
              ["הֹלִ֣יד", "ילד", "He fathered"],
              ["הֹרֵתִ֑יךָ", "ירה", "I have taught you"],
              
            ],
          },     
      ],
    
    },

    {
      img: require("../assets/box/6-3.png"),
      xpos: 4,
      ypos: 6,
      item: [
        {
            option: "Perfect",
            stem: "Hifil",
            clue: " First root letter is Yod",
            description:
              "The Preformative ה of Hifil stem in its perfect conjugation has Holem Vav (וֹ) as its vowel, if the first root letter is Yod. \n Eg.הוֹלִ֣יד",
             
            moreExamples: [
              ["הוֹלִ֣יד", "ילד", "He fathered"],
              ["הוֹצִ֖יא", "יצא", "He brought out"],
              ["הוֹרִ֙ישׁוּ֙", "ירש", "They drove out"],
              
            ],
          },
          {
            option: "Imperative",
            stem: "Hifil",
            clue: " First root letter is Yod",
            description:
              "The Preformative ה of Hifil stem in its imperative conjugation has Holem Vav (וֹ) as its vowel, if the first root letter is Yod. \n Eg.הֹלִ֣יד",
             
            moreExamples: [
              ["הוֹשַׁ֤ע", "ישׁע", "Save"],
              ["הוֹצֵ֖א", "יצא", "Bring out"],
              ["הוֹדִ֥יעוּ", "ידע", "Make known"],
            ],
          },
          {
            option: "Infintive Construct",
            stem: "Hifil",
            clue: " First root letter is Yod",
            description:
              "The Preformative ה of Hifil stem in its Infintive construct conjugation has Holem Vav (וֹ) as its vowel, if the first root letter is Yod. \n Eg.לְהוֹצִ֥יא",
             
            moreExamples: [
              ["לְהוֹצִ֥יא", "יצא", "to bring out"],
              ["לְהוֹשִׁ֣יעַ", "ישׁע", "to save"],
              ["לְהוֹד֣וֹת", "ידה", "to praise"],
            ],
          },
          {
            option: "Perfect",
            stem: "Hofal", 
            clue: " First root letter is Yod",
            description:
              "The Preformative ה of Hofal stem in its perfect conjugation has Holem Vav (וֹ) as its vowel, if the first root letter is Yod. \n Eg.הוֹדַ֤ע",
             
            moreExamples: [
              ["הוֹדַ֤ע", "ידע", "He is made known"],
            ],
          },
      ],
    },

    {
      img: require("../assets/box/6-4.png"),
      xpos: 5,
      ypos: 6,
      item: [
        {
            option: "Perfect",
            stem: "Hofal",
            clue: "First Yod, Biconsonantal, Geminate",
            description:
              "The Preformative ה of Hofal stem in its perfect conjugation has Shureq (וּ) as its vowel. \n Eg.הוּרַ֣ד",
             
            moreExamples: [
              ["הוּרַ֣ד", "ירד", "He was brought down"],
              ["הוּכָ֖ן", "כון", "It is made ready "],
              
            ],
          },
      ],
    },

    {
      img: require("../assets/box/6-5.png"),
      xpos: 6,
      ypos: 6,
      item: [
        {
          option: "Perfect",
          stem: "Hofal",
          clue: "-",
          description:
            "The Preformative ה of Hofal stem in its perfect conjugation has Qibbuts (ֻ ) as its vowel. \n Eg.הֻגַּ֗ד",
           
          moreExamples: [
            ["הֻגַּ֗ד", "נגד", "He was told"],
            ["הֻכָּ֣ה", "נכה", "He is stricken "],
            
          ],
        },
      ],
    },
   
    {
      img: require("../assets/box/6-6.png"),
      xpos: 7,
      ypos: 6,
      item: [
        {
          option: "Perfect",
          stem: "Hifil",
          clue: "Biconsonantal or Geminate",
          description:
            "The Preformative ה of Hifil stem in its perfect conjugation has Hateph Patach (ֲ ) as its vowel, if the verb is biconsonantal or geminate. \n Eg.הֲקִמֹ֔תִי",
           
          moreExamples: [
            ["הֲקִמֹ֔תִי", "קום", "I have established"],
            ["הֲרִימֹ֨תִי", "רום", "I have lifted "],
            ["וַהֲשִׁמּוֹתִ֨י", "שׁמם", "I will amaze"],
            ["הֲבִיאֹתִ֤יו ", "בוא", "I do bring him"],
          ],
        },
        {
            option: "Interogative particle",
            stem: "-",
            clue: "The verb is a participle and dagesh in the first root letter",
            description:
            "The Prefix ה can be a interogative particle and it takes Hateph Patach (ֲ ) as its vowel, if first root letter is ח . \n Eg.הֲתֵלֵ֥ךְ",
           
            moreExamples: [
              ["הֲתֵלֵ֥ךְ", "הלך", "Will you go?"]
            ],
          },
    
      ],    
    },

    {
      img: require("../assets/box/6-8.png"),
      xpos: 9,
      ypos: 6,
      item: [

        {
          option: "H",
          stem: "Hifil",
          clue: " First root letter is Yod",
          description:
            "The Preformative ה of Hifil stem in its perfect conjugation has Tsere Yod (ֵי) as its vowel, if the first root letter is Yod.   \n Eg. הֵיטִ֖יב",
           
          moreExamples: [
            ["הֵיטִ֖יב", "יטב", "He delt well"],
            ["הֵינִ֥יקָה", "ינק", "She nursed"], 
          ],
        },
      {
          option: "H",
          stem: "Hifil",
          clue: " First root letter is Yod",
          description:
            "The Preformative ה of Hifil stem in its imperative conjugation has Tsere Yod (ֵי) as its vowel, if the first root letter is Yod.   \n Eg. הֵילִ֨ילִי",
           
          moreExamples: [
            ["הֵילִ֨ילִי", "ילל", "Wail"],
          ],
        },
      {
          option: "H",
          stem: "Hifil",
          clue: " First root letter is Yod",
          description:
            "The Preformative ה of Hifil stem in its infinitive Construct/Absolute conjugation has Tsere Yod (ֵי) as its vowel, if the first root letter is Yod.   \n Eg. לְהֵיטִ֗יב",
           
          moreExamples: [
            ["לְהֵיטִ֗יב", "יטב", "to do good"],
            ["הֵיטֵ֔ב", "יטב", "very"],
      
          ],
        },
      ], 
    },
    {
      img: require("../assets/box/6-9.png"),
      xpos: 10,
      ypos: 6,
      item: [
        {
          option: "Perfect",
          stem: "Hifil",
          clue: "First Guttural",
          description:
            "The Preformative ה of Hifil stem in its perfect conjugation has segol (ֶ ) as its vowel, if the first root letter is guttural or resh. \n Eg.הֶאֱמִ֖ן",
           
          moreExamples: [
            ["הֶאֱמִ֖ן", "אמן", "He believed"],
            ["הֶֽאֱבִ֥יד", "אבד", "He destroyed"],
            ["הֶעֱלָ֤ה", "עלה", "He brings up"],
            ["הֶֽעֱמַ֖דְתָּ", "עמד", "I have set"],
            ["הֶחֱזַ֣קְתִּי", "חזק", "I have grasped"],
          ],
        },
        {
            option: "Definite Article",
            stem: "-",
            clue: "The verb is passive participle",
            description:
            "The Prefix ה can be a definte article and it takes segol (ֶ ) as its vowel, if it is prefixed before a guttural letter . \n Eg. הֶעָשׂ֥וּי ",
           
            moreExamples: [
              ["הֶעָשׂ֥וּי", "עשׁה", "done"],
              ["הֶחָלוּץ֙", "חלץ", "the armed"],
            ],
          },
          {
            option: "Interogative particle",
            stem: "-",
            clue: "The verb is participle and dagesh in the first root letter",
            description:
            "The Prefix ה can be a interogative particle and it takes segol (ֶ ) as its vowel, before gutturals with Qamets. \n Eg.הֶחֳדַ֙לְתִּי֙",
           
            moreExamples: [
              ["הֶחֳדַ֙לְתִּי֙", "חדל", "Shall I leave?"],
              ["הֶחָפֹ֤ץ", "חפץ", "desire?"],
            ],
          },
      ],
    },


    {
      img: require("../assets/box/6-10.png"),
      xpos: 11,
      ypos: 6,
      item: [
        {
            option: "Perfect",
            stem: "Hifil",
            clue: "Biconsonantal or Geminate verbs ",
            description:
            "The Preformative ה of Hifil stem in its perfect conjugation has Tsere (ֵ ) as its vowel, if it is biconsonantal or geminate. \n Eg.הֵבִ֥יא",
            moreExamples: [
              ["הֵבִ֥יא", "בוא", "He brought"],
              ["הֵשִׁ֔יב", "שׁוב", "He brought back"],
              ["הֲכִנֹֽתִי", "כון", "I have prepared "],
              ["הֵרַ֖ע", "רעע", "He has done evil"],
            ],
          },
          {
            option: "Imperative",
            stem: "Nifal",
            clue: "First Guttural or Resh and V1-Qamets ",
            description:
            "The Preformative ה of Nifal stem in its imperative conjugation has Tsere (ֵ ) as its vowel, if the first root letter is Guttural or Resh.. \n Eg.הֵאָֽסְפוּ֙",
            moreExamples: [
              ["הֵאָסֵ֖ף", "אסף", "be gathered"],
              ["הֵֽאָחֲז֖וּ ", "אחז", "get property"],
              
            ], 
          },
          {
            option: "Infinitive Construct",
            stem: "Nifal",
            clue: "First Guttural or Resh and V1-Qamets ",
            description:
            "The Preformative ה of Nifal stem in its infinitive construct conjugation has Tsere (ֵ ) as its vowel, if the first root letter is Guttural or Resh.. \n Eg.הֵעָל֣וֹת",
            moreExamples: [
              ["הֵעָל֣וֹת", "עלה", "brought up"],
              ["הֵרָא֥וֹת", "ראה", "appear"],
              ["הֵחֵ֛ל", "חלל", "be profaned "],
              ["לְהֵרָפֵֽא", "רפא", "be healed"],
              
            ],
          },
      ],
    },

    {
      img: require("../assets/box/6-11.png"),
      xpos: 12,
      ypos: 6,
      item: [
        {
          option: "Perfect",
          stem: "Hifil",
          clue: "Mostly Regular Verb",
          description:
            "The Preformative ה of Hifil stem in its Perfect conjugation has Hireq (ִ ) as its vowel. \n Eg.הִקְרִ֑יב",
           
          moreExamples: [
            ["הִקְרִ֑יב", "קרב", "He drew near"],
            ["הִכּוּ֙", "נכה", "They struck"],
            ["הִגִּ֥יד", "נגד", "He has revealed"],
            ["הִצִּ֤יל", "נצל", "He has taken away"],
            ["הִכְרַ֔תִּי", "כרת", "I have cut off"],
          ],
        },
        {
          option: "Imperative",
          stem: "Nifal",
          clue: "V1- Qamets",
          description:
          "The Preformative ה of Nifal stem in its imperative conjugation can have Hireq (ִ ) as its vowel. \n Eg.הִנָּבֵ֣א",
    
          moreExamples: [
            ["הִנָּבֵ֣א", "נבא", "Prophesy"],
            ["הִשָּׁ֧מֶר", "שׁמר", "Be careful"],
            ["הִשָּׁבְע֣וּ", "שׁבע", "Swear"],
        
          ],
        },
        {
            option: "Infinitive Construct",
            stem: "Nifal",
            clue: "V1- Qamets",
            description:
            "The Preformative ה of Nifal stem in its infinitive construct conjugation has Hireq (ִ ) as its vowel. \n Eg.לְהִלָּ֥חֶם",
      
            moreExamples: [
              ["לְהִלָּ֥חֶם", "לחם", "to fight"],
              ["לְהִמָּלֵ֣ט", "מלט", "to escape"],
              ["לְהִשָּׁבֵ֤עַ", "שׁבע", "to Swear"],
            ],
          },
    {
            option: "Infinitive Absolute",
            stem: "Nifal",
            clue: "־",
            description:
            "The Preformative ה of Nifal stem in its infinitive absolute conjugation has Hireq (ִ ) as its vowel. \n Eg. נִגְל֖וֹת",
      
            moreExamples: [
              ["נִגְל֖וֹת", "גלה", "uncover"],
              ["הִשָּׁבֵ֥עַ", "שׁבע", "swear"],
              ["נִשְׁל֨וֹחַ", "שׁלח", "sent"],
            ],
          },
    
      ],
    },

    {
      img: require("../assets/box/6-12.png"),
      xpos: 13,
      ypos: 6,
      item: [
        {
            option: "Imperative",
            stem: "Hifil",
            clue: "V2-i-class vowel",
            description:
            "The Preformative ה of Hifil stem in its imperative conjugation has Patach (ַ ) as its vowel, in most of its occurences. \n Eg.הַקְשִׁ֥יבִי",
              
            moreExamples: [
              ["הַקְשִׁ֥יבִי", "קשׁב", "Give attention"],
              ["הַגִּ֣ידוּ", "נגד", "Tell"],
              ["הַאְזֵ֖נָּה", "אזן", "Listen"],
              ["הַצִּ֥ילוּ", "נצל", "Deliver"],
            ],
          },
          {
            option: "Definite Article",
            stem: "-",
            clue: "The verb is participle and dagesh in the first root letter",
            description:
            "The Prefix ה can be a definite article and it takes Patach (ַ ) as its vowel. \n Eg.הַבָּ֥אָה",
           
            moreExamples: [
              ["הַבָּ֥אָה", "בוא", "who came"],
              ["הַיֹּשְׁבִ֖ים", "ישׁב", "who settle"],
              ["הַיֹּֽצְאִים֙", "יצא", "who went forth"],
              ["הַנּוֹתֶ֙רֶת֙", "יתר", "that is left"]
            ],
          },
          {
            option: "Infinitive Construct",
            stem: "Hifil",
            clue: "V2-i-class vowel",
            description:
            "The Preformative ה of Hifil stem in its Infinitive construct conjugation has Patach (ַ ) as its vowel, in most of its occurrences. \n Eg.הַקְשִׁ֥יבִי",
              
            moreExamples: [
              ["לְהַבְדִּ֕יל", "הבד", "to divide"],
              ["לְהַשְׂכִּ֔יל", "שׂכל", "to make one wise"],
              ["הַצִּ֤יל", "נצל", "deliver"],
            ], 
          },
    {
            option: "Infinitive Absolute",
            stem: "Hifil",
            clue: "V2-i-class vowel",
            description:
            "The Preformative ה of Hifil stem in its Infinitive Absolute conjugation has Patach (ַ ) as its vowel, in most of its occurrences. \n Eg. הַכְבֵּד֙",
              
            moreExamples: [
              ["הַכְבֵּד֙", "כבד", "hardened"],
              ["הַרְחֵק֙", "רחק", "far off"],
              ["הַחֲרֵם֙", "חרם", "destruction"],
            ], 
          },
    
      ],
    },

    {
      img: require("../assets/box/6-13.png"),
      xpos: 14,
      ypos: 6,
      item: [
        {
          option: "Imperative",
          stem: "Hifil",
          clue: "Biconsonantal and Geminate",
          description:
            "The Preformative ה of Hifil stem in its imperative conjugation has Qamets (ָ ) as its vowel, if the verb is a biconsonantal. \n Eg.הָשֵׁ֤ב",
           
          moreExamples: [
            ["הָשֵׁ֤ב", "שׁוב", "Return"],
            ["הָבִ֔יאוּ", "בוא", "Bring forth"],
            ["הָסִ֜רוּ", "סור", "Put away"],
            ["הָכֵ֥ן", "כון", "Prepare"],
            ["הָחֵ֣ל ", "חלל", "Begin"],
          ],
        },
        {
          option: "Infinitive Construct",
          stem: "Hifil",
          clue: "Biconsonantal",
          description:
          "The Preformative ה of Hifil stem in its infinitive construct conjugation has Qamets (ָ ) as its vowel, if the verb is a biconsonantal. \n Eg.לְהָבִֽיא \nNB. The imperative and infinitive construct conjugations follow similar morphological construction. However, the later usually comes with prepositions and that helps to differentiate the two. ",
          moreExamples: [
            ["לְהָבִֽיא", "בוא", "to bring"],
            ["וּלְהָשִׁ֤יב", "שׁוב", "And to replace"],
            ["לְהָמִ֤ית", "מות", "to put to death"],
            [" לְהָרַ֖ע ", "רעע", "to harm"]
          ],
        },
        {
            option: "Definite Article",
            stem: "-",
            clue: "First root letter is guttural and the verb is participle",
            description:
            "The Prefix ה can be a definte article and it takes Qamets (ָ ) as its vowel, if the verb is participle and the first root lettre is guttural. \n Eg.הָאֹמֵ֣ר",
           
            moreExamples: [
              ["הָאֹמֵ֣ר", "אמר", "who said"],
              ["הָאֹכְלִ֤ים", "אכל", "who ate"],
              ["הָעֹלֹ֣ת", "עלה", "who came up"],
              ["הָעֹֽמְדוֹת֙", "עמד", "who stood"]
            ],
          },
    {
            option: "Perfect",
            stem: "Hofal",
            clue: "This is qamets hatuf",
            description:
              "The Preformative ה of Hofal stem in its perfect conjugation has qamets hatuf (ָ ) as its vowel. \n Eg.הָשְׁלַ֤כְתָּ",
             
            moreExamples: [
              ["הָשְׁלַ֤כְתָּ", "שׁלך", "You are brought down"],
              ["הָמְלַ֔ךְ", "מלך", "He was made king"],
              
            ],
          },
    
    
      ],
    
    },

    /** 7th row number 4*/
    
    {
      img: require("../assets/box/7-1.png"),
      xpos: 2,
      ypos: 7,
      item: [
        {
          option: "D",
          stem: "Piel",
          clue: "V1- patach or qamets",
          description:[
            "The Preformative vowel of Piel stem in its imperfect/waw-consecutive conjugation is shewa (ְ ), if \n(1) There is a dagesh in the second root letter and \n(2) the vowel of first root letter is patach. \n Eg.נְקַוֶּ֤ה ", 
            "NB. If the second root letter is a guttural or Resh, it will not take dagesh and the vowel of the first root letter will be qamets.  \n Eg.וַיְבָ֧רֶךְ "
          ],
          moreExamples: [
            ["נְקַוֶּ֤ה", "קוה", "We hope"],
            ["נְסַפְּרָ֣ה", "ספר", "Let us declare"],
            ["וַנְּ֨סַפֶּר", "ספר", "we told"],
          ],
        },   
      ],
    },
    {
      img: require("../assets/box/7-2.png"),
      xpos: 3,
      ypos: 7,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: "First Root is Aleph",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be holem (֗), if the first root letter is Aleph.  \n Eg. נֹאכֵֽל",
           
          moreExamples: [
            [" נֹאמַ֥ר", "אמר", "We say"],
            ["נֹאכֵֽל", "אכל", "We may eat"],
            ["וַנֹּ֗אמֶר", "אמר", "And we said"],
          ],
        },
        {
          option: "H",
          stem: "Hifil",
          clue: "First Root is Yod",
          description:
            "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation can be holem (֗), if the first root letter is Yod.  \n Eg. וַנֹּ֛שֶׁב",
           
          moreExamples: [
            [" וַנֹּ֛שֶׁב", "ישׁב", "We dwell"],
            ["נוֹדֶ֣ה", "ידה", "We will give thanks"],
            ["נוֹצִ֥יא", "יצא", "We will bring out"],
          ],
        },
        {
          option: "N",
          stem: "Nifal",
          clue: "First Root is Yod",
          description:
            "The Preformative vowel of Nifal stem in its perfect conjugation can be holem (ֹ֗), if  the first root letter is Yod.  \n Eg. נֹדָֽעוּ",
           
          moreExamples: [
            [" נֹדָֽעוּ", "ידע", "They were not known"],
            ["נֹֽשְׁבוּ֙", "ישׁב", "They will be inhabited"],
            ["נֹתְר֤וּ", "יתר", "They were left"],
          ],
        },
        {
          option: "N",
          stem: "Nifal",
          clue: "First Root is Yod",
          description:[
            "The Preformative vowel of Nifal stem in its participle conjugation can be holem (ֹ֗), if the first root letter is Yod.  \n Eg. נֹֽרָאוֹת֙ ",
            "NB. The suffix of a participle and/or the accompanying definite article will help to differentiate the participle from the perfect conjugation.  \n Eg. נֹֽרָאוֹת֙ "
          ],
          moreExamples: [
            [" נֹֽרָאוֹת֙", "ירע", "awesome"],
            ["הַנֹּתָ֥ר", "יתר", "that remains"],
          ],
        },
      ],
      
    },
    {
      img: require("../assets/box/7-3.png"),
      xpos: 5,
      ypos: 7,
      item: [

        {
          option: "H",
          stem: "Hifil",
          clue: "First Root is Yod (I-י) & V2- i-class",
          description:
            "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation can be holem waw (וֹ), if  the first root letter is Yod and V2 is an i-class vowel.  \n Eg. נוֹצִ֥יא",
           
          moreExamples: [
            ["נוֹצִ֥יא", "יצא", "We will bring out"],
            ["נ֤וֹדֶ֥ה", "ידה", "We will give thanks"],
            ["וַנֹּ֛שֶׁב", "ישׁב", "We have married"],
          ],
        },
        {
          option: "N",
          stem: "Nifal",
          clue: "First Root is Yod",
          description:
            "The Preformative vowel of Nifal stem in its perfect conjugation can be holem waw (וֹ), if the first root letter is Yod.  \n Eg. נוֹדַ֥ע",
           
          moreExamples: [
            [" נוֹדַ֥ע", "ידע", "It is known"],
            ["נוֹדַ֖עְתִּי", "ידע", "I will make myself known"],
            ["נוֹתַ֖ר", "יתר", "It were left"],
          ],
        },
        {
          option: "N",
          stem: "Nifal",
          clue: "First Root is Yod",
          description:
            "The Preformative vowel of Nifal stem in its participle conjugation can be holem waw (וֹ), if the first root letter is Yod.  \n Eg. נוֹדַ֥ע",
           
          moreExamples: [
            [" נוֹרָ֥א", "ירא", "awesome"],
            ["הַנּוֹתָר֙", "יתר", "the remainder"],
            ["נֽוֹעָצִ֔ים", "יעץ", "advise"],
          ],
        },
        
      ],
    
    },
    {
      name: "none",
      xpos: 4,
      ypos: 7,
    },

    {
      name: "none",
      xpos: 6,
      ypos: 7,
    },

    {
      name: "none",
      xpos: 7,
      ypos: 7,
    },

    {
      img: require("../assets/box/7-7.png"),
      xpos: 8,
      ypos: 7,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " First root letter is Yod",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be Hireq Yod (ִי ), if the first root letter is Yod.  \n Eg. נִ֤ירָא",
           
          moreExamples: [
            ["וַנִּירָ֨א", "ירא", "And we feared"],
            [" נִירָֽשׁ", "ירשׁ", "We will possess"],
            [" נִ֣ירֲשָׁה", "ירשׁ", "Let us inherit"],
          ],
        },
        
    ],
      
     
    },

    {
      name: "none",
      xpos: 9,
      ypos: 7,
      
      
    },

    {
      img: require("../assets/box/7-9.png"),
      xpos: 10,
      ypos: 7,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " The first root letter is ח",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be segol (ֶ ), if the first root letter is ח.  \n Eg. נֶחֱזַ֖ק",
           
          moreExamples: [
            ["נֶחֱזַ֖ק", "חזק", "We will be strong"],
            ["נֶחֱזֶה", "חזה", "We may look"],
            ["וַֽנֶּחֱטָ֔א", "חטא", "And we have sinned"],
          ],
        },
        
        {
          option: "N",
          stem: "Nifal",
          clue: " First root is guttural",
          description:
            "The Preformative vowel of Nifal stem in its perfect conjugation can be segol (ֶ ), if the first root letter is guttural .  \n Eg. נֶאֱחַ֥ז",
           
          moreExamples: [
            ["נֶאֱחַ֥ז", "אחז", "He was caught "],
            ["נֶהֶרְס֖וּ", "הרס", "They were destroyed "],
            ["נֶחְשָׁ֑בוּ", "חשׁב", "They were counted "],
          ],
        },
      ],
    },

    {
      img: require("../assets/box/7-10.png"),
      xpos: 11,
      ypos: 7,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " the first root letter is yod or if the verb is a biconsonantal ",
          description:
            "The Preformative vowel of Qal stem in its waw-consecutive conjugation can be Tsere (ֵ ), if the first root letter is yod or if the verb is a biconsonantal.  \n Eg. וַיֵּ֣דְע֔וּ",
           
          moreExamples: [
            ["נֵֽרְדָ֔ה", "ירד", "Let us go down"],
            ["נֵדַ֔ע", "ידע", "We may know"],
            
          ],
        },
        
      ],
    },




    {
      img: require("../assets/box/7-11.png"),
      xpos: 12,
      ypos: 7,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " may have cohortative suffix ",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be hireq (ִ ).  \n Eg. נִשָּׂ֤א",
           
          moreExamples: [
            ["נִתֵּ֥ן", "נתן", "Let us give"],
            ["נִקַּ֔ח", "לקח", "Let us take"],
            ["נִשָּׂ֤א", "נשׂא", "Let us lift up"]
          ],
        },
        
        {
          option: "N",
          stem: "Nifal",
          clue: " V1- qamets",
          description:
            "The Preformative vowel of Nifal stem in its imperfect/waw-consecutive conjugation can be hireq (ִ ), if the Preformative is א.  \n Eg. נִֽלָּחֲמָה֙",
           
          moreExamples: [
            ["נִֽלָּחֲמָה֙", "לחם", "We will fight"],      
          ],
        },
      
      {
          option: "N",
          stem: "Nifal",
          clue: " Perfect ",
          description:
            "The Preformative vowel of Nifal stem in its perfect conjugation is hireq (ִ ).  \n Eg. נִשְׁבַּ֖עְתִּי",
           
          moreExamples: [
            ["נִשְׁבַּ֖עְתִּי", "שׁבע", "I have sworn "],
            ["נִרְא֖וּ", "ראה", "They were seen "],
            ["נִתְּנָ֥ה", "נתן", "She was given"],
          ],
        },
      
      {
          option: "N",
          stem: "Nifal",
          clue: " V2 is qamets",
          description:
            "The Preformative vowel of Nifal stem in its participle conjugation is hireq (ִ ).  \n Eg. נִצָּ֖ב ",
           
          moreExamples: [
            ["נִצָּ֖ב", "נצב", "standing"],
            ["נִכְבָּ֔ד", "כבד", "honored "],
          ],
        },
      
      
      ],
      
    },
    {
      img: require("../assets/box/7-12.png"),
      xpos: 13,
      ypos: 7,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " First root letter is guttural",
          description:
            "The Preformative vowel of Qal stem in its waw-consecutive conjugation can be Patach (ַ ), if the first root letter is guttural.  \n Eg. נַֽעֲשֶׂ֥ה",
           
          moreExamples: [
            ["נַֽעֲשֶׂ֥ה", "עשׂה", "Let us make"],
            [" נַעֲלֶה֙", "עלה", "Let us go up"],
            
          ],
        },
        
        {
          option: "H",
          stem: "Hifil",
          clue: " V2-i-class vowel",
          description:
            "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation is Patach (ַ ).  \n Eg. וַֽנַּחֲרֵם֙",
           
          moreExamples: [
            ["וַֽנַּחֲרֵם֙", "חרם", "And we devoted to destruction"],
            ["וַנַּקְרֵ֞ב", "קרב", "And we have brought"],
            [" נַשְׁאֵ֤ר", "שׁאר", "Let us leave"],
            [" נַמְלִ֣יךְ", "מלך", "We will make king"],
            
            
          ],
        },
        {
          option: "N",
          stem: "Nifal",
          clue: " First root letter is guttural",
          description:
            "The Preformative vowel of Nifal stem in its perfect conjugation can be Patach (ַ ), if the the first root letter is guttural .  \n Eg. נַעֲלָה֙ ",
           
          moreExamples: [
            ["נַעֲלָה֙", "עלה", "It was taken up"],
            ["נַעֲנֵ֧יתִי", "ענה", "I will answer"],
            ["נַעֲשָׂ֖ה", "עשׂה", "It was done"],
          ],
        },
      
        
      ],
    },
    {
      img: require("../assets/box/7-13.png"),
      xpos: 14,
      ypos: 7,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " Biconsonantal or Geminate",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be Qamets (ָ ), if the verb is biconsonantal or guttural.  \n Eg. וַיָּ֥קָם",
           
          moreExamples: [
            ["נָק֥וּמָה", "קום", "And let us arise"],
            [" נָמ֣וּת", "מות", "We will die"],
            [" נָשׁ֥וּבָה ", "שׁוב", "We will come again"],
            ["וַנָּ֥סָב", "סבב", "And we marched around"],
          ],
        },
      
      {
        option: "H",
        stem: "Hifil",
        clue: "  Biconsonantal or Geminate and V2- i-class vowels",
        description:
          "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation can be Qamets (ָ ), if the verb is biconsonantal or guttural.  \n Eg. נָּבִ֣יא",
         
        moreExamples: [
          ["נָּבִ֣יא", "בוא", "We will bring"],
          [" וַנָּ֥שֶׁב", "שׁוב", "And we brought back"],
          [" נְמִיתֶ֑ךָ", "מות", "We will kill you"],
        ],
      },
      {
          option: "N",
          stem: "Nifal",
          clue: " Biconsonantal  ",
          description:
            "The Preformative vowel of Nifal stem in its perfect conjugation can be Qamets (ָ ), if the verb is biconsonantal .  \n Eg. נָמֹ֕גוּ",
           
          moreExamples: [
            ["נָמֹ֕גוּ", "מוג", "They have melted away"],
            ["נָכ֖וֹנָה", "כון", "It was established"],
            ["נָסֹ֤גוּ", "סוג", "They are turned back"],
          ],
        },
        {
          option: "N",
          stem: "Nifal",
          clue: " Biconsonantal  ",
          description:
            "The Preformative vowel of Nifal stem in its participle conjugation can be Qamets (ָ ), if the verb is biconsonantal .  \n Eg. נָמֹ֕גוּ",
           
          moreExamples: [
            ["נָאוֹר", "אור", "glorious"],
            ["נָכ֣וֹן", "כון", "certain"],
            ["נָפֹצֶית", "פוץ", "spread"],
          ],
        },
      ],
    },

    /** 8th row number 3*/
   
    {
      img: require("../assets/box/8-1.png"),
      xpos: 2,
      ypos: 8,
      item: [
        {
          option: "D",
          stem: "Piel",
          clue: "V1- patach or qamets",
          description:
            "The Preformative vowel of Piel stem in its imperfect conjugation is shewa (ְ ), if \n(1) There is dagesh in the second root letter, and (2) the vowel of first root letter is patakh. \n Eg.וַיְדַבֵּר 'NB. If the second root letter is a guttural or Resh, it will not take a dagesh and the vowel of the first root letter will be qamets.  \n Eg.וַיְבָ֧רֶךְ",
        
          moreExamples: [
            ["יְדַבֵּר", "דבר", "He will speak"],
            ["יְצַו֙", "צוה", "He will command"],
            ["יְשַׁלַּ֥ח", "שׁלח", "He will send forth"],
            ["יְבָרֵךְ", "ברך", "He will bless"],
            ["יְבַקֵּֽשׁ", "בקשׁ", "He will seek"],
          ],
        },
        {
          option: "Dp",
          stem: "Pual",
          clue: "V1- Qibbuts",
          description:
          "The Preformative vowel of Pual stem in its imperfect conjugation is shewa (ְ), if \n(1) There is dagesh in the second root letter, and (2) the vowel of first root letter is qibbuts. \n Eg.וַיְכֻסּ֗וּ \nNB. If the second root letter is a guttural or Resh, it will not take a dagesh and the vowel of the first root letter will be holem.  \n Eg. וַֽיְגֹאֲל֖וּ",
          
          moreExamples: [
            ["יְכֻלּ֛וּ", "כלה", "They will be finished"],
            ["יְכֻסּ֗וּ", "כסה", "They will be covered"],
            [" יְבֻקַּ֤שׁ", "בקשׁ", "He will be sought"],
          ],
        },
        {
            option: "Q",
            stem: "Qal",
            clue: "Biconsonantal or Geminate verbs and Objective Suffix",
            description:
              'The Preformative Vowel of Qal stem in its imperfect/waw-consecutive conjugation can be shewa (ְ), if \n1 The verb is biconsonantal (II=י/ו) or Geminate (II=III), and \n2 The verb has objective suffix (OS). \n Eg.וַיְשִׂמֵהוּ \nNB. One of the most frequently occuring verb היה takes shewa for its preformative vowel.  \n Eg. וַֽיְהִ֖י',
            moreExamples: [
              ["תְחָנֵּֽם", "חנן", "You will show mercy to them."],
              ["יְגֻרְךָ֣", "גור", "He will not dwell with you."],
            ],
          },
          {
            option: "Q",
            stem: "Qal",
            clue: "verb היה ",
            description:
              'One of the most frequently occurring verbs היה takes preformative vowel shewa in its Qal stem and waw-consecutive conjugation.  \n Eg.וַֽיְהִ֖י \nNB. In the jussive conjugation, היה takes shewa for its preformative vowel.  \n Eg. ["יְהִ֥י", "היה", "Let there be"],',
            moreExamples: [
              ["וַֽיְהִ֖י", "היה", "And it was"],
              ["וַתְּהִ֥י", "היה", "And it was"],
              ["יְהִ֥י", "היה", "Let there be"],
            ],
          },
          {
            option: "H",
            stem: "Hifil",
            clue: "Biconsonantal or Geminate verbs and Objective Suffix",
            description:
              "The Preformative Vowel of Qal stem in its imperfect/waw-consecutive conjugation can be shewa (ְ), if 1 The verb is biconsonantal (II=י/ו) or Geminate (II=III), and 2 The verb has objective suffix (OS). \n Eg. יְקִימֶֽנָּה",
            moreExamples: [
              ["יְקִימֶֽנָּה", "קום", "He will cause it to rise"],
              ["וַיְסִבֵּ֙נִי֙", "סבב", "And he led me around"],
              ["וַיְבִאֶ֖הָ", "בוא", "And he brought her"],
              ["וַיַּנִּיחֵ֧הוּ", "המם", "And he rested it"],
            ],
          },
    
      ],

    },


    {
      img: require("../assets/box/8-2.png"),
      xpos: 3,
      ypos: 8,
      item: [

        {
          option: "H",
          stem: "Hifil",
          clue: "First Root is Yod (I-י) & V2- i-class",
          description:
            "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation can be holem (ֹ֗ ), if (a) the first root letter is Yod and  (b)  V2 is an i-class vowel.  \n Eg. וַיֹּצִ֨יאוּ",
           
          moreExamples: [
            [" וַיֹּצִ֨יאוּ", "יצא", "And they brought"],
            ["וַתֹּ֣סֶף", "יסף", "And she added"],
            ["וַיֹּ֨שֶׁב֙", "ישׁב", "And he placed"],
            ["וַתֹּ֧רֶד", "ירד", "And she let down"],
            [" וַיֹּ֤רֶשׁ", "ירשׁ", "And he drove out"],
          ],
        },
        {
          option: "Q",
          stem: "Qal",
          clue: "First Root is Aleph",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be holem (ֹ֗), if the first root letter is Aleph.  \n Eg. וַיֹּ֥אמֶר",
           
          moreExamples: [
            [" וַיֹּ֥אמֶר", "אמר", "And he said"],
            ["וַתֹּאכַ֑ל", "אכל", "And she ate"],
            ["וַיֹּאחֲז֣וּ", "אחז", "And he caught"],
          ],
        },
      ],

    },


    {
      img: require("../assets/box/8-3.png"),
      xpos: 4,
      ypos: 8,
      item: [

        {
          option: "H",
          stem: "Hifil",
          clue: "First Root is Yod (I-י) & V2- i-class",
          description:
            "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation can be ḥōlem waw (וֹ), if  the first root letter is Yod and V2 is an i-class vowel.  \n Eg. וַתּוֹצֵ֨א",
           
          moreExamples: [
            ["וַתּוֹצֵ֨א", "יצא", "And he brought forth"],
            ["וַיּוֹסִ֥פוּ", "יסף", "And they added"],
            ["וַיּ֥וֹלֶד", "ילד", "And he fathered"],
            ["וַתּ֤וֹרֶד", "ירד", "And she let down"],
            [" וַיּ֨וֹשַׁע", "ישׁע", "And he sought"],
          ],
        },
        {
          option: "Q",
          stem: "Qal",
          clue: "First Root is Aleph ",
          description:
            "The Preformative vowel of Qal stem in its imperfect conjugation can be ḥōlem waw (וֹ), if \nthe first root letter is Aleph.  \n Eg. יוֹכְל֨וּ",
           
          moreExamples: [
            ["יוֹכְל֨וּ", "אכל", "They will eat"],
            ["אוֹמְרָ֤ה", "אמר", "I say"],
          ],
        },
      ],

    },


    {
      img: require("../assets/box/8-4.png"),
      xpos: 5,
      ypos: 8,
      item: [

        {
          option: "Hp",
          stem: "Hofal",
          clue: "V2- patach and Biconsonantal",
          description:
            "The Preformative vowel of hofal stem in its imperfect/waw-consecutive conjugation can be shureq (וּ).  \n Eg. וַיּוּשַׁ֞ב",
           
          moreExamples: [
            ["וַיּוּשַׁ֞ב", "שׁוב", "And he was brought back"],
            ["וַתּוּמַ֖ת", "מות", "And she was put to death"],
            ["וַיּוּשַׂ֤ם", "שׂים", "And he was set"],
          ],
        },
        {
          option: "Q",
          stem: "Qal",
          clue: "First Root is Yod (I-י)",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be Shureq (וּ), if \nthe First Root is Yod (I-י).  \n Eg. וַתּוּכָֽל",
           
          moreExamples: [
            ["וַתּוּכָֽל", "יכל", "And he has prevailed"],
            ["לֹא־יוּכַ֣ל", "יכל", "He is not able"],
          
          ],
        },
          ],
      
    },


    {
      img: require("../assets/box/8-5.png"),
      xpos: 6,
      ypos: 8,
      item: [

        {
          option: "Hp",
          stem: "Hophal",
          clue: " V2- patach",
          description:
            "The Preformative vowel of Hofal stem in its imperfect/waw-consecutive conjugation can be qibbûṣ (ֻ ).  \n Eg. וַיֻּגַּ֥ד",
           
          moreExamples: [
            ["וַיֻּגַּ֥ד", "נגד", "And it was told"],
            ["וַיֻּכּ֗וּ", "נכה", "And they were beaten"],
            ["וַֽתֻּשְׁלְכִ֞י", "שׁלך", "And you were cast out"],
            ["תֻכּ֛וּ", "נכה", "You are stricken"],
          ],
        },
      ],

    },

    {
      img: require("../assets/box/8-6.png"),
      xpos: 7,
      ypos: 8,
      item: [
        {
          option: "D",
          stem: "Piel",
          clue: " Preformative Aleph, V2- patach, and Dagesh in the second root letter",
          description:
            "The Preformative vowel of Piel stem in its imperfect/waw-consecutive conjugation can be hateph Patach (ֲ ), if the preformative consonant is Aleph.  \n Eg. וָאֲדַבֵּ֥ר",
               
          moreExamples: [
            ["וָאֲדַבֵּ֥ר", "דבר", "And I spoke"],
            [" וָאֲצַוֶּ֥ה", "צוה", "And I command"],
            ["וָאֲבַקֵּ֣שׁ", "בקשׁ", "And I sought"],
            ["אֲדַבֵּ֑ר", "דבר", "I speak"],
          ],
        },
        {
          option: "Q",
           stem: "Qal",
           clue: " Biconsonantal or Geminate verbs and Objective Suffix",
           description:
            "The Preformative Vowel (א) of Qal stem in its imperfect conjugation can be hateph Patach (ֲ ), if \n1 The verb is biconsonantal (II=י/ו) or Geminate (II=III), and \n2 The verb has objective suffix (OS). \n Eg. אֲשִׂימֶֽנּוּ",    
          moreExamples: [
                ["אֲשִׂימֶֽנּוּ", "שׂים", "I set him"],
              
          ],
         },
        {
          option: "H",
          stem: "Hifil",
          clue: " Biconsonantal or Geminate verbs and Objective Suffix",
          description:
          "The Preformative Vowel (א) of hifil stem in its imperfect conjugation can be hateph patach (ֲ ), if \n1 The verb is biconsonantal (II=י/ו) or Geminate (II=III), and \n2 The verb has objective suffix (OS). \n Eg. אֲשִׂימֶֽנּוּ",
                
          moreExamples: [
            ["אֲשִׂימֶֽנּוּ", "שׂים", "I set him"],
              
         ],
        },        
        ],

    },


    {
      img: require("../assets/box/8-7.png"),
      xpos: 8,
      ypos: 8,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " First root letter is Yod",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be ḥîreq Yod (ִי ), if the first root letter is Yod.  \n Eg. וַיִּֽירְא֥וּ",
           
          moreExamples: [
            ["וַיִּֽירְא֥וּ", "ירא", "And they were afraid"],
            [" וַיִּירַ֨שׁ", "ירשׁ", "And he took possession"],
            [" וַיִּיטַב֙", "יטב", "And it pleased"],
            [" אַל־תִּירָא֙", "ירא", "Do not fear"],
          ],
        },
        
    ],
    },


    {

      img: require("../assets/box/8-8.png"),
      xpos: 9,
      ypos: 8,
      item: [

        {
          option: "H",
          stem: "Hifil",
          clue: " First root letter is Yod",
          description:
            "The Preformative vowel of Hifil stem in its waw-consecutive conjugation can be Tsere Yod (ֵי), if the first root letter is Yod.  \n Eg. וַתֵּ֣יטֶב",
           
          moreExamples: [
            ["וַתֵּ֣יטֶב", "יטב", "And he did well"],
            
          ],
        },
        
      ],

    },


    {
      img: require("../assets/box/8-9.png"),
      xpos: 10,
      ypos: 8,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " Preformativeא    or first root letter is ח",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be segol (ֶ ), if the Preformative א   or first root letter is ח.  \n Eg. וָאֶתֵּ֣ן",
           
          moreExamples: [
            ["אֶתֵּ֖ן", "נתן", "I will give"],
            ["וָאֶקַּ֥ח", "לקח", "And I took"],
            ["וָאֶשָּׂ֥א", "נשׂא", "And I lifted up"],
            ["וָאֶשְׁמַ֖ע", "שׁמע ", "And I obeyed"],
          ],
        },
        
        {
          option: "N",
          stem: "Nifal",
          clue: " Preformative א  and V1- qamets",
          description:
            "The Preformative vowel of Nifal stem in its imperfect/waw-consecutive conjugation can be segol (ֶ ), if the Preformative is א .  \n Eg. וָאֶשָּׁ֨בַֽע",
           
          moreExamples: [
            ["אֶלָּקַ֣ח", "לקח", "I am taken "],
            ["וָאֶשָּׁ֨בַֽע", "שׁבע", "And I swore "],
          ],
        },
      ],

    },


    {
      img: require("../assets/box/8-10.png"),
      xpos: 11,
      ypos: 8,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " the first root letter is yod or if the verb is a biconsonantal ",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be Tsere (ֵ ), if the first root letter is yod or if the verb is a biconsonantal.  \n Eg. וַיֵּ֣דְע֔וּ",
           
          moreExamples: [
            ["תֵּדַ֜ע", "ידע", "You will know"],
            ["וַיֵּ֥צֵא", "יצא", "And he went out"],
            ["וַיֵּ֥שֶׁב", "ישׁב", "And he dwelled"],
            ["וַתֵּ֣לֶד", "ילד  ", "And she bore"],
            ["וַיֵּבֹ֑שׁוּ", "בושׁ ", "And they confounded"],
          ],
        },
        
        {
          option: "N",
          stem: "Nifal",
          clue: " First root letter is a guttural and V1- qamets",
          description:
            "The Preformative vowel of Nifal stem in its imperfect/waw-consecutive conjugation can be Tsere (ֵ  ), if the first root letter is a guttural.  \n Eg. וַיֵּחָלֵ֨ק",
           
          moreExamples: [
            ["תֵּחָלֵ֥ק", "חלק", "It shall be divided"],
            ["וַיֵּהָֽפְכ֛וּ", "הפך", "And they turned"],
            ["וַיֵּאָ֖סֶף", "אסף", "And he was gathered"],
          ],
        },
      ],
    },


    {
      img: require("../assets/box/8-11.png"),
      xpos: 12,
      ypos: 8,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " Preformative י ת   ", 
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be hireq (ִ ), if the Preformative  י ת.  \n Eg. וַיִּתֵּ֥ן",
           
          moreExamples: [
            ["תִּתֶּן", "נתן", "You will give"],
            ["וַיִּקַּ֛ח", "לקח", "And he took"],
            ["וַיִּשְׂאוּ֙", "נשׂא", "And he lifted up"],
            ["וַֽיִּשְׁמְע֞וּ", "שׁמע ", "And he heard"],
          ],
        },
        
        {
          option: "N",
          stem: "Nifal",
          clue: " Dagesh Forte in the first root letter and V1- qamets",
          description:
            "The Preformative vowel of Nifal stem in its imperfect/waw-consecutive conjugation can be hireq (ִ ).\n Eg. וַיִּלָּ֥חֶם",
           
          moreExamples: [
            ["יִלָּחֵ֣ם", "לחם", "He will fight"],
            ["וַתִּקָּבֵ֛ר", "קבר", "And she was buried"],
            ["וַיִּשָּׁ֣בַֽע", "שׁבע", "And he swore"],
          ],
        },
      ],
    },

    {
      img: require("../assets/box/8-12.png"),
      xpos: 13,
      ypos: 8,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " First root letter is guttural",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be Patach (ַ ), if the first root letter is guttural.  \n Eg. תַּֽעֲשֶׂ֣ה",
           
          moreExamples: [
            ["תַּֽעֲשֶׂ֣ה", "עשׂה", "You will make"],
            [" וַיַּ֣עַל", "עלה", "And he went up"],
            ["  וַיַּעֲנ֧וּ", "ענה", "And they answered"],
            ["  וַיַּֽהַרְג֖וּ", "הרג", "And they killed"],
            [" וַֽיַּחֲנ֖וּ", "חנה", "And they encamped"],
          ],
        },
        
        {
          option: "H",
          stem: "Hifil",
          clue: " V2-i-class vowel",
          description:
            "The Preformative vowel of Hifil stem in its waw-consecutive conjugation is Patach (ַ ) for regular verbs.  \n Eg. תַכֶּ֖ה",
           
          moreExamples: [
            ["תַכֶּ֖ה", "נכה", "You will strike"],
            [" וַיַּגֵּ֥ד", "נגד", "And he told"],
            ["  תַּעֲלֶ֣ה", "עלה", "You shall offer"],
            [" וַיַּשְׁלִ֥כוּ", "שׁלך", "And they threw"],
            ["וַיַּעֲמֵ֥ד", "עמד", "And he fixed"],
            
          ],
        },
      ],

    },

    {
  
      img: require("../assets/box/8-13.png"),
      xpos: 14,
      ypos: 8,
      item: [

        {
          option: "Q",
          stem: "Qal",
          clue: " Biconsonantal or Geminate",
          description:
            "The Preformative vowel of Qal stem in its imperfect/waw-consecutive conjugation can be Qamets (ָ ), if the verb is biconsonantal or guttural.  \n Eg. וַיָּ֥קָם",
           
          moreExamples: [
            ["וַיָּ֥קָם", "קום", "And he rose up"],
            [" וַיָּמֹֽת", "מות", "And he died"],
            ["  וַיָּשֻׁ֧בוּ ", "שׁוב", "And it returned"],
            ["  וַיָּ֣שֶׂם", "שׂים", "And he put"],
            ["תָּסֹ֥בּוּ", "סבב", "You shall march around"],
          ],
        },
      
      {
        option: "H",
        stem: "Hifil",
        clue: "  Biconsonantal or Geminate and V2- i-class vowels",
        description:
          "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation can be Qamets (ָ ), if the verb is biconsonantal or geminate.  \n Eg. וַיָּבֵא֙",
         
        moreExamples: [
          ["וַיָּבֵא֙", "בוא", "And he brought"],
          [" וַיָּ֕שֶׁב", "שׁוב", "And he brought back"],
          [" וַיָּ֖מֶת", "מות", "And he put to death"],
          ["יָהֵ֖לּוּ", "הלל", "They will shine"],
        ],
      },
      {
        option: "Hp",
        stem: "Hofal",
        clue: "  -",
        description:
          "The Preformative vowel of Hifil stem in its imperfect/waw-consecutive conjugation can be Qamets (ָ ), if the verb is biconsonantal or geminate.  \n Eg. תָּקְטָֽר",
         
        moreExamples: [
          ["תָּקְטָֽר", "קטר", "It shall be burned"],
          
        ],
      },
      
      ],


    },


    /** 9th row number 2*/
  
    {
      img: require("../assets/box/9-1.png"),
      xpos: 2,
      ypos: 9,
      item: [
        {
          option: "Participle Suffix",
          congruency: " Feminine Plural",
          clue: "Participle",
          description:
            "The suffix waw with yod and tav ( וֹת) can be a suffix attached to a participle verb.  \n Eg. פְלָאֽוֹת",
           
          moreExamples: [
            ["פְלָאֽוֹת", "פלא", "wonderful"],
            ["שֹׁמֵמֽוֹת", "שׁמם", "desolated"],
            ["הָרֹאֹ֗ת", "ראה", "have seen"],
          
          ],
        },
        {
            option: " Infinitive Construct",
            congruency: "-",
            clue: " III-ה; I-י; I-נ ",
            description:
              "The suffix tav ( ת ) can be a suffix attached to an Infinitive Construct verb.  \n Eg. לָדַ֖עַת",
             
            moreExamples: [
              ["לָדַ֖עַת", "ידע", "to know"],
              ["לָשֵׂ֥את", "נשׂא", "to carry"],
              ["לִרְא֖וֹת", "ראה", "to see"],
            
            ],
          },
      ],
    },

    {
      img: require("../assets/box/9-2.png"),
      xpos: 3,
      ypos: 9,
      item: [
        {
            option: " Construct Suffix",
            congruency: "Masculine plural",
            clue: " Participle ",
            description:
              "The suffix tsere yod ( י ֵ ) can be a construct chain suffix attached to a participle verb.  \n Eg. יֹשְׁבֵ֖י",
             
            moreExamples: [
              ["יֹשְׁבֵ֖י", "בוא", "inhabitants of"],
              ["שֹׂנְאֵ֖י", "שׂנא", "who hate of "],
              ["שֹׁמְרֵ֖י", "שׁמר", "keeper of "],
            
            ],
          }, 
          
      ],
    },

    {
      img: require("../assets/box/9-3.png"),
      xpos: 4,
      ypos: 9,
      item: [
        {
            option: " Participle Suffix",
            congruency: "Masculine plural",
            clue: " Participle ",
            description:
              "The suffix hireq yod and Mem (  ִים) can be a suffix attached to a participle verb.  \n Eg. הַיֹּשְׁבִ֖ים",
             
            moreExamples: [
              ["הַיֹּשְׁבִ֖ים", "ישׁב", "who live"],
              ["הַבָּאִ֑ים", "בוא", "who came "],
              ["עֹשִֽׂים", "עשׂה", "were doing "],
            
            ],
          }, 
          
      ],
    },
    {
      img: require("../assets/box/9-4.png"),
      xpos: 5,
      ypos: 9,
      item: [
        {
            option: "Imperfect Suffix",
            congruency: "second feminine singular",
            clue: "verbal prefixes",
            description:
    "The suffix hireq yod ( ִי ) can be imperfect suffix attached to a second person feminine singular verb.  \n Eg. תִּירְאִ֤י",
             
            moreExamples: [
              ["תַּעֲשִׂ֖י", "עשׂה", "You will do"],
              ["תִּזָּכֵֽרִי", "זכר", "You will be remembered"],
              ["תִּירְאִ֤י", "ירא", "You will fear"],
              ["תֵלֵ֑כִי", "הלך", "You have come"],
    
            ],
          },
          {
            option: "Imperative Suffix",
            congruency: "second feminine singular",
            clue: "-",
            description:
              "The suffix Hireq Yod (ִי )  can be an imperfect suffix attached to a verb.  \n Eg. שׁ֖וּבִי",
             
            moreExamples: [
              ["שׁ֖וּבִי", "שׁוב", "Return"],
              ["קוּ֚מִי", "קום", "Arise"],
              
            ],
          },
          
      ],
    },
    {
      img: require("../assets/box/9-5.png"),
      xpos: 6,
      ypos: 9,
      item: [
        {
            option: "Imperfect Suffix",
            congruency: "second or third feminine plural",
            clue: "- ",
            description:
              "The suffix Nun with Qamets He ( נָה ) can be an imperfect suffix attached to a verb.  \n Eg. תִּשָּׁאַֽרְנָה",
             
            moreExamples: [
              ["תִּשָּׁאַֽרְנָה", "שׁאר", "They may remain"],
              ["תִּשְׁלַ֔חְנָה", "שׁלח", "She stretched "],
            
            ],
          }, 
          {
            option: "Imperative Suffix",
            congruency: "feminine plural",
            clue: "- ",
            description:
              "The suffix Nun with Qamets He ( נָה ) can be a perfect suffix attached to a verb.  \n Eg. בְּכֶ֑ינָה",
             
            moreExamples: [
              ["בְּכֶ֑ינָה", "בכה", "Weep"],
              ["קֹ֖מְנָה", "קום", "Rise up "],
            
            ],
          }, 
          
      ],
    },


    {
      img: require("../assets/box/9-6.png"),
      xpos: 7,
      ypos: 9,
      item: [
        {
            option: "Perfect Suffix",
            congruency: "Third Common Plural",
            clue: "No preformative or Perfect preformative",
            description:
              "The suffix Shureq (וּ )  can be perfect suffix attached to a verb.  \n Eg. הָיוּ",
             
            moreExamples: [
              ["הָיוּ֙", "היה", "They became"],
              ["עָשׂ֣וּ", "עשׂה", "They made"],
              ["בָּ֧אוּ", "בוא", "They went into"],
            
            ],
          },
          {
            option: "Imperfect Suffix",
            congruency: "Second and Third Masculine Plural",
            clue: "Second masculine plural will have preformative Tav and third Masculine Plural will have preformative Yod  ",
            description:
              "The suffix Shureq (וּ )  can be imperfect suffix attached to a verb.  \n Eg. תִּשְׁמְר֗וּ",
             
            moreExamples: [
              ["תִּשְׁמְר֗וּ", "שׁמר", "You will keep"],
              ["תֹּאמְר֛וּ", "אמר", "You will say"],
              ["יַעֲבֹ֖דוּ ", "עבד", "They will serve"],
            
            ],
        
          
          },
          {
            option: "Imperative Suffix",
            congruency: "second masculine Plural",
            clue: "-",
            description:
              "The suffix Shureq (וּ )  can be imperfect suffix attached to a verb.  \n Eg. ק֤וּמוּ",
             
            moreExamples: [
              ["ק֤וּמוּ", "קום", "Get up"],
              ["הַגִּ֣ידוּ", "נגד", "Tell"],
              ["שִׁלְח֨וּ", "שׁלח", "Send"],
            
            ],
          }
      ],
    },


    {
      img: require("../assets/box/9-7.png"),
      xpos: 8,
      ypos: 9,
      item: [
        {
            option: "Perfect Suffix",
            congruency: "First common singular",
            clue: "No preformative or Perfect preformative",
            description:
              "The suffix Tav and hireq Yod ( תִי ) can be perfect suffix attached to a verb.  \n Eg. נָתַ֨תִּי",
             
            moreExamples: [
              ["נָתַ֨תִּי", "נתן", "I have given"],
              ["יָדַ֔עְתִּי", "ידע", "I know "],
              [" שָׁמַ֖עְתִּי", "שׁמע", "I heard"],
            
            ],
          },
          
      ],
    },


    {
      img: require("../assets/box/9-8.png"),
      xpos: 9,
      ypos: 9,
      item: [

        {
          option: " Perfect Suffix",
          congruency: "Third feminine Singular",
          clue: "no preformative or perfect preformative",
          description:
            "The suffix Qamets followed by He (ָה) can be a perfective suffix attached to third person feminine plural verb.  \n Eg. יָלְדָ֖ה",
           
          moreExamples: [
            ["יָלְדָ֖ה", "ילד", "She had borne"],
            ["עָשָׂ֑תָה", "עשׂה", "She had prepared"],
          ],
        },
        {
          option: "Pronominal Suffix",
          congruency: "Third feminine Singular",
          clue: "-",
          description:
            "The suffix Qamets followed by He (ָה) can be an objective suffix attached to a verb.  \n Eg. אֲהֵבָ֑הּ",
           
          moreExamples: [
            ["אֲהֵבָ֑הּ", "אהב", "He had loved her"],
            ["אֹהֲבֶ֑יהָ", " אהב ", " who love her"],
            ["אֶתְּנֶֽנָּה", "נתן", "I will give it"],
          
          ],
        },
        {
          option: " Cohortative Suffix",
          congruency: "First common singular or Singular",
          clue: "comes with preformative א or נ",
          description:
            "The suffix Qamets followed by He ( ָה) can be a cohortative suffix attached to a verb.  \n Eg. נֵדְעָ֖ה",
           
          moreExamples: [
            ["נַֽעֲשֶׂ֥ה ", "עשׂה", "Let us make"],
            ["אִמָּלְטָ֨ה ", "ידע", "Let me escape"],
            ["נֵלְכָ֖ה", "הלך", "Let us go"],
          ],
        },
    ],
    },


    {
      img: require("../assets/box/9-9.png"),
      xpos: 10,
      ypos: 9,
      item: [
        {
            option: "Perfect Suffix",
            congruency: "second masuline Singular",
            clue: "No preformative or perfect preformatives",
            description:
              "The suffix Tav and qamets ( תָ ) can be perfect suffix attached to a verb.  \n Eg. עָשִׂ֣יתָ",
             
            moreExamples: [
              ["עָשִׂ֣יתָ", "עשׂה", "You have done"],
              ["אָמַ֔רְתָּ", "אמר", "You said  "],
              [" דִּבַּֽרְתָּ ", "דבר", "You said "],
            
            ],
          },
          
      ],
    },
    {
      img: require("../assets/box/9-10.png"),
      xpos: 11,
      ypos: 9,
      item: [
        {
          option: "Perfect Suffix",
          congruency: "second feminine Singular",
          clue: "No preformatives or Perfect preformatives",
          description:
            "The suffix Tav and qamets ( תְ ) can be perfect suffix attached to a verb.  \n Eg. אָמַ֔רְתְּ ",
           
          moreExamples: [
            ["עָשִׂ֑ית", "עשׂה", "You have done"],
            ["אָמַ֔רְתְּ", "אמר", "You have spoken  "],
            [" יָדַ֙עַתְּ֙", "ידע   ", "You have known "],
          
          ],
        },
          
      ],
    },
    {
      img: require("../assets/box/9-11.png"),
      xpos: 12,
      ypos: 9,
      item: [
        {
            option: "Perfect Suffix",
            congruency: "Second feminine plural",
            clue: "only ten instances",
            description:
              "The suffix Kaf with Segol and final Nun ( תֶן) can be a perfect suffix attached to a verb.  \n Eg. יְדַעְתֶּ֑ן",
             
            moreExamples: [
              ["יְדַעְתֶּ֑ן", "ידע", "You know"],
            ],
          },
          
      ],
    },


    {
      img: require("../assets/box/9-12.png"),
      xpos: 13,
      ypos: 9,
      item: [
        {
            option: "Perfect Suffix",
            congruency: "Second masculine plural",
            clue: "no preformative or perfect preformative ",
            description:
              "The suffix Tav with segol and final Mem ( תֶם ) can be a sufformative attached to a verb.  \n Eg. יְדַעְתֶּ֔ם",
             
            moreExamples: [
              ["יְדַעְתֶּ֔ם", "ידע", "You know"],
              ["עֲשִׂיתֶ֣ם", "עשׂה", " You had made"],
              ["אֲמַרְתֶּ֖ם", "אמר", "you said"],
            
            ],
          },
          
      ],
    
    },
    {
      img: require("../assets/box/9-13.png"),
      xpos: 14,
      ypos: 9,
      item: [
        {
          option: " Perfect Suffix",
          congruency: "First common plural",
          clue: "comes without preformative or perfect preformative",
          description:
            "The suffix Nun with Shureq (נוּ  ) can be perfect suffix attached to a verb.  \n Eg. שָׁמַ֖עְנוּ",
           
          moreExamples: [
            ["שָׁמָ֑עְנוּ", "שׁמע", "We listened"],
            ["חָטָֽאנוּ", "חטא", " We have sinned"], 
            ["רָאִינוּ֮", "ראה", "We see"],
          
          ],
        },  
        {
          option: "Pronominal Suffix",
          congruency: "First common plural",
          clue: "No preformative or Perfect preformatives",
          description:
            "The suffix Nun with Shureq (נוּ  ) can be objective suffix attached to a verb.  \n Eg. הוֹשַׁעְתָּ֖נוּ",
           
          moreExamples: [
            ["הוֹשַׁעְתָּ֖נוּ", "ישׁע", "You have saved us"],
            ["הַצִּילֵ֛נוּ", "נצל", " Deliver us"],
            ["הוֹצִיאָ֧נוּ", " יצא", "He brought us out"],
          
          ],
        },
    ],
  
    },


    /** 10th row number 1 */
    {
   
      img: require("../assets/box/10-1.png"),
      xpos: 2,
      ypos: 10,
      item: [
        {
            option: " Perfect",
            congruency: " Third Masculine Singular",
            clue: " no prefromative or perfect preformatives ",
            description:
              "Where there is no suffix or have perfect preformatives, the verb can be third masculine singular. \n Eg. בָּרָ֣א",
             
            moreExamples: [
              ["בָּרָ֣א", "ברא", "He created"],
              ["נִמְצָ֨א", "מצא", "It was found"],
              ["הוֹצִ֨יא", "ראה", "He brought out"],
            
            ],
          }, 
    
    {
            option: " Participle",
            congruency: " Masculine Singular",
            clue: " may have participle preformatives, prepositions or definite article",
            description:
              "Where there is no sufformative or have perfect preformatives, the verb can be third masculine singular. \n Eg. יֹדֵ֣עַ",
             
            moreExamples: [
              ["יֹדֵ֣עַ", "ברא", "knowing"],
              ["מְצַחֵֽק", "צחק", "laughing"],
              ["מַצְלִ֑יחַ", "צלח", "successful"],
            
            ],
          },
          
    {
            option: "Imperfect",
            congruency: " Third Masculine Singular",
            clue: " will have Yod preformative",
            description:
              "Where there is no sufformative and  Yod preformative is present, the verb is imperfect, third masculine singular. \n Eg. יִשְׁלַ֤ח",
             
            moreExamples: [
              ["יִשְׁלַ֤ח", "שׁלח", "He will send"],
              ["יַעֲבֹ֥ד", "עבד", "He will serve"],
              ["יָשִׁ֣יב", "שׁוב", "He will return"],
            
            ],
          },
    
    {
            option: "Imperfect",
            congruency: " Second masculine singular",
            clue: " will have Tav preformative",
            description:
              "Where there is no sufformative and  Yod preformative is present, the verb is imperfect, second masculine singular. \n Eg. תֹּאכַ֖ל",
             
            moreExamples: [
              ["תֹּאכַ֖ל", "אכל", "You will eat"],
              ["תֹאמַ֔ר", "אמר", "You will say"],
              ["תִשְׁמֹ֑ר", "שׁמר", "You will keep"],
            
            ],
          },
    {
            option: "Imperfect",
            congruency: "Third feminine Singular",
            clue: " will have Tav preformative",
            description:
              "Where there is no sufformative and  Yod preformative is present, the verb is imperfect, third feminine singular. \n Eg. תֹּאכַ֖ל",
             
            moreExamples: [
              ["תֹּאכַ֖ל", "אכל", "She will eat"],
              ["תֹּאמַ֥ר", "אמר", "She says"],
              ["תִּשְׁמֹֽר", "שׁמר", "She will keep"],
            
            ],
          },
    
    {
            option: "Imperative",
            congruency: " Masculine Singular",
            clue: " will not have Tav preformative",
            description:
              "Where there is no sufformative and  Yod preformative is present, the verb is imperfect, third masculine singular. \n Eg. קוּם",
             
            moreExamples: [
              ["קוּם", "קום", "Arise!"],
              ["הַשְׁלֵ֥ךְ", "שׁלך", "Throw!"],
              ["הִמָּלֵ֣ט", "מלט", "Escape!"],
            
            ],
          },
    
    
      ],
    },
    {
      name: "none",
      xpos: 3,
      ypos: 10,
    },
    {
      name: "none",
      xpos: 4,
      ypos: 10,
    },

    
     /** {

     img: require("../assets/box/10-3.png"),
      xpos: 4,
      ypos: 10,
      item: [
        {
          option: "Pronominal Suffix",
          congruency: "First Common Singular",
          clue: "-",
          description:
            "The suffix Nun and Hireq yod  ( נִי) can be objective suffix attached to a verb.  \n Eg. שַׁלְּחֵ֙נִי֙",
           
          moreExamples: [
            ["שַׁלְּחֵ֙נִי֙", "שׁלח", "Send me away"],
            ["עָנָ֣נִי", "ענה", "He asnswered me"],
            ["הַרְאֵ֥נִי", "ראה", "Show me"],
         
          ],
        },
       
      ],
    },**/

    {
      img: require("../assets/box/10-4.png"),
      xpos: 5,
      ypos: 10,
      item: [
        {
          option: "Pronominal Suffix",
          congruency: "First Common Singular",
          clue: "-",
          description:
            "The suffix Nun and Hireq yod  ( נִי ) can be objective suffix attached to a verb.  \n Eg. שַׁלְּחֵ֙נִי֙",
           
          moreExamples: [
            ["שַׁלְּחֵ֙נִי֙", "שׁלח", "Send me away"],
            ["עָנָ֣נִי", "ענה", "He asnswered me"],
            ["הַרְאֵ֥נִי", "ראה", "Show me"],
          
          ],
        },
        
      ],
    },

    {
      img: require("../assets/box/10-5.png"),
      xpos: 6,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "Third masculine Singular",
            clue: "comes with or without preformative",
            description:
              "The suffix Holem waw ( וֹ ) or He with shureq( הוּ ) can be objective suffix attached to a verb.  \n Eg. יְבִאֵ֣הוּ",
             
            moreExamples: [
              ["יְבִאֵ֣הוּ", "בוא", "Let him bring it"],
              ["בֹּא֖וֹ", "בוא", "He had gone into it"],
              ["הִכָּ֛הוּ", "נכה", "He struck him"],
            
            ],
          }, 
          
      ],
    },

    {
      img: require("../assets/box/10-6.png"),
      xpos: 7,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "third masculine Plural",
            clue: "-",
            description:
              "The suffix final Mem ( ם ) or He with segol and final Mem ( הֶם )  can be pronominal suffix attached to a verb.  \n Eg. נְתַתִּ֧ים",
             
            moreExamples: [
              ["נְתַתִּ֧ים", "נתן", "I have given them"],
              ["הֱבִיא֗וּם", "בוא", "They have brought them"],
              ["יִפְקְדֵ֛ם", "פקד", "He will be mindful of them"],
            
            ],
          },
          
      ],
      
    },
    {
      img: require("../assets/box/10-7.png"),
      xpos: 8,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "third feminine Plural",
            clue: "-",
            description:
              "The suffix  final Nun ( ן ) or He with segol and final Nun ( הֶן )  can be pronominal suffix attached to a verb.  \n Eg. בְּבוֹאָֽן",
             
            moreExamples: [
              ["בְּבוֹאָֽן", "בוא", "as one enters"],
              ["בְּלֶכְתָּֽן", "הלך", "as they went"],
              [" קֹנֵיהֶ֤ן", "קנה", "who buy them"],
            
            ],
          },
          
      ],
    },
    {
      img: require("../assets/box/10-8.png"),
      xpos: 9,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "Third feminine singular",
            clue: "-",
            description:
              "The suffix Qamets followed by He (  ָהּ ) can be objective suffix attached to a verb.  \n Eg. אֲהֵבָ֑הּ",
             
            moreExamples: [
              ["אֲהֵבָ֑הּ", "אהב", "He had loved her"],
              ["אֹהֲבֶ֑יהָ", " אהב", " who love her"],
              ["אֶתְּנֶֽנָּה", "נתן", "I will give it"],
            
            ],
          },
    
          {
            option: " Perfect Suffix",
            congruency: "Third feminine singular",
            clue: "comes with perfect preformative",
            description:
              "The suffix Qamets followed by He (  ָה ) can be a perfective suffix attached to third person feminine plural verb.  \n Eg. יָלְדָ֖ה ",
             
            moreExamples: [
            ["יָלְדָ֖ה", "ילד", "She had borne"],
    
             ["יָלְדָ֖ה", "ילד", "She had borne"],
              ["עָשָׂ֑תָה", "עשׂה", "She had prepared"],
            ],
          },
          {
            option: " Imperfect Suffix",
            congruency: "First common singular or Singular",
            clue: "comes with preformative א or נ",
            description:
              "The suffix Qamets followed by He (  ָה ) can be objective suffix attached to a verb.  \n Eg. נִכְרְתָ֥ה",
             
            moreExamples: [
              ["נִכְרְתָ֥ה ", "כרת", "Let us make"],
              ["נֵדְעָ֖ה", "ידע", "Let us know"],
              ["נֵלְכָ֖ה", "הלך", "Let us go"],
            ],
          },
      ],
    },
    {
      img: require("../assets/box/10-9.png"),
      xpos: 10,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "Second masculine singular",
            clue: "-",
            description:
              "The suffix final Kaf with qamets ( ךָ ) can be objective suffix attached to a verb.  \n Eg. צִוִּיתִ֛יךָ",
             
            moreExamples: [
              ["צִוִּיתִ֛יךָ", "צוה", "I commanded you"],
              ["נְתַתִּֽיךָ", "נתן", " I have given you"],
              ["יְבִיאֲךָ֣", "בוא", "He brings you"],
            
            ],
          },     
      ],
    },

    {
      img: require("../assets/box/10-10.png"),
      xpos: 11,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "Second feminine Singular",
            clue: "-",
            description:
              "The suffix final Kaf with shewa ( ךְ ) can be objective suffix attached to a verb.  \n Eg. אֲהַבְתִּ֔יךְ",
             
            moreExamples: [
              ["אֲהַבְתִּ֔יךְ", "אהב", "I love you"],
              ["נְתַתִּ֔יךְ", "נתן", " I gave you"],
              ["גֹּאֲלֵ֖ךְ", "גאל", "your redeemer"],
            
            ],
          }, 
          
      ],
    },
    {
      img: require("../assets/box/10-11.png"),
      xpos: 12,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "Second feminine plural",
            clue: "only one instance",
            description:
              "The suffix Kaf with segol and final Mem ( כֶן ) can be objective suffix attached to a verb.  \n Eg. בְּיַלֶּדְכֶן֙",
             
            moreExamples: [
              ["בְּיַלֶּדְכֶן֙", "ילד", "When you serve as a midwife"],
            
            ],
          },
      ],
    },
    {
      img: require("../assets/box/10-12.png"),
      xpos: 13,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "Second masculine plural",
            clue: "- ",
            description:
              "The suffix Kaf with segol and final Mem ( כֶם ) can be objective suffix attached to a verb.  \n Eg. אֲמָרְכֶ֛ם",
             
            moreExamples: [
              ["בְּבֹאֲכֶ֛ם", "בוא", "When you go into"],
              ["בְּצֵאתְכֶ֣ם", "יצא", " when you came out"],
              ["אֲמָרְכֶ֛ם", "אמר", "you have said these"],
            
            ],
          },
          
      ],
    },
    {
      img: require("../assets/box/10-13.png"),
      xpos: 14,
      ypos: 10,
      item: [
        {
            option: "Pronominal Suffix",
            congruency: "First common plural",
            clue: "preceded by a full vowel",
            description:
              "The suffix Nun with Shureq ( נוּ ) can be objective suffix attached to a verb.  \n Eg. הוֹשַׁעְתָּ֖נוּ",
             
            moreExamples: [
              ["הוֹשַׁעְתָּ֖נוּ", "ישׁע", "You have saved us"],
              ["הַצִּילֵ֛נוּ", "נצל", " Deliver us"],
              ["הוֹצִיאָ֧נוּ", " יצא", "He brought us out"],
            
            ],
          },
          {
            option: "Perfect Suffix",
            congruency: "First common plural",
            clue: "comes with no preformative or for hifil stem with preformative ה",
            description:
              "The suffix Nun with Shureq ( נוּ ) can be a sufformative of a perfect conjugation.  \n Eg. שָׁמָ֑עְנוּ",
             
            moreExamples: [
              ["שָׁמָ֑עְנוּ", "שׁמע", "We listened"],
              ["חָטָֽאנוּ", "חטא", " We have sinned"],
              ["רָאִינוּ֮", "ראה", "We see"],
            
            ],
          },  
          
      ],
    },
/** 
    {
      name: "none",

      xpos: 4,
      ypos: 4,
    },*/
  ],
};
