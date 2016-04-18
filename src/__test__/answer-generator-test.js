/**
 * Created by Dale on 4/18/16.
 */
import AnswerGenerator from '../answer-generator';

describe('Class AnswerGenerator', () => {


    let repeatCount;
    let answerGenerator;

    beforeEach(function () {

        answerGenerator = new AnswerGenerator();

        repeatCount = function (string, substring) {
            let count = 0;
            for (let i = 0; i < string.length; i++) {
                if (substring === string[i]) {
                    count++;
                }
            }
            return count;
        }
    });

    describe('.getAnswer: ', () => {

        it('use the method of getAnswer should return one string that length is four', () => {
            let result = answerGenerator.getAnswer();
            expect(result.length).toEqual(4);
        });

        it('use the method of getAnswer should return one string that all element is number', () => {
            let result = answerGenerator.getAnswer();
            var isAllTypeNumber = result.every(function (elem) {
                return typeof(elem) === 'number';
            });
            expect(isAllTypeNumber).toBe(true);
        });

        it('use the method of getAnswer should return one string that element is not repeat', () => {
            let result = answerGenerator.getAnswer();
            let isAllTypeNumber = result.every(function (elem) {
                return repeatCount(result, elem) === 1;
            });
            expect(isAllTypeNumber).toBe(true);
        });

    });
});
