module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add(".github/**");
  eleventyConfig.ignores.add(".superpowers/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("_site/**");
  eleventyConfig.ignores.add("package.json");
  eleventyConfig.ignores.add("package-lock.json");

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Standalone pages (pages/about.md -> /about/). Ordered by optional `order`.
  eleventyConfig.addCollection("pages", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("pages/*.md")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
  });

  eleventyConfig.addFilter("htmlDate", (date) => {
    return date.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("dateCn", (date) => {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(date);
  });

  eleventyConfig.addFilter("asArray", (value) => {
    if (!value) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  });

  return {
    // Overridden in CI with --pathprefix=/<repo-name>/ so GitHub Pages
    // project sites (https://user.github.io/<repo>/) resolve links correctly.
    pathPrefix: "/",
    dir: {
      input: ".",
      includes: "src/_includes",
      layouts: "src/_layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
