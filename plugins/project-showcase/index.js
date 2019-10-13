const ID = "project-showcase";

module.exports = {
    name: ID,
    apply: (api, options = {}) => {
        api.hooks.onCreatePages.tap(ID, (...params) => {
            let projects = [];
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

            projects = projects.sort((a, b) => a.name.localeCompare(b.name));

            for (const page of toInject) {
                page.showcase = projects;
            }
        });
    }
};
