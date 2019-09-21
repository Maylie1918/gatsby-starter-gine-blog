module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/reabnormal/8e01abd03643497abb2f98ac2512bb29?v=59b694f761f14af1be865f997e001611"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/reabnormal/cbe8a5a281c045b2a5937438466e801f?v=fa9c613f8f8e457195f0288de82d8ccb"
            }
        }
    ],
}
