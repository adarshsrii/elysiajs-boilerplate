class Response {
    constructor(data: any) {
        return {
            code: 200,
            status: true,
            message: "Request Successfull, Data is attached within Payloads.",
            data: data
        };
    }
}

export { Response };
