const InputText = ({ placeholder, props }) => {
    return (
        <div
            className="text-center"
            {...props}
        >
            <input
                type="text"
                className="m-1 p-1"
                placeholder={placeholder}
            />
        </div>
    )
}

const InputPassword = ({ placeholder, props }) => {
    return (
        <div
            className="text-center"
            {...props}
        >
            <input
                type="password"
                className="m-1 p-1"
                placeholder={placeholder}
            />
        </div>
    )
}

const InputSelect = ({ placeholder, props, lookup }) => {
    return (
        <div
            {...props}
        >
            <select
                className="m-1 p-1"
                // placeholder={placeholder}
            >
                {lookup?.map(item => {
                    return (
                        <option
                            key={`${placeholder}-${option}-${item.id}`}
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

const InputTextarea = ({ placeholder, props }) => {
    return (
        <div>
            <textarea
                className="m-1 p-1"
                placeholder={placeholder}
            />
        </div>
    )
}

const InputAutocomplete = ({ placeholder, props }) => {
    return (
        <div>
            <input
                className="m-1 p-1"
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

const InputChip = ({ placeholder, props }) => {
    return (
        <div>
            <input
                className="m-1 p-1"
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export {
    InputText,
    InputPassword,
    InputSelect,
    InputTextarea,
    InputAutocomplete,
    InputChip
};