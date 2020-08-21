import React from 'react'

export const TerminalList = ({ terminals, onRemove }) => {
    return (
        <ul className="list-group mt-3">
            {terminals.map(terminal => (
                <li class="list-group-item" key={terminal.id}>
                <div className="row">
                    <div className="col-4 d-flex align-items-center"><h5 className="mb-0">{terminal.title}</h5></div>
                    <div className="col-6 d-flex align-items-center"><h6>{terminal.desc}</h6></div>
                    <div className="col-2"><button className="btn btn-danger float-right" onClick={() => onRemove(terminal.id)}>Удалить</button></div>
                </div>
            </li>
            ))}
        </ul>
    )
}