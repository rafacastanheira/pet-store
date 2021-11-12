declare namespace Express{
    export interface Request{
        merchant: {
            id: string
        },
        user: {
            id: string
        }
    }
}
