import { Post, PostContent } from './types'

const base_url = 'http://localhost:3004/posts'

async function getPost(postID: Post['id']): Promise<Post> {
    // get a unique post
    const response = await fetch(`${base_url}/${postID}`);
    return await response.json();
}

async function getPosts(): Promise<Array<Post>> {
    // get all posts
  const response = await fetch(base_url);
  return await response.json();
}

async function createPost(post: PostContent): Promise<Post> {
    // create a new post
    const createPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    };
    const response = await fetch(`${base_url}`, createPost);
    return await response.json();
}

async function updatePost(post: Post): Promise<Post> {
    // update a existing post
    const updatePost = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch PUT Request Example' })
};
    const response = await fetch(`${base_url}`, updatePost);
    return await response.json();
}

export { getPost, getPosts, updatePost, createPost }
