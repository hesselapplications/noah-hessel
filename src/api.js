import Prismic from "prismic-javascript";

async function getApi() {
    return await Prismic.getApi("https://noahhessel.cdn.prismic.io/api/v2");
}

async function query(...args) {
    const api = await getApi();
    return await api.query(...args);
}

async function getSingle(...args) {
    const api = await getApi();
    return await api.getSingle(...args);
}

async function getByUID(...args) {
    const api = await getApi();
    return await api.getByUID(...args);
}

export default {
    // ABOUT ME
    async getAboutMe() {
        var { data } = await getSingle("about_me");
        return {
            aboutMe: data.about_me,
            src: data.my_picture.url,
            links: data.links
        }
    },

    // EXPERIENCE
    async getExperience() {
        var { data } = await getSingle("experience");
        return data.experience;
    },

    // SKILLS
    async getSkills() {
        var { data } = await getSingle("skills");
        return data.skills;
    },

    // PROJECTS
    async getProjects() {
        var predicates = Prismic.Predicates.at("document.type", "project");
        var options = {
            orderings: "[document.first_publication_date]"
        };

        var { results } = await query(predicates, options);

        return results.map(result => {
            return {
                src: result.data.heading_images.map(heading_image => heading_image.heading_image.url),
                title: result.data.title[0].text,
                description: result.data.description[0].text,
                url: result.data.project_link.url
            }
        });
    },

    // BLOG POSTS
    async getBlogPosts() {
        var predicates = Prismic.Predicates.at("document.type", "blog_post");
        var options = {
            orderings: "[document.first_publication_date]",
            pageSize: 3
        };

        var { results } = await query(predicates, options);

        return results.map((result) => {
            return {
                src: result.data.heading_images.map(heading_image => heading_image.heading_image.url),
                title: result.data.title[0].text,
                description: result.data.description[0].text,
                uid: result.uid,
            };
        });
    },

    // BLOG POST
    async getBlogPost(uid) {
        var blogPost = await getByUID("blog_post", uid);
        console.log(blogPost);
        return {
            datePosted: blogPost.first_publication_date,
            src: blogPost.data.heading_images.map(heading_image => heading_image.heading_image.url),
            title: blogPost.data.title,
            description: blogPost.data.description,
            slices: blogPost.data.body
        };
    }
}