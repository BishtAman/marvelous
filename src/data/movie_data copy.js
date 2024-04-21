const MOVIES_DATA2 = [
  {
    movieName: "Iron Man",
    mainImage:"https://i.ibb.co/vsL12G0/Iron-Man.png",
    imageURL: import("../assets/movies/all/Iron Man.png"),
    releaseDate: "May 2, 2008",
    description:
      "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), builds an armored suit and becomes Iron Man.",
    mainCharacters: ["Tony Stark / Iron Man"],
    director: "Jon Favreau",
    boxOffice: "$585.2 million",
    imdbRating: "7.9/10",
  },
  {
    movieName: "The Incredible Hulk",
    mainImage:"https://i.ibb.co/h7YBhqB/The-Incredible-Hulk.png",
    imageURL: import("../assets/movies/all/The Incredible Hulk.png"),
    releaseDate: "June 13, 2008",
    description:
      "Bruce Banner (Edward Norton) transforms into a giant, green-skinned creature whenever he loses his temper, becoming the Hulk.",
    mainCharacters: ["Bruce Banner / Hulk"],
    director: "Louis Leterrier",
    boxOffice: "$264.8 million",
    imdbRating: "6.7/10",
  },
  {
    movieName: "Iron Man 2",
    mainImage:"https://i.ibb.co/WtQYh1m/Iron-Man-2.png",
    imageURL: import("../assets/movies/all/Iron Man 2.png"),
    releaseDate: "May 7, 2010",
    description:
      "Tony Stark faces new challenges as both Iron Man and as Tony Stark. He must deal with his health issues while combating a new foe.",
    mainCharacters: ["Tony Stark / Iron Man"],
    director: "Jon Favreau",
    boxOffice: "$623.9 million",
    imdbRating: "7.0/10",
  },
  {
    movieName: "Thor",
    mainImage:"https://i.ibb.co/pZhns4d/Thor.png",
    imageURL: import("../assets/movies/all/Thor.png"),
    releaseDate: "May 6, 2011",
    description:
      "The powerful but arrogant god Thor (Chris Hemsworth) is cast out of Asgard to live amongst humans on Earth, where he learns what it takes to be a true hero.",
    mainCharacters: ["Thor", "Loki"],
    director: "Kenneth Branagh",
    boxOffice: "$449.3 million",
    imdbRating: "7.0/10",
  },
  {
    movieName: "Captain America The First Avenger",
    mainImage:"https://i.ibb.co/qRZZTMg/Captain-America-The-First-Avenger.png",
    imageURL: import(
      "../assets/movies/all/Captain America The First Avenger.png"
    ),
    releaseDate: "July 22, 2011",
    description:
      "Steve Rogers (Chris Evans) volunteers for a secret experiment that transforms him into the super-soldier Captain America, who must stop the Red Skull from using a mysterious power source for world domination.",
    mainCharacters: ["Steve Rogers / Captain America", "Peggy Carter"],
    director: "Joe Johnston",
    boxOffice: "$370.6 million",
    imdbRating: "6.9/10",
  },
  {
    movieName: "Marvel's The Avengers",
    mainImage:"https://i.ibb.co/FwHkjcV/Marvel-s-The-Avengers.png",
    imageURL: import("../assets/movies/all/Marvel's The Avengers.png"),
    releaseDate: "May 4, 2012",
    description:
      "Earth's mightiest heroes - Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye - must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity.",
    mainCharacters: [
      "Tony Stark / Iron Man",
      "Steve Rogers / Captain America",
      "Thor",
      "Bruce Banner / Hulk",
      "Natasha Romanoff / Black Widow",
      "Clint Barton / Hawkeye",
    ],
    director: "Joss Whedon",
    boxOffice: "$1.518 billion",
    imdbRating: "8.0/10",
  },

  {
    movieName: "Iron Man 3",
    mainImage:"https://i.ibb.co/Yp9GDZH/Iron-Man-3.png",
    imageURL: import("../assets/movies/all/Iron Man 3.png"),
    releaseDate: "May 3, 2013",
    description:
      "Tony Stark faces a powerful enemy, the Mandarin, who wreaks havoc on his personal world. Stark must rely on his ingenuity and instincts to protect his loved ones.",
    mainCharacters: ["Tony Stark / Iron Man", "Pepper Potts"],
    director: "Shane Black",
    boxOffice: "$1.215 billion",
    imdbRating: "7.1/10",
  },
  {
    movieName: "Thor The Dark World",
    mainImage:"https://i.ibb.co/7gffL2L/Thor-The-Dark-World.png",
    imageURL: import("../assets/movies/all/Thor The Dark World.png"),
    releaseDate: "November 8, 2013",
    description:
      "Thor teams up with Loki to defeat the Dark Elf Malekith and save the Nine Realms, including Earth, from a dark and ancient threat.",
    mainCharacters: ["Thor", "Loki", "Jane Foster"],
    director: "Alan Taylor",
    boxOffice: "$644.6 million",
    imdbRating: "6.9/10",
  },
  {
    movieName: "Captain America The Winter Soldier",
    mainImage:"https://i.ibb.co/8bGjHJB/Captain-America-The-Winter-Soldier.png",
    imageURL: import(
      "../assets/movies/all/Captain America The Winter Soldier.png"
    ),
    releaseDate: "April 4, 2014",
    description:
      "Captain America teams up with Black Widow and Falcon to uncover a conspiracy within S.H.I.E.L.D. while facing the formidable Winter Soldier.",
    mainCharacters: [
      "Steve Rogers / Captain America",
      "Natasha Romanoff / Black Widow",
      "Bucky Barnes / Winter Soldier",
    ],
    director: "Anthony Russo, Joe Russo",
    boxOffice: "$714.3 million",
    imdbRating: "7.7/10",
  },
  {
    movieName: "Guardians of the Galaxy",
    mainImage:"https://i.ibb.co/qk6Cvzs/Guardians-of-the-Galaxy.png",
    imageURL: import("../assets/movies/all/Guardians of the Galaxy.png"),
    releaseDate: "August 1, 2014",
    description:
      "A group of intergalactic misfits - Star-Lord, Gamora, Drax, Rocket, and Groot - join forces to stop Ronan the Accuser from using a powerful orb for destruction.",
    mainCharacters: [
      "Peter Quill / Star-Lord",
      "Gamora",
      "Drax the Destroyer",
      "Rocket",
      "Groot",
    ],
    director: "James Gunn",
    boxOffice: "$773.3 million",
    imdbRating: "8.0/10",
  },
  {
    movieName: "Avengers Age of Ultron",
    mainImage:"https://i.ibb.co/YZvs8LP/Avengers-Age-of-Ultron.png",
    imageURL: import("../assets/movies/all/Avengers Age of Ultron.png"),
    releaseDate: "May 1, 2015",
    description:
      "The Avengers must reassemble to defeat Ultron, an A.I. with a god complex, while confronting their own inner conflicts and facing new allies and enemies.",
    mainCharacters: [
      "Tony Stark / Iron Man",
      "Steve Rogers / Captain America",
      "Thor",
      "Bruce Banner / Hulk",
      "Natasha Romanoff / Black Widow",
      "Clint Barton / Hawkeye",
    ],
    director: "Joss Whedon",
    boxOffice: "$1.405 billion",
    imdbRating: "7.3/10",
  },
  {
    movieName: "Ant-Man",
    mainImage:"https://i.ibb.co/TbjZcgx/Ant-Man.png",
    imageURL: import("../assets/movies/all/Ant-Man.png"),
    releaseDate: "July 17, 2015",
    description:
      "Scott Lang, a master thief, must embrace his inner hero as Ant-Man under mentorship from Dr. Hank Pym. Together, they plan a heist that could save the world.",
    mainCharacters: ["Scott Lang / Ant-Man", "Hank Pym", "Hope van Dyne"],
    director: "Peyton Reed",
    boxOffice: "$519.3 million",
    imdbRating: "7.3/10",
  },

  {
    movieName: "Captain America  Civil War",
    mainImage:"https://i.ibb.co/cQLpWTN/Captain-America-Civil-War.png",
    imageURL: import("../assets/movies/all/Captain America  Civil War.png"),
    releaseDate: "May 6, 2016",
    description:
      "Political interference in the Avengers' activities causes a rift between Captain America and Iron Man, leading to a superhero conflict.",
    mainCharacters: [
      "Steve Rogers / Captain America",
      "Tony Stark / Iron Man",
      "Bucky Barnes / Winter Soldier",
      "Black Widow",
      "Falcon",
    ],
    director: "Anthony Russo, Joe Russo",
    boxOffice: "$1.153 billion",
    imdbRating: "7.8/10",
  },
  {
    movieName: "Doctor Strange",
    mainImage:"https://i.ibb.co/wRdcRRQ/Doctor-Strange.png",
    imageURL: import("../assets/movies/all/Doctor Strange.png"),
    releaseDate: "November 4, 2016",
    description:
      "Dr. Stephen Strange, a brilliant but arrogant surgeon, learns the mystic arts from the Ancient One after a career-ending accident, becoming the Sorcerer Supreme.",
    mainCharacters: [
      "Dr. Stephen Strange",
      "Ancient One",
      "Karl Mordo",
      "Wong",
    ],
    director: "Scott Derrickson",
    boxOffice: "$677.7 million",
    imdbRating: "7.5/10",
  },
  {
    movieName: "Guardians of the Galaxy Vol. 2",
    mainImage:"https://i.ibb.co/qn1Ltkj/Eternals.png://i.ibb.co/d0w9PV0/Guardians-of-the-Galaxy-Vol-2.png",
    imageURL: import("../assets/movies/all/Guardians of the Galaxy Vol. 2.png"),
    releaseDate: "May 5, 2017",
    description:
      "The Guardians of the Galaxy unravel the mystery of Peter Quill's parentage while facing cosmic threats and forging new alliances.",
    mainCharacters: [
      "Peter Quill / Star-Lord",
      "Gamora",
      "Drax the Destroyer",
      "Rocket",
      "Groot",
    ],
    director: "James Gunn",
    boxOffice: "$863.8 million",
    imdbRating: "7.6/10",
  },
  {
    movieName: "Spider-Man Homecoming",
    mainImage:"https://i.ibb.co/VCBshHX/Spider-Man-Homecoming.png",
    imageURL: import("../assets/movies/all/Spider-Man Homecoming.png"),
    releaseDate: "July 7, 2017",
    description:
      "Peter Parker balances life as a high school student and the friendly neighborhood Spider-Man, facing the Vulture as his new adversary.",
    mainCharacters: [
      "Peter Parker / Spider-Man",
      "Tony Stark / Iron Man",
      "Vulture",
    ],
    director: "Jon Watts",
    boxOffice: "$880.2 million",
    imdbRating: "7.4/10",
  },
  {
    movieName: "Thor Ragnarok",
    mainImage:"https://i.ibb.co/my4M8jd/Thor-Ragnarok.png",
    imageURL: import("../assets/movies/all/Thor Ragnarok.png"),
    releaseDate: "November 3, 2017",
    description:
      "Thor races against time to stop Ragnarok - the destruction of Asgard - at the hands of the ruthless Hela, with help from old and new allies.",
    mainCharacters: ["Thor", "Loki", "Hulk", "Valkyrie", "Hela"],
    director: "Taika Waititi",
    boxOffice: "$854 million",
    imdbRating: "7.9/10",
  },
  {
    movieName: "Black Panther",
    mainImage:"https://i.ibb.co/2q2CRbD/Black-Panther.png",
    imageURL: import("../assets/movies/all/Black Panther.png"),
    releaseDate: "February 16, 2018",
    description:
      "T'Challa returns to Wakanda to take his rightful place as king. He faces challenges from within and outside the country, including the formidable Killmonger.",
    mainCharacters: [
      "T'Challa / Black Panther",
      "Killmonger",
      "Okoye",
      "Shuri",
    ],
    director: "Ryan Coogler",
    boxOffice: "$1.346 billion",
    imdbRating: "7.3/10",
  },
  {
    movieName: "Avengers Infinity War",
    mainImage:"https://i.ibb.co/Qr52KgN/Avengers-Infinity-War.png",
    imageURL: import("../assets/movies/all/Avengers Infinity War.png"),
    releaseDate: "April 27, 2018",
    description:
      "The Avengers and their allies must be willing to sacrifice everything in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    mainCharacters: [
      "Tony Stark / Iron Man",
      "Steve Rogers / Captain America",
      "Thor",
      "Bruce Banner / Hulk",
      "Natasha Romanoff / Black Widow",
      "Clint Barton / Hawkeye",
      "Thanos",
    ],
    director: "Anthony Russo, Joe Russo",
    boxOffice: "$2.048 billion",
    imdbRating: "8.4/10",
  },
  {
    movieName: "Ant-Man and the Wasp",
    mainImage:"https://i.ibb.co/QvsWBFN/Ant-Man-and-the-Wasp.png",
    imageURL: import("../assets/movies/all/Ant-Man and the Wasp.png"),
    releaseDate: "July 6, 2018",
    description:
      "Scott Lang teams up with Hope van Dyne as the Ant-Man and the Wasp to uncover secrets from their past while facing a new enemy, Ghost.",
    mainCharacters: [
      "Scott Lang / Ant-Man",
      "Hope van Dyne / Wasp",
      "Ghost",
      "Hank Pym",
    ],
    director: "Peyton Reed",
    boxOffice: "$622.7 million",
    imdbRating: "7.1/10",
  },
  {
    movieName: "Captain Marvel",
    mainImage:"https://i.ibb.co/x6QTmZF/Captain-Marvel.png",
    imageURL: import("../assets/movies/all/Captain Marvel.png"),
    releaseDate: "March 8, 2019",
    description:
      "Vers, a Kree warrior, becomes Captain Marvel and finds herself on Earth in the 1990s, where she must stop an alien invasion while uncovering her past.",
    mainCharacters: [
      "Carol Danvers / Captain Marvel",
      "Nick Fury",
      "Talos",
      "Maria Rambeau",
    ],
    director: "Anna Boden, Ryan Fleck",
    boxOffice: "$1.128 billion",
    imdbRating: "6.8/10",
  },
  {
    movieName: "Avengers Endgame",
    mainImage:"https://i.ibb.co/MgJFsB4/Avengers-Endgame.png",
    imageURL: import("../assets/movies/all/Avengers Endgame.png"),
    releaseDate: "April 26, 2019",
    description:
      "The Avengers and their allies must assemble one last time to undo Thanos' actions and restore order to the universe, no matter the cost.",
    mainCharacters: [
      "Tony Stark / Iron Man",
      "Steve Rogers / Captain America",
      "Thor",
      "Bruce Banner / Hulk",
      "Natasha Romanoff / Black Widow",
      "Clint Barton / Hawkeye",
    ],
    director: "Anthony Russo, Joe Russo",
    boxOffice: "$2.798 billion",
    imdbRating: "8.4/10",
  },
  {
    movieName: "Spider-Man Far From Home",
    mainImage:"https://i.ibb.co/0YvDPWv/Spider-Man-Far-From-Home.png",
    imageURL: import("../assets/movies/all/Spider-Man Far From Home.png"),
    releaseDate: "July 2, 2019",
    description:
      "Peter Parker tries to enjoy a European vacation with his friends, but his plans are disrupted when Nick Fury recruits him to battle mysterious elemental creatures.",
    mainCharacters: [
      "Peter Parker / Spider-Man",
      "Mysterio",
      "Nick Fury",
      "MJ",
    ],
    director: "Jon Watts",
    boxOffice: "$1.131 billion",
    imdbRating: "7.5/10",
  },

  {
    movieName: "Black Widow",
    mainImage:"https://i.ibb.co/Jd5DVpT/Black-Widow.png",
    imageURL: import("../assets/movies/all/Black Widow.png"),
    releaseDate: "July 9, 2021",
    description:
      "Natasha Romanoff confronts the darker parts of her past when a dangerous conspiracy with ties to her former life as a spy arises.",
    mainCharacters: [
      "Natasha Romanoff / Black Widow",
      "Yelena Belova",
      "Alexei Shostakov / Red Guardian",
    ],
    director: "Cate Shortland",
    boxOffice: "$379.6 million",
    imdbRating: "7.4/10",
  },
  {
    movieName: "Shang-Chi and the Legend of the Ten Rings",
    mainImage:"https://i.ibb.co/K6vShJw/Shang-Chi-and-the-Legend-of-the-Ten-Rings.png",
    imageURL: import(
      "../assets/movies/all/Shang-Chi and the Legend of the Ten Rings.png"
    ),
    releaseDate: "September 3, 2021",
    description:
      "Shang-Chi, a skilled martial artist, confronts his past and is drawn into the mysterious Ten Rings organization's web.",
    mainCharacters: ["Shang-Chi", "Xialing", "Wenwu / The Mandarin"],
    director: "Destin Daniel Cretton",
    boxOffice: "$430.3 million",
    imdbRating: "7.3/10",
  },
  {
    movieName: "Eternals",
    mainImage:"https://i.ibb.co/qn1Ltkj/Eternals.png",
    imageURL: import("../assets/movies/all/Eternals.png"),
    releaseDate: "November 5, 2021",
    description:
      "A race of immortal beings known as Eternals must reunite to protect Earth from their evil counterparts, the Deviants.",
    mainCharacters: ["Ajak", "Ikaris", "Sersi", "Thena", "Druig"],
    director: "Chloé Zhao",
    boxOffice: "$402.2 million",
    imdbRating: "6.8/10",
  },
  {
    movieName: "Spider-Man No Way Home",
    mainImage:"https://i.ibb.co/dfpm7T2/Spider-Man-No-Way-Home.png",
    imageURL: import("../assets/movies/all/Spider-Man No Way Home.png"),
    releaseDate: "December 17, 2021",
    description:
      "Spider-Man's identity is revealed, leading to a multiverse crisis that brings past villains into his world, forcing him to seek help from Doctor Strange.",
    mainCharacters: [
      "Peter Parker / Spider-Man",
      "Doctor Strange",
      "Green Goblin",
      "Doctor Octopus",
    ],
    director: "Jon Watts",
    boxOffice: "$1.907 billion",
    imdbRating: "8.4/10",
  },
  {
    movieName: "Doctor Strange in the Multiverse of Madness",
    mainImage:"https://i.ibb.co/ZxHMch7/Doctor-Strange-in-the-Multiverse-of-Madness.png",
    imageURL: import(
      "../assets/movies/all/Doctor Strange in the Multiverse of Madness.png"
    ),
    releaseDate: "May 6, 2022",
    description:
      "Doctor Strange faces dark forces from parallel dimensions while dealing with personal challenges, teaming up with Scarlet Witch to save reality.",
    mainCharacters: [
      "Doctor Strange",
      "Scarlet Witch",
      "Wong",
      "America Chavez",
    ],
    director: "Sam Raimi",
    boxOffice: "TBD",
    imdbRating: "TBD",
  },
  {
    movieName: "Thor Love and Thunder",
    mainImage:"https://i.ibb.co/9ZJ7jFH/Thor-Love-and-Thunder.png",
    imageURL: import("../assets/movies/all/Thor Love and Thunder.png"),
    releaseDate: "July 8, 2022",
    description:
      "Thor must contend with a new threat in the form of Jane Foster, who wields the power of Thor as the Mighty Thor.",
    mainCharacters: ["Thor", "Jane Foster / Mighty Thor", "Valkyrie", "Loki"],
    director: "Taika Waititi",
    boxOffice: "TBD",
    imdbRating: "TBD",
  },
  {
    movieName: "Black Panther Wakanda Forever",
    mainImage:"https://i.ibb.co/fSRtNrL/Black-Panther-Wakanda-Forever.png",
    imageURL: import("../assets/movies/all/Black Panther Wakanda Forever.png"),
    releaseDate: "November 11, 2022",
    description:
      "Following the events of 'Black Panther,' Wakanda faces new challenges and threats that put the nation and its people at risk.",
    mainCharacters: ["Shuri", "Okoye", "M'Baku", "Nakia"],
    director: "Ryan Coogler",
    boxOffice: "TBD",
    imdbRating: "TBD",
  },

  {
    movieName: "Ant-Man and the Wasp Quantumania",
    mainImage:"https://i.ibb.co/zxZFKZW/Ant-Man-and-the-Wasp-Quantumania.png",
    imageURL: import(
      "../assets/movies/all/Ant-Man and the Wasp Quantumania.png"
    ),
    releaseDate: "February 17, 2023",
    description:
      "Scott Lang (Ant-Man) grapples with the consequences of quantum exploration while facing a powerful new adversary, Kang the Conqueror.",
    mainCharacters: [
      "Scott Lang / Ant-Man",
      "Hope van Dyne / Wasp",
      "Hank Pym",
      "Kang the Conqueror",
    ],
    director: "Peyton Reed",
    boxOffice: "TBD",
    imdbRating: "TBD",
  },
  {
    movieName: "Guardians of the Galaxy Vol. 3",
    mainImage:"https://i.ibb.co/jVKcpP1/Guardians-of-the-Galaxy-Vol-3.png",
    imageURL: import("../assets/movies/all/Guardians of the Galaxy Vol. 3.png"),
    releaseDate: "May 5, 2023",
    description:
      "The Guardians face new cosmic threats and personal challenges as they continue their adventures across the galaxy.",
    mainCharacters: [
      "Peter Quill / Star-Lord",
      "Gamora",
      "Drax the Destroyer",
      "Rocket",
      "Groot",
    ],
    director: "James Gunn",
    boxOffice: "TBD",
    imdbRating: "TBD",
  },
  {
    movieName: "The Marvels",
    mainImage:"https://i.ibb.co/58X7KdT/The-Marvels.png",
    imageURL: import("../assets/movies/all/The Marvels.png"),
    releaseDate: "November 11, 2023",
    description:
      "Carol Danvers (Captain Marvel) teams up with Kamala Khan (Ms. Marvel) and Monica Rambeau to face a formidable new enemy.",
    mainCharacters: [
      "Carol Danvers / Captain Marvel",
      "Kamala Khan / Ms. Marvel",
      "Monica Rambeau",
    ],
    director: "Nia DaCosta",
    boxOffice: "TBD",
    imdbRating: "TBD",
  },
];

export default MOVIES_DATA2;





