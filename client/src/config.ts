export const rootName = 'dynamic-svg-root';

const dev = process.env.NODE_ENV === 'development';
export const FOR_THE_BIRDS_ENDPOINT = dev ? 'http://localhost:5000/' : 'https://for-the-birds-app.herokuapp.com/';
