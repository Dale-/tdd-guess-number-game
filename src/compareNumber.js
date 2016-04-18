/**
 * Created by Dale on 4/17/16.
 */
export default class CompareNumber {
    static compareNum(answer, input) {
        let countA = 0;
        let countB = 0;
        if (answer === input) {
            return '4A0B';
        }

        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === input[i]) {
                countA++;
            } else if (this.contains(answer, input[i])) {
                countB++;
            }
        }
        return countA + 'A' + countB + 'B';
    }

    static contains(string, substring) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === substring) {
                return true;
            }
        }
        return false;
    }
}
