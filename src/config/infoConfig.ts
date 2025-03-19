export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Akuma'
export const headline = 'Student at Kunming University.'
export const introduction =
  "Here's my personal website. I'm a student at Kunming University.I major in Automation but I alse learn about AI and Computer Science."
export const email = 'wx3515753265@gmail.com'
export const githubUsername = 'Akuma55532'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Derek Hu. I'm from Hubei and an alumnus of BUPT, UChicago, and Tsinghua. I’ve been teaching Computer Science at SCLS since 2020.",
  'Currently I am working on a new course called AI Camp, an innovative course where high school students create real-world products and startups while exploring the frontiers of AI.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'DouYin',
    icon: 'DouYin',
    href: 'https://www.douyin.com/',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://bilibili.com',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
