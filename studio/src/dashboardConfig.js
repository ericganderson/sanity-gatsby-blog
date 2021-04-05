export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606a7c15efe9f239d6520d85",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-g5ayc77y",
                  apiId: "ae31a0ee-f5b3-427b-9012-999a70994db9",
                },
                {
                  buildHookId: "606a7c15d977d326e7b548d3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-j9869cw1",
                  apiId: "11fa8ac2-3a5e-4839-a0c3-964d528485a1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ericganderson/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-j9869cw1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
