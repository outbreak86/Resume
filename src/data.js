module.exports = {
  title: 'Royce Rogers',
  header: "Hi, I'm Royce Rogers",
  description: "I'm a developer currently teaching game development at Johnson County Community College. I'm a freelance developer with 3 years of experience, having worked with clients and developed personal projects. I enjoy building everything from small business applications to large games.",
  name: 'Royce Rogers',
  footerTitle: 'Software Engineer',
  email: 'me@roycerogers.com',
  cta: {
    label: 'Get my resume',
    url: 'resume.pdf',
  },
  socials: [
    { icon: 'twitter', url: '//' },
    { icon: 'github-circled', url: '//' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    { icon: 'dribbble', url: '//' },
    { icon: 'skype', url: '//' },
    { icon: 'linkedin-squared', url: '//' },
  ],
  projects: [
    {
      name: 'ZenFold',
      description: 'ZenFold is a mobile game in which the player fold pieces to match a goal shape.',
      tags: ['Unity', 'C#', 'Android', 'iOs'],
      alt: 'ZenFold Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: '2 - Puzzle.png',
      url: '//'
    },
    {
      name: 'Merc-01',
      description: 'Merc-01 is a fast paced twin-stick shooter built on top of pyglet.',
      tags: ['Python', 'WebGL', 'Pyglet'],
      img: 'merc-01.png',
      url: '//'
    }
  ],
  experiences: [
    {
      title: 'Senior Software Engineer at Company A',
      timeline: 'Jan 2016 - Present',
      description: 'Implemented Gamification for system',
    },
    {
      title: 'Fullstack Software Engineer at Company B',
      timeline: 'Feb 2015 - Dec 2015',
      responsibilities: [
        'Worked with a global team of developers and artists for the implementation of new features in Existing Codebase of a Free-to-play MMO',
        'Increased rate of tickets/tasks done by the team up to 300% within first few weeks!',
        'Added Abstractions on Server API to Minimize Duplicate Code'
      ]
    }
  ],
  testimonials: [
    {
      quote: 'Incredibly talented and hardworking. A super friendly guy who is a frequent communicator',
      name: 'Person Name',
      title: 'CEO at Company'
    },
    {
      quote: 'Wow, thank you for this, you probably have the most intuitive explanation for this problem!',
      name: 'Person Name'
    }
  ]
}
