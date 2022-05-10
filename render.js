import boxen from 'boxen';
import chalk from 'chalk';
import columnify from 'columnify';

const contacts = [
  { name: 'Work', content: `Founder at ${chalk.blue('BackendDoctor')}` },
  { name: '', content: chalk.blue('https://backenddoctor.com') },
  {},
  {
    name: 'LinkedIn',
    content: `https://linkedin.com/in/${chalk.blue('zoltanburgermeiszter')}`,
  },
  {
    name: 'Twitter',
    content: `https://twitter.com/${chalk.cyan('zburgermeiszter')}`,
  },
  {},
  {
    name: 'GitHub',
    content: `https://github.com/${chalk.green('zburgermeiszter')}`,
  },
  {
    name: 'npm',
    content: `https://npmjs.com/${chalk.red('~zburgermeiszter')}`,
  },
  {
    name: 'DockerHub',
    content: `https://hub.docker.com/u/${chalk.blue('zburgermeiszter')}`,
  },
];

const boxConfig = {
  borderStyle: 'round',
  padding: 1,
  margin: 1,
  float: 'left',
  textAlignment: 'center',
  title: chalk.bold.red('npx zburgermeiszter'),
  titleAlignment: 'center',
};

const contactsTable = columnify(contacts, {
  showHeaders: false,
  columnSplitter: '  ',
  config: {
    name: {
      align: 'right',
      dataTransform: (key) => chalk.white.bold(key),
    },
    content: {
      align: 'left',
    },
  },
});

const skills = ['DevOps', 'CI/CD', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'];

const content = [
  chalk.bold.white('Zoltan Burgermeiszter'),
  'Cloud Contractor',
  '',
  skills.join(' - '),
  '',
  contactsTable,
].join('\n');

process.stdout.write('\x1b[2J');
process.stdout.write('\x1b[0f');

console.log(chalk.green(boxen(chalk.blackBright(content), boxConfig)));
