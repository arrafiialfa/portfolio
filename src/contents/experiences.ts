import { IExperience } from ".";
import { faChrome, faLaravel, faNodeJs, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

export const experiences: IExperience[] = [
    {
        id: 1,
        position: "IT Intern",
        company: "PT. Rastanura Rayani Saputra",
        timeline: ' September 2023 -  July 2024 ',
        techIcon: [
            {
                id: 0,
                name: "Typescript",
                type: "text",
            },
            {
                id: 1,
                name: "Next.js",
                type: "text",
            },
            {
                id: 2,
                name: "React.js",
                type: "fontawesome",
                source: faReact
            },
            {
                id: 3,
                name: "MongoDB",
                type: "text",
            },
            {
                id: 4,
                name: "Cloudinary",
                type: "text",
            },
            {
                id: 5,
                name: "Cloudinary",
                type: "text",
            }
        ],
        description: [
            'Improved company’s operations by implementing management information system' +
            'which reduced document searching time by 90 %.The IS also provide reporting and improve evaluation of company’s business process',
            'The entire development is done using SDLC method starting from business process modelling,' +
            'requirements engineering, design and implementation all the way to functional testing and unit testing.',
            'the system was developed using React.js, Next.js, Typescript and MongoDB using mongoose as the ORM as well as Cloudinary to store images.',
        ],
    },
    {
        id: 2,
        position: "Freelancer",
        company: "Non Company",
        timeline: 'September 2023 - November 2023',
        techIcon: [
            {
                id: 1,
                name: "Node.js",
                type: "fontawesome",
                source: faNodeJs
            },
            {
                id: 2,
                name: "Laravel",
                type: "fontawesome",
                source: faLaravel
            },
            {
                id: 3,
                name: "Baileys (WhatsApp Bot)",
                type: "fontawesome",
                source: faWhatsapp,
            },
            {
                id: 4,
                name: "Validation Testing",
                type: "text",
            },
        ],
        description: ['Extended reporting features of previous application to collect citizen reports of wildfire from whatsapp group messages using Baileys whatsapp bot and displaying it to internal Laravel dashboard.',
            'Tested in-development website using blackbox testing methods and found 4 findings and provide 8 suggestions to improve the website',
            'Tested in-development APK using blackbox testing methods and found 4 findings and provide 12 suggestions'
        ]
    },
    {
        id: 3,
        position: "Web Developer Intern",
        company: "PT. Surveyor Indonesia",
        timeline: 'August 2023 - October 2023',
        techIcon: [
            {
                id: 1,
                name: "Nest.js",
                type: "text",
            },
            {
                id: 2,
                name: "TypeScript",
                type: "text",
            },
            {
                id: 3,
                name: "Grafana",
                type: "text",
            },
            {
                id: 4,
                name: "Loki",
                type: "text",
            },
        ],
        description: [
            'Created RESTful API for Timesheet application using Nestjs for existing monolithic application and deploying it as Docker image to remote server',
            'Established monitoring solution for the API using Grafana dashboard and Loki']
    },
    {
        id: 4,
        position: "Software Engineer Intern",
        company: "PT. Virus Media Investara",
        timeline: 'July 2022 - September 2022',
        techIcon: [
            {
                id: 1,
                name: "React.js",
                type: "fontawesome",
                source: faReact
            },
            {
                id: 4,
                name: "MongoDB",
                type: "text",
            },
            {
                id: 3,
                name: 'Puppeteer',
                type: 'fontawesome',
                source: faChrome,
            }
        ],
        description: [
            'Improve company’s internal React dashboard application by fixing and adding new features ',
            'Generate reports of 1000+ Coffe Shops in Jakarta using chrome crawler'
        ]
    }
];

export const organizations: IExperience[] = [
    {
        id: 1,
        position: "Team Leader Marketing",
        company: "AIESEC in Universitas Brawijaya",
        timeline: 'March 2019 -  2020',
        description: ['As the leader of a dedicated team of three, I spearheaded the creation of comprehensive market research analysis that provided critical insights into our target demographics and market trends.' +
            " Utilizing these insights, I developed innovative marketing strategies that significantly enhanced our brand's reach and engagement.Additionally," +
            " I organized and executed infosessions that effectively promoted AIESEC brand and fostered strong customer relationships. "],
    },
    {
        id: 2,
        position: "Team Member Marketing",
        company: "AIESEC in Universitas Brawijaya",
        timeline: 'March 2018 -  2019',
        description: ["Consistently created 2-3 graphic design contents per week to promote our brands, ensuring visually appealing and effective marketing materials. In addition to my design responsibilities, I engaged in door-to-door sales, directly interacting with potential customers to introduce and sell our products. Furthermore, I conducted informative sessions, providing detailed explanations around our product, which helped to build trust and drive sales."],
    },
    {
        id: 3,
        position: "Organizing Committee Programs Division for SDG Project",
        company: "AIESEC in Universitas Brawijaya",
        timeline: 'Oct 2017 -  2018',
        description: ["As a key member of the Organizing Committee Programs Division for the SDG Project, I led a diverse team of volunteers from Germany, China, and Korea, fostering a collaborative and productive environment. I was responsible for creating detailed event programs and schedules, ensuring all activities were well-planned and executed. I successfully conducted various events, coordinating all logistical aspects to ensure smooth operations. Additionally, I arranged and conducted informative sessions, providing crucial information to participants and stakeholders about our project goals and achievements."],
    }
]