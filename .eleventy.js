const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const searchFilter = require("./src/filters/searchFilter");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addFilter("search", searchFilter);
    eleventyConfig.addPlugin(EleventyRenderPlugin, {rootPath: "src"});
    eleventyConfig.addCollection("posts", collection => {
        return [...collection.getFilteredByGlob("./src/posts/*.md")];
    });
    return {
        dir: {
            input: "src",
            output: "production"
        },
    };
};