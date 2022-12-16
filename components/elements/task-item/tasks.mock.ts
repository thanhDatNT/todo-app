import {ITodo, Tag} from "../../../constants/interfaces/todo";

export const tasksMock:ITodo[]=[
    {
        id: 0,
        title:"Code a web",
        content:"This architecture might seem like a lot for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. ",
        createdAt: new Date(),
        updatedAt: new Date(),
        imageUrl:"https://pbs.twimg.com/media/FiGjuhkXgAceR06?format=jpg&name=small",
        isDone:false,
        tag: Tag.RED
    },
    {
        id: 1,
        title:"Code a Mobile app",
        content:"Sprint Retro",
        createdAt: new Date(),
        updatedAt: new Date(),
        imageUrl:"https://pbs.twimg.com/media/FiGjuhkXgAceR06?format=jpg&name=small",
        isDone:false,
        tag: Tag.RED
    }
]