
/**
 * Created by Dale on 4/18/16.
 */
export default class AnswerGenerator {
     getAnswer() {
        let answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        answer.sort(function arrSort(a,b){
            return Math.random() > 0.5 ? a-b : b-a;
        });

        answer.length = 4;
        return answer;
    }
}
