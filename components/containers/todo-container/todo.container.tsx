import styles from "./todo.container.module.css";
import {Button, List, Avatar} from "antd";
import {tasksMock} from "../../elements/task-item/tasks.mock";

function TodoContainer() {
    return (
        <div className={styles.todoContainer}>
            <div className={styles.center}>
                <h2>Scheduled Tasks</h2>
            </div>
            <div className={styles.listContainer}>
                <div className={styles.block}>
                    <List
                        itemLayout="horizontal"
                        dataSource={tasksMock}
                        renderItem={(item) => (
                            <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">delete</a>]}>
                                <List.Item.Meta
                                    avatar={<Avatar>{item.title.charAt(0)}</Avatar>}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item.content}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className={styles.center}>
                <Button type="primary">Create New Task</Button>
            </div>
        </div>
    );
}

export default TodoContainer;