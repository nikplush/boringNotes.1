import Toast from "react-native-toast-message";

export enum EventsName {
    ADD,
    REMOVE,
    ERROR
}

export const showMyTopToasters = (eventName: Number) => {
    switch (eventName) {
        case EventsName.ADD:
            Toast.show({
                type: 'success',
                text1: 'Film added',
                text2: 'Film added to myTop list ✅'
            });
            return
        case EventsName.REMOVE:
            Toast.show({
                type: 'success',
                text1: 'Film removed',
                text2: 'Film removed from myTop list ❌'
            });
            return;
        default:
            return;
    }
}

export const showViewedToasters = (eventName: Number) => {
    switch (eventName) {
        case EventsName.ADD:
            Toast.show({
                type: 'success',
                text1: 'Film added',
                text2: 'Film added to viewed list ✅'
            });
            return
        case EventsName.REMOVE:
            Toast.show({
                type: 'success',
                text1: 'Film removed',
                text2: 'Film removed from viewed list ❌'
            })
            return;
        default:
            return;
    }
}

export const fetchingToasters = () => {
    Toast.show({
        type: 'error',
        text1: 'Problems with getting data',
    })
}