export interface ITodo {
    id: number;
    title: string;
    content: string[];
    createdAt: string;
    updatedAt:string;
    isDone: boolean;
    tag: "RED" | "CHOCOLATE"|"GREEN"|"DARKCYAN"|"PURPLE";
    imageUrl:string[];
}
