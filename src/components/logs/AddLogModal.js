import React, { useState } from 'react';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');


    return (
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">

                </div>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
};

export default AddLogModal;
