export const successResponse = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        payload: {
            statusCode: statusCode,
            datas: data,
        },
        message: message,
        pagination: {
            prev: "",
            next: "",
            max: ""
        }
    });
}

export const failedResponse = (statusCode, error, message, res) => {
    res.status(statusCode).json({
        payload: {
            statusCode: statusCode,
            message: message,
            error: error
        },
    });
}

