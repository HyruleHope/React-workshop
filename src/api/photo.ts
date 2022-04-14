import { API_Picture } from './types'

const base_url = 'https://picsum.photos/v2/list'

async function getAllPicture(): Promise<Array<API_Picture>> {
    // Get all picture
    const response = await fetch(base_url);
    return await response.json();
}

async function getPicture(id: API_Picture['id']): Promise<API_Picture> {
    // Get a picture
    const response = await fetch(`${base_url}/${id}`);
    return await response.json();
}

export { getAllPicture, getPicture }
