import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Search Component</div>
                    <div className="card-body">
                        <input placeholder="Search"/>
                    </div>

                </div>

            </div>
        );
    }
}

export default SearchBar;