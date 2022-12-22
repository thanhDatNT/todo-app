import styles from "./content.container.module.css"
import {Form, Image, Radio, RadioChangeEvent, Space, Spin} from "antd";
import {Dispatch} from "@reduxjs/toolkit";
import {useAppDispatch, useAppSelector} from "store/configStore";
import {todoState} from "store/todo/todo.selector";
import {useEffect, useState} from "react";
import {ITodo} from "constants/interfaces/todo";
import {InputTaskDetail} from "components/elements";
import {updateTodo} from "../../../store/todo/todo.action";

type ContentContainerProps = {
    activeItemIndex: number
}

function ContentContainer({activeItemIndex}: ContentContainerProps) {
    const [todoItem, setTodoItem] = useState<ITodo | null>(null)
    const [contentValue, setContentValue] = useState("")
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();
    const dispatch: Dispatch = useAppDispatch();
    const {loading, todoList} = useAppSelector(todoState);

    useEffect(() => {
        todoList.length > 0 && setTodoItem(todoList[activeItemIndex])
    }, [activeItemIndex, todoList])

    const onTaskStatusChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    };

    const onAddingContent = () => {
        contentValue && dispatch(updateTodo({...todoItem!, content: [...todoItem!.content, contentValue]}))
        setContentValue("");
    }

    return (
        <div className={styles.contentContainer}>
            <div className={styles.center}>
                <h2>{todoItem?.title}</h2>
            </div>
            <div className={styles.listContainer}>
                <div>
                    <Image.PreviewGroup>
                        {todoItem?.imageUrl.map((item: string, i: number) =>
                            (<Image key={i} width={150} src={item}/>))}
                    </Image.PreviewGroup>
                </div>

                {(todoItem?.content || contentValue) &&
                    <Radio.Group onChange={onTaskStatusChange} value={value}>
                        <Space direction="vertical">
                            {todoItem?.content.length! > 0 &&
                                todoItem?.content.map((item: string, i) =>
                                <Radio key={i} value={i}>
                                    <div className={styles.card}>{item}</div>
                                </Radio>)}
                            {contentValue && <Radio value={-1}>
                                <div className={styles.card}>{contentValue}</div>
                            </Radio>}
                        </Space>
                    </Radio.Group>
                }
                {loading && <div className={styles.center}><Spin size="large"/></div>}
            </div>
            <InputTaskDetail setContent={setContentValue} onAddingContent={onAddingContent}/>
        </div>
    );
}

export default ContentContainer;