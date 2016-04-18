/**
 * Created by Dale on 4/17/16.
 */
export default class CompareNumber {
    static compareNum(answer, input) {

        let score = {A: 0, B: 0};

        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === input[i]) {
                score.A++;
            } else if (this.contains(answer, input[i])) {
                score.B++;
            }
        }
        return score.A + 'A' + score.B + 'B';
    }

    static contains(string, substring) {
        return string.indexOf(substring) != -1;
    }
}
