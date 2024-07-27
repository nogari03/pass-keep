const SubmitButton = ({ onClick, label }) => {
    return (
        <button
            type="button"
            className="btn btn-primary border border-secondary w-52"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

const CancelButton = ({ onClick, label }) => {
    return (
        <button
            type="button"
            className="btn btn-secondary"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export {
    SubmitButton,
    CancelButton
};
