import styles from "./todo.container.module.css";
import {Avatar, Button, Form, List} from "antd";
import {CustomModal, FormCreateTask} from "components/elements";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "store/configStore";
import {Dispatch} from "@reduxjs/toolkit";
import {ITodo} from "constants/interfaces/todo";
import {todoState} from "store/todo/todo.selector";
import {addTodo} from "store/todo/todo.action";
import {convertToBase64} from "utils/format-file";

type ToDoContainerProps = {
    setActiveItemIndex: (index: number) => void
}

function TodoContainer({setActiveItemIndex}: ToDoContainerProps) {
    const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);
    const [form] = Form.useForm();
    const dispatch: Dispatch = useAppDispatch();
    const {todoList} = useAppSelector(todoState);

    const onAddNewTask = async () => {
        setShowNewTaskDialog(false);
        const {newTask, tag, upload} = form.getFieldsValue(["newTask", "tag", "upload"]);

        const addImagePromise = upload.map((file: any) => {
            return convertToBase64(file.originFileObj as File).then(result => result)
        })

        Promise.all(addImagePromise).then((result) => {
            const todoItem: ITodo = {
                title: newTask,
                content: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                isDone: false,
                id: todoList.length + 1,
                imageUrl: result,
                tag,
            }
            dispatch(addTodo(todoItem));
        })
    }

    return (
        <div className={styles.todoContainer}>
            <div className={styles.center}>
                <h2>Scheduled Tasks</h2>
            </div>

            <div className={styles.listContainer}>
                <div className={styles.block}>
                    <List
                        itemLayout="horizontal"
                        dataSource={todoList}
                        renderItem={(item) => (
                            <List.Item actions={[<a key="list-loadmore-edit">edit</a>,
                                <a key="list-loadmore-more">delete</a>]}
                                       onClick={() => setActiveItemIndex(item.id - 1)}>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        style={{backgroundColor: item.tag.toLowerCase()}}>{item.title.charAt(0).toUpperCase()}</Avatar>}
                                    title={<a>{item.title}</a>}
                                    description={item.content[0]}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>

            <div className={styles.center}>
                <Button type="primary" onClick={() => setShowNewTaskDialog(true)}>Create New Task</Button>
                <CustomModal title="Add a new task" onConfirmed={onAddNewTask}
                             onCloseDialog={() => setShowNewTaskDialog(false)} show={showNewTaskDialog}
                             child={<FormCreateTask form={form}/>}
                />
            </div>
        </div>
    );
}

export default TodoContainer;
