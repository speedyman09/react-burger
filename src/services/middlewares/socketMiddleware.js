export const socketMiddleware = (wsActions) => {
    return store => {
        let socket = null;
        let url = '';
        let isClosedByUser = false;

        return next => action => {
            const { type, payload } = action;
            const { dispatch } = store;
            const { wsConnection, wsOffline, wsOpen, wsError, wsMessage, wsClose } = wsActions;

            if (type === wsConnection) {
                url = payload;
                socket = new WebSocket(`${url}`);
                isClosedByUser = false;
            }

            if (type === wsOffline) {
                if (socket) {
                    socket.close();
                    socket = null;
                    isClosedByUser = true;
                }
            }
            if (type === wsClose) {
                if (socket) {
                    socket = null
                    isClosedByUser = false;
                }
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({ type: wsOpen, payload: true });
                };
                socket.onerror = event => {
                    dispatch({ type: wsError, payload: event.message });
                };
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: wsMessage, payload: parsedData });
                };
                socket.onclose = event => {
                    dispatch({ type: wsClose, payload: event.code.toString() });
                    if (!isClosedByUser) {
                        socket = new WebSocket(`${url}`);
                    }
                };
            }

            next(action);
        };
    };
};