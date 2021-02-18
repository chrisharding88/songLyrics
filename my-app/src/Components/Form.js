import React from 'react';


export const SongForm = (props) => {
    return (
        <div className="form-name">
            <div>
                <label>Type In The Song Title</label>
            </div>

            <input
                type="text"
                className="form-control"
                id="song"
                name="song"
                placeholder="Song Title"
                onChange={(e) => props.onChange(e)}
            />

            <button onClick={props.onClick} className="btn btn-primary">Search</button>
        </div>
    );
};

