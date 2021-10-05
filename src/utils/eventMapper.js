const EVENTS_LIST = ['change', 'input', 'keyup', 'keypress', 'keydown', 'focus', 'focusin', 'focusout', 'blur'];

function mapEvents(config = {}) {
    const attributes = Object.entries(config);

    return attributes
        .filter(([name]) => EVENTS_LIST.includes(name))
        .map(([name, fn]) => ({
            name,
            fn,
        }));
}

export default mapEvents;
