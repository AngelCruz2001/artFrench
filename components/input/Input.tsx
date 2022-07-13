import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
    id: string,
    name: string,
    type: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string,
    placeholder?: string,
    error?: string,
}

export const Input = ({ id, name, type, handleChange, value, placeholder, error }: InputProps) => {
    return (
        <div style={{ position: 'relative' }}>
            <input
                className={styles.input}
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={handleChange}
                value={value}
            />
            <span>{error && error}</span>
        </div>
    )
}
