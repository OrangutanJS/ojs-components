export default function generateRandomHash() {
    return `${new Date().getTime()}${Math.floor(Math.random() * 100)}`;
}
