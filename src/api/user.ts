import { User } from './types'

const base_url = 'http://localhost:3004/users'

async function getAllUser(): Promise<Array<User>> {
    // Get all users
    const response = await fetch(base_url);
    return await response.json()
}

async function getUser(id: User['id']): Promise<User> {
    // Get a user
    const response = await fetch(`${base_url}/${id}`);
    return await response.json();
}

export { getAllUser, getUser }
