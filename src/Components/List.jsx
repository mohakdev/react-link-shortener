import React from 'react'

const List = ({ urls }) => {
    if (urls.length === 0) return <p>No links shortened yet.</p>

    return (
        <div>
            <h2>Saved Links</h2>
            <ul>
                {urls.map((item, index) => (
                    <li key={index}>
                        <p><strong>Original:</strong> {item.original}</p>
                        <p>
                            <strong>Shortened:</strong>{" "}
                            <a href={item.short} target="_blank" rel="noreferrer">
                                {item.short}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List