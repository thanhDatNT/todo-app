import React, {useState} from "react";
import {Modal} from 'antd';

type CustomModalProps = {
    title?: string,
    child: JSX.Element,
    onConfirmed: () => void,
    onCloseDialog: () => void,
    show: boolean,
};

export function CustomModal({title, child, onConfirmed, onCloseDialog, show}: CustomModalProps) {
    const [disabled, setDisabled] = useState(false);

    const handleOk = () => {
        onConfirmed();
        onCloseDialog();
    };

    const handleCancel = () => {
        onCloseDialog();
    };

    return (
        <Modal
            title={
                <div
                    style={{
                        width: '100%',
                        cursor: 'move',
                    }}
                    onMouseOver={() => { disabled && setDisabled(false)}}
                    onMouseOut={() => {setDisabled(true);}}
                >
                    {title}
                </div>
            }
            open={show}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            {child}
        </Modal>
    )
}