import sanityClient from "@sanity/client";
import sanityImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'ksitws1i',
    dataset: 'production',
    token: null, // leave blank to be anonymous user
    useCdn: true // `false` if you want to ensure fresh data
})

const imageUrlBuilder = sanityImageUrlBuilder(client)

function getImage(source) {
    return imageUrlBuilder.image(source)
}

export default {
    // ABOUT ME
    async getAboutMe() {
        const data = await client.getDocument("aboutMe");
        return {
            aboutMe: data.aboutMe,
            src: getImage(data.myPicture).width(175).height(175).url(),
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
        const projects = await client.fetch('*[_type == "project"]');
        return projects.map(project => {
            return {
                src: [getImage(project.mainImage).width(300).height(169).url()],
                ...project
            }
        })
    },

    // BLOG POSTS
    async getBlogPosts() {
        const posts = await client.fetch('*[_type == "post"]');
        console.log(posts)
        return posts.map(post => {
            return {
                src: [getImage(post.mainImage).width(300).height(169).url()],
                ...post
            }
        })
    },

    // BLOG POST
    async getBlogPost(slug) {
        const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
        const post = posts[0];

        return {
            src: [getImage(post.mainImage).width(800).height(450).url()],
            ...post
        };
    }
}