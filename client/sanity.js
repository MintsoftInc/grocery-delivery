import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: '',
    dateset: 'production',
    useCdn: true,
    apiVersion: '2023-10-24',
})

const builder = imageBuilder(client);
export const urlFor =  source=> builder.image(source);
export default client;