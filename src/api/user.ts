import { User } from './types'
import UserProfile from '../components/UserProfile'

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

async function createUser(user: typeof UserProfile): Promise<User> {
    // create a new user
    const createUser = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    const response = await fetch(`${base_url}`, createUser);
    return await response.json();
}

async function updateUser(user: User): Promise<User> {
    // update a existing user
    const updateUser = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch PUT Request Example' })
};
    const response = await fetch(`${base_url}`, updateUser);
    return await response.json();
}

export { getAllUser, getUser, createUser, updateUser }
