import React from 'react'
const List = ({ urls }) => {
    if (urls.length === 0) return <p>No links shortened yet.</p>

    return (
        <div>
            <h2 className='url_list'>Saved Links</h2>
            <ul>
                {urls.map((item, index) => (
                    <li className='url_li' key={index}>
                        <p>
                            <div>
                                <strong className='url_txt'>Original: </strong>
                                <a href={item.original} target="_blank" rel="noreferrer">
                                    {item.original}
                                </a>
                            </div>
                            <div>
                                <strong className='url_txt'>Shortened: </strong>
                                <a href={item.short} target="_blank" rel="noreferrer">
                                    {item.short}
                                </a>
                            </div>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List