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
    // [TODO] remove this return to use a fetch API
    return {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
      },
      phone: "1-770-736-8031 x56442",
      company: {
        name: "Romaguera-Crona"
      }
    }
}

export { getAllUser, getUser, createUser, updateUser }
