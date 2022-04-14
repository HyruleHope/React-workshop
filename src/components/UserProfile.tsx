import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { User } from '../api/types'
import Field from '../private/Field'

const UserProfile = (props: User) => {
    return (
      <Link to={`/new/${props.id}`} key={`key-${props.id}`}>
        <div className="user-profile">
          <div className="user-profile-wrapper">
            <Field label="Name :">
              <span>{props.name}</span>
            </Field>
            <Field label="Email :">
              <span>{props.email}</span>
            </Field>
            <Field label="Company :">
              <span>{props.company.name}</span>
            </Field>
            <Field label="Phone :">
              <span>{props.phone}</span>
            </Field>
            <Field label="Address :">
              <span>{props.address.street} - </span>
              <span>{props.address.city} - </span>
              <span>{props.address.zipcode}</span>
            </Field>
          </div>
        </div>
      </Link>
    )
}

export default UserProfile
