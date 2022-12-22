import React, {useState} from 'react';
import {Button, Tooltip, Input} from "antd";
import {PlusOutlined, CheckOutlined} from "@ant-design/icons";
import styles from './input-task-detail.module.css';

type InputTaskDetailProps = {
    setContent: (content: string) => void;
    onAddingContent:()=> void;
}

function InputTaskDetail({setContent, onAddingContent}: InputTaskDetailProps) {
    const [visibleInput, setVisibleInput] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <div className={styles.container}>
            {visibleInput && <div className={styles.inputContainer}>
                <Input.TextArea
                    style={{height: 80, resize: 'none', flexGrow: 1}}
                    onChange={onChange}
                    placeholder="Enter content for this task"
                />
            </div>}
            <Tooltip title="Add">
                <Button type="primary" shape="circle" size="large"
                        icon={visibleInput ? <CheckOutlined/> : <PlusOutlined/>}
                        onClick={() => {
                            setVisibleInput(value => !value);
                            onAddingContent();
                        }}/>
            </Tooltip>
        </div>
    );
}

export default InputTaskDetail;