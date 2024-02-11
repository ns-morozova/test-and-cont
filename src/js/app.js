// TODO: write your code here

export default function calculateLife(data) {
    if (data.health > 50) {
        return 'healthy';
    } else if ((data.health >= 15) && (data.health <= 50)) {
        return 'wounded';
    } else {
        return 'critical';
    }
}
