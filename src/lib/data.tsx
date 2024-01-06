import { Github, Twitter, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-vuejs.svg';
import LogoJenkins from '/public/images/logos/icon-jenkins.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoKubernetes from '/public/images/logos/icon-kube.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoDyanamoDB from '/public/images/logos/icon-dynamodb.svg';
import LogoAWS from '/public/images/logos/icon-aws.svg';
import LogoAWSLight from '/public/images/logos/icon-aws-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoPersistent from '/public/images/logos/logo-persistent.svg';
import LogoPersistentLight from '/public/images/logos/logo-persistent-light.svg';

import EST from '/public/images/logos/cisco-est.png';
import U from '/public/images/logos/cisco-u.png';



import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/omahir.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  INSTAGRAM: '',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/omahir3010/',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/om_ahirr',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/om-ahir-324618218/',
  }
  
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Vue.js/Vue3',
    logo: LogoReact,
    url: 'https://vuejs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'AWS DynamoDB',
    logo: LogoDyanamoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },

  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Jenkins',
    logo: LogoJenkins,
    url: 'https://www.jenkins.io/',
  },
  {
    label: 'Kubernetes',
    logo: LogoKubernetes,
    url: 'https://kubernetes.io/',
  },
  {
    label: 'AWS',
    logo: LogoAWS,
    darkModeLogo: LogoAWSLight,
    url: 'https://aws.amazon.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoPersistentLight,
    darkModeLogo: LogoPersistent,
    logoAlt: 'Persistent Systems',
    position: 'Software Engineer (Cisco)',
    startDate: new Date(2022, 5),
    currentlyWorkHere: true,
    summary: ['Worked as a Intern (VueJs, TailwindCSS , NodeJs/ExpressJs).'],
    projectdata: [
      {
        name: 'CISCO U',
        description: [
          `Built a Cisco's digital learning experience using Vue.js and Tailwind CSS which can guide learners
          to the right role or solution, helping them grow their skills, to accelerate their business
          transformation.`,
          `Implemented Manage Licences Functionality and Manage Entitlements Functionality for Cisco U.
          and Cisco U Admin. Proficient in Vue3, VueJs, TailwindCSS, Storybook and Figma.`
        ],
        technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
      },
      {
        name: `Cisco's E-Service Training`,
        description: [
          `Developed an E-Service Training site, offering essential resources for Cisco's Third-Party
          Maintainer Field Engineers, referred to as 'FieldX.`,
          ` Employed AWS CloudFront for efficient content distribution and AWS S3 for serving static content.`,
          `Migrated Cisco's FieldX CI/CD from Jenkins to AWS CodeBuild and AWS CodePipeline for
          Orchestration.`,
          `Implemented Recent Offering feature End to End which shows recently added Categories in the
          FieldX Application.`,
          `Implemented AWS Cognito for authentication and seamlessly integrated it with Cisco's OKTA,
          ensuring OAUTH2 compatibility.`,
          `Implemented Manage Licences Functionality and Manage Entitlements Functionality for Cisco U.
          and Cisco U Admin. Proficient in Vue3, VueJs, TailwindCSS, Storybook and Figma.`
        ],
        technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
      },
      {
        name: `Cisco's E-Service Training Admin`,
        description: [
          `Build a FieldX Admin “End-to-End” Application which will perform Operations for the management of E-
          Service Training Categories Contents and Products by Admin Users and Third Party Venders.`
        ],
        technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
      },
      {
        name: `Cisco's Learning Network Space`,
        description: [
          `Effectively migrated Cisco's Learning Space documentation page from Cisco's DevNet Site to
          Cisco's Learning Space Application, converting markdown files to HTML and deploying the updated
          version in a production environment.`
        ],
        technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
      },
      {
        name: `Cisco's E-Reader Application`,
        description: [
          `Engineered an advanced tool for Cisco's E-Reader Application, empowering users to seamlessly
          highlight text and add annotations`
        ],
        technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
      }
    ]
  },
  {
    logo: LogoPersistentLight,
    darkModeLogo: LogoPersistent,
    logoAlt: 'persistent logo',
    position: 'Intern',
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 5),
    summary: ['Worked as a Intern (VueJs, TailwindCSS , NodeJs/ExpressJs).'],
    projectdata: [
      {
        name: 'Cisco POC',
        description: [
          'Worked as a Intern (VueJs, TailwindCSS , NodeJs/ExpressJs).'
        ],
        technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
      }
    ]
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Cisco U',
    description:
      `Cisco's digital learning experience which can guide learners to the right role or solution, helping them grow their skills, to accelerate their business transformation.`,
    url: 'https://u.cisco.com',
    previewImage: U,
    technologies: [
      'Vue3', 'Typescript', 'TailwindCSS', 'Storybook', 'Figma', 'JavaScript'
    ],
  },
  {
    name: 'Cisco E-Service Training',
    description:
      'The E-Service Training site and resources support Cisco’s Third Party Maintainer Field Engineers. Quickly access Job Aid support tools like COMPASS, Mobility related Instructions, and Field Service Reference guides.',
    url: 'https://est.cisco.com',
    previewImage: EST,
    technologies: [
      'Vue3', 'PrimeVue Components', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'AWS CloudFront',
       'AWS S3', 'AWS Cognito', 'AWS Lambda', 'OAUTH2', 'AWS DynamoDB', 'AWS API Gateway', 'AWS CodeBuild', 'AWS CodePipeline'
    ],
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  
 
];
