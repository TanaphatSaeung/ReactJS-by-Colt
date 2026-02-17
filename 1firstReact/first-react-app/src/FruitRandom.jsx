export default function FruitRandom({r}) {
    switch (r) {
        case 1:
            return '🍒'
        case 2:
            return '🍌'
        default:
            return '🥑'
    }
}