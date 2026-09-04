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

  eleventyConfig.addFilter("assetUrl", (value) => {
    if (!value || /^(https?:)?\/\//.test(value) || value.startsWith("data:")) {
      return value;
    }

    return value.replace(/^\/+/, "");
  });

  return {
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

