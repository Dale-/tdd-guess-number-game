/**
 * Created by Dale on 4/17/16.
 */
export default class CompareNumber {
    static compareNum(answer, input) {
        let countA = 0;
        if (answer === input) {
            return '4A0B';
        }

        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === input[i]) {
                countA++;
            }
        }
        return countA + 'A0B';
    }
}
