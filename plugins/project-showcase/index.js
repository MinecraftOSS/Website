const ID = "project-showcase";

module.exports = {
    name: ID,
    apply: (api, options = {}) => {
        api.hooks.onCreatePages.tap(ID, (...params) => {
            const projects = [];
            const toInject = [];

            for (const page of api.pages.values()) {
                if (page.injectShowcase) {
                    toInject.push(page);
                }

                if (!page.project) continue;

                const project = {
                    slug: page.slug,
                    name: page.title,
                    ...page.project
                };

                projects.push(project);
            }

            for (const page of toInject) {
                page.showcase = projects;
            }
        });
    }
};
