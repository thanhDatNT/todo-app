export interface ITodo {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt:Date;
    isDone: boolean;
    tag:Tag;
    imageUrl:string;
}

export enum Tag {
    RED, YELLOW, GREEN, BLUE, PURPLE
}