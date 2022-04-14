import React, { useReducer, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { User } from '../api/types'
import { getUser } from '../api/user'
import Field from '../private/Field'
import axios from 'axios'

const base_url = 'http://localhost:3004/users'

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




    async function handleAddOrCreateUser(
      event: React.FormEvent<HTMLFormElement>
    ) {
      return axios
      .post(base_url, formData)

      // back to Home
      navigate('/users')

      // remove default reloading page
      event.preventDefault()
    }

    async function handleDeleteUser() {
      axios.delete(`${base_url}/${id}`)
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
            <Field label="Name">
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
            <Field label="Email">
                <textarea
                    onBlur={handleChange}
                    name="email"
                    className="textarea"
                    placeholder="your email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </Field>
            <Field label="Phone number">
                <textarea
                    onBlur={handleChange}
                    name="phone"
                    className="textarea"
                    placeholder="your phone number"
                    onChange={handleChange}
                    value={formData.phone}
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
