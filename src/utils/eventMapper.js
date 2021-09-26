const EVENTS_LIST = ['change', 'keyup', 'keypress', 'keydown', 'focus', 'focusin', 'focusout', 'blur'];

function mapEvents(config) {
    const attributes = Object.entries(config);

    return attributes
        .filter(([name]) => {
            if (EVENTS_LIST.includes(name)) return name;
            return false;
        }).map(([name, fn]) => ({
            name,
            fn,
        }));
}

export default mapEvents;
