import sanityClient from "@sanity/client";
import sanityImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'ksitws1i',
    dataset: 'production',
    apiVersion: '2021-05-16',
    token: null, // leave blank to be anonymous user
    useCdn: process.env.NODE_ENV == 'production' // `false` if you want to ensure fresh data
})

const imageUrlBuilder = sanityImageUrlBuilder(client)

function getImage(source) {
    return imageUrlBuilder.image(source)
}

export default {
    getImage(source) {
        return getImage(source);
    },

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
            src: getImage(data.myPicture).width(1000).height(1000).url(),
            links: data.links
        }
    },

    // EXPERIENCE
    async getExperience() {
        const { experience } = await client.fetch('*[_type == "experience"][0] {experience[]{title, startDate, endDate, organization, accomplishments}}');
        return experience;
    },

    // SKILLS
    async getSkills() {
        const { skills } = await client.fetch('*[_type == "skills"][0] {skills[]{color, icon, label, level}}');
        return skills;
    },

    // PROJECTS
    async getProjects() {
        const projects = await client.fetch('*[_type == "project"] {mainImage, title, description, body, _createdAt, "categories": categories[]->{title, icon, color}} | order(_createdAt desc)');
        return projects.map(project => {
            return {
                src: [getImage(project.mainImage).width(600).height(300).url()],
                ...project
            }
        })
    },

    // BLOG POSTS
    async getBlogPosts() {
        const posts = await client.fetch('*[_type == "post"] {mainImage, title, description, slug, _createdAt} | order(_createdAt desc)');
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
