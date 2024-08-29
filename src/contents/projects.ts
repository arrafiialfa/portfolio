import { IProject } from ".";

export const projectHighlight = [




]

export const projects: IProject[] = [
    {
        id: 2,
        projectName: 'Nestjs Timesheet API',
        repository: "private",
        techIcon: [],
        description: [
            "an API for recording and reporting employee work hours at PT. PLN PUSMANPRO UPMK II. Previously, work hours were manually recorded in Excel timesheets, which were used for payroll processing. To improve efficiency and reduce human error, the timesheet was digitized by developing an API using the Nest.js framework. The API includes 15 endpoints for authenticated users and integrates a monitoring system with Grafana and Loki for log visualization and queries. Functional testing with Blackbox Testing showed that all endpoints functioned as designed without bugs or errors."

        ]
    },
    {
        id: 3,
        projectName: 'Google maps crawler',
        repository: "private",
        techIcon: [],
        description: [
            'Crawler built using Node.js with puppeteer. Used to crawl Google Maps data on coffe shops '
        ]
    },
    {
        id: 4,
        projectName: 'Laravel Bengkel App (Motobuddies)',
        repository: "https://github.com/ilhamn65/ADSI-MotoBuddies-1",
        techIcon: [],
        description: ["MotoBuddies, an automotive application by PT MotoBuddies, aims to implement an information system to enhance customer service for those who purchase products or use their services. The requirements were identified through discussions with managers, dealership staff, and customer interviews. The development process began with system design using Business Process Modeling (BPM) and user interaction modeling through a Use Case Diagram (UCD). The system was then modeled using sequence and class diagrams and implemented using the Model View Controller (MVC) architecture with the Laravel framework and MySQL database."]
    },
    {
        id: 1,
        projectName: 'Management Information System',
        repository: "private",
        techIcon: [],
        description: [
            "A project where I implemented a comprehensive management information system that significantly improved company operations. With features such as progress tracking of each worker, monitoring and reporting, and robust user authentication and authorization mechanisms",
        ]
    },
];
