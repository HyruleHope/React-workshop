import React, { useReducer, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { User } from '../api/types'
import Field from '../private/Field'
import axios from 'axios'

const base_url = 'http://localhost:3004/posts'
const post_url = 'http://localhost:3000/post'

type FormEvent =
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>

type FormData = { name: string; value: string | number | undefined }

const formReducer = (state: User, event: FormData) => {
    return {
        ...state,
        [event.name]: event.value,
    }
}

const EditUser = () => {
    const [users, setUsers] = useState<Array<User>>([])
    const [showPictureModal, setShowPictureModal] = useState<boolean>(false)
    const [formData, setFormData] = useReducer(
        formReducer,
        {} as User
    )
    let id  = useParams() // post id from url

    console.log("id", id);
    const navigate = useNavigate() // create a navigate function instance



    async function handleAddOrCreateUser(event: React.FormEvent<HTMLFormElement>) {
      axios.post(base_url, formData)

      // back to Home
      navigate('/users')
    }

    async function handleDeleteUser() {

      // back to Home
      navigate('/')
    }

    function handleChange(event: FormEvent) {
        const value =
            event.target.name === 'userId'
                ? Number(event.target.value)
                : event.target.value
        setFormData({
            name: event.target.name,
            value,
        })
    }



    return (
        <>
        <form className="post-form" onSubmit={handleAddOrCreateUser}>
            <Field label="name">
                <input
                    onBlur={handleChange}
                    name="name"
                    className="input"
                    type="text"
                    placeholder="Your name"
                    onChange={handleChange}
                    value={formData.name}
                />
            </Field>
            <Field label="Content">
                <textarea
                    onBlur={handleChange}
                    name="username"
                    className="textarea"
                    placeholder="your username"
                    onChange={handleChange}
                    value={formData.username}
                />
            </Field>
            <Field label="Content">
                <textarea
                    onBlur={handleChange}
                    name="email"
                    className="textarea"
                    placeholder="your email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </Field>
            {!!id && (
                <Field label="Extra actions">
                    <button
                        type="button"
                        className="button is-warning"
                        onClick={handleDeleteUser}
                    >
                        Delete User
                    </button>
                </Field>
            )}

            <div className="field is-grouped is-grouped-centered">
                <p className="control">
                    <button type="submit" className="button is-primary">
                        Submit
                    </button>
                </p>
                <p className="control">
                    <Link to="/AllUsers" className="button is-light">
                        Cancel
                    </Link>
                </p>
            </div>
        </form>
        </>
    )
}

export default EditUser
