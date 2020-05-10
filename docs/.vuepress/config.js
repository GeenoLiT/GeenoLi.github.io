module.exports = {
  //base: "/blog/",
  //title: 'Geeno's blog',
  //description: 'Just playing around',
  themeConfig: {
    logo: "/assets/img/hero.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "Webfront",
        ariaLabel: "Webfront Language",
        items: [
          { text: "Html", link: "/webfront/html/" },
          { text: "Css", link: "/webfront/css/" },
          { text: "Javascript", link: "/webfront/javascript/" }
        ]
      },
      {
        text: "Bakend",
        ariaLabel: "Bakend Language",
        items: [
          { text: "DotNet", link: "/bakend/dotnet/" },
          { text: "NetCore", link: "/bakend/netcore/" }
        ]
      },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "English", link: "/language/english/" }
        ]
      },
      { text: "External", link: "https://google.com" }
    ],
    //sidebar: 'auto',
    sidebarDepth: 2,
    sidebar: [
      //"" /* /readme.md/ */,
      //"about" /* 根路径下的about */,
      // {
      //   title: "Group 1", // 必要的
      //   path: "/orderpost/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //   collapsable: true, // 可选的, 默认值是 true,
      //   sidebarDepth: 2, // 可选的, 默认值是 1
      //   children: ["/orderpost/three"] //界面路径--必须全路径
      // }
    ],
    nextLinks: true,
    preLinks: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "GeenoLi/GeenoLi.github.io",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "GeenoLi/GeenoLi.github.io",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！"
  },
  plugins: ["@vuepress/back-to-top"] //回到顶部插件
};
