interface board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = "todo" | "Inprogess" | "done";

interface Column {
    id: TypedColumn,
    todos: Todo[],
}

interface Todo {
    $id: string,
    $createdAt: string,
    // $updatedAt: string,
    title: string,
    status: TypedColumn,
    image?: Image,
}

interface Image {
    bucketId: string,
    fieldId: string
}