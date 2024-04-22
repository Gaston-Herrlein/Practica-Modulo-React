const Button = ({ message, type, disabled }) => {

    return (
        <button type={type} disabled={disabled}>
            {message}
        </button>
    )
}

export {Button};