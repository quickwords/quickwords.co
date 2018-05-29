module.exports = {
    title: 'Quickwords',
    description: 'Quickwords is an open-source alternative to Text Expander written in Electron.',
    base: '/docs/',
    head: [
        ['link', { rel: 'icon', href: '/assets/favicon.png' }],
    ],
    themeConfig: {
        repo: 'quickwords/quickwords',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: 'Edit this page on GitHub',
        sidebarDepth: 2,
        nav: [
            { text: 'Manual', link: '/' },
        ],
        sidebar: [
            ['/', 'Home'],
            '/installation',
            '/creating-snippet',
            '/safety',
            '/authors-and-license',
        ],
    },
}
