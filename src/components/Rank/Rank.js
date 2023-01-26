import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='text #460c43 f3'>
                {`${ name }, your current entry count is... `}
            </div>
            <div className='index #460c43 f1'>
                {`${ entries }`}
            </div>
        </div>
    );
};

export default Rank;