import sanityClient from "@sanity/client";
import sanityImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'ksitws1i',
    dataset: 'production',
    token: null, // leave blank to be anonymous user
    useCdn: process.env.NODE_ENV == 'production' // `false` if you want to ensure fresh data
})

const imageUrlBuilder = sanityImageUrlBuilder(client)

function getImage(source) {
    return imageUrlBuilder.image(source)
}

export default {
    async getMyPictureSrc() {
        const myPictures = await client.fetch(`*[_type == "aboutMe"].myPicture`);
        const myPicture = myPictures[0];
        return getImage(myPicture).width(80).height(80).url()
    },

    // ABOUT ME
    async getAboutMe() {
        const data = await client.getDocument("aboutMe");
        return {
            aboutMe: data.aboutMe,
            src: getImage(data.myPicture).width(200).height(200).url(),
            links: data.links
        }
    },

    // EXPERIENCE
    async getExperience() {
        const { experience } = await client.getDocument("experience");
        return experience;
    },

    // SKILLS
    async getSkills() {
        const { skills } = await client.getDocument("skills");
        return skills;
    },

    // PROJECTS
    async getProjects() {
        const projects = await client.fetch('*[_type == "project"] {mainImage, title, description, url} | order(_createdAt desc)');
        return projects.map(project => {
            return {
                src: [getImage(project.mainImage).width(320).height(180).url()],
                ...project
            }
        })
    },

    // BLOG POSTS
    async getBlogPosts() {
        const posts = await client.fetch('*[_type == "post"] {mainImage, title, description, slug} | order(_createdAt desc)');
        return posts.map(post => {
            return {
                src: [getImage(post.mainImage).width(320).height(180).url()],
                ...post
            }
        })
    },

    // BLOG POST
    async getBlogPost(slug) {
        const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"] {mainImage, title, body, publishedAt, "categories": categories[]->title}`);
        const post = posts[0];
        return {
            src: [getImage(post.mainImage).width(800).height(450).url()],
            ...post
        };
    }
}