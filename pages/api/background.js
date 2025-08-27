const background = [
  {
    eduCards: [
      {
        id: 0,
        title:
          "Khwaja Fareed University of Engineering & Information Technology",
        degree: "BS, Computer Science",
        detail:
          "Bachelor's Degree in Computer Science from KFUEIT Rahim Yar Khan.",
        year: "2018-2022",
      },
      {
        id: 1,
        title: "Punjab College Rahim Yar Khan",
        degree: "Fsc, Pre Engineering",
        detail:
          "Completed FSC part 1 and part 2 in Pre-Engineering from Punjab College, Rahim Yar Khan.",
        year: "2015-2017",
      },
      {
        id: 2,
        title: "National Garrison Secondary School",
        degree: "SSC, Science Subjects",
        detail:
          "Completed SSC part 1 and part 2 in Science subjects from National Garrison Secondary School, Rahim Yar Khan",
        year: "2013-2015",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "SCube",
        role: "Mern Stack Developer",
        url: "no website",
        desc: "As a mern stack developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "02/2023 - Present",
        location: "Lahore, Pakistan",
      },
      {
        id: 2,
        title: "GenArk",
        role: "Frontend Developer",
        url: "no website",
        desc: "As a mern stack developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "08/2024 - 06/2025",
        location: "Lahore, Pakistan",
      },
      {
        id: 3,
        title: "Deminum",
        role: "PHP Developer",
        url: "no website",
        desc: "As a mern stack developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "03/2022 - 07/2024",
        location: "Lahore, Pakistan",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
