import { Main } from "../src/app.js";

const main = new Main();

describe("Berlin clock", () => {

    it("should light up yellow lamps every minute in the last line", function() {
        expect(main.lampSingleMinute(1)).toBe('Y');
        expect(main.lampSingleMinute(3)).toBe('YYY');
        expect(main.lampSingleMinute(5)).toBe('');
        expect(main.lampSingleMinute(17)).toBe('YY');
    });

    it("should turn on a red light every 3 lights, the others being yellow in the 5-minute block line", function(){
        expect(main.lampBlockFiveMinute(5)).toBe('Y');
        expect(main.lampBlockFiveMinute(10)).toBe('YY');
        expect(main.lampBlockFiveMinute(11)).toBe('YY');
        expect(main.lampBlockFiveMinute(50)).toBe('YYRYYRYYRY');
    });
    
    it("should turn on the red lights every hour in the simple hour line", function(){
        expect(main.lampSingleHour(1)).toBe('R');
        expect(main.lampSingleHour(3)).toBe('RRR');
        expect(main.lampSingleHour(17)).toBe('RR');
    });

    it("should light red lamps every 5 hours in the first line", function(){
        expect(main.lampBlockFiveHour(5)).toBe('R');
        expect(main.lampBlockFiveHour(10)).toBe('RR');
        expect(main.lampBlockFiveHour(11)).toBe('RR');
        expect(main.lampBlockFiveHour(20)).toBe('RRRR');
    });

    it("should light up red during even seconds and go out during odd seconds", function(){
        expect(main.lampSecond(2)).toBe('R');
        expect(main.lampSecond(1)).toBe('');
        expect(main.lampSecond(3)).toBe('');
        expect(main.lampSecond(16)).toBe('R');
        expect(main.lampSecond(57)).toBe('');
    });

    it("should do all the above - full clock", function() {

        // lampSecond
        expect(main.lampFullTime(0,0,0))[0].toBe('R');
        expect(main.lampFullTime(0,0,2))[0].toBe('R');
        expect(main.lampFullTime(0,0,4))[0].toBe('R');
        expect(main.lampFullTime(0,0,18))[0].toBe('R');
        expect(main.lampFullTime(0,0,56))[0].toBe('R');

        expect(main.lampFullTime(0,0,1))[0].toBe('');
        expect(main.lampFullTime(0,0,3))[0].toBe('');
        expect(main.lampFullTime(0,0,15))[0].toBe('');
        expect(main.lampFullTime(0,0,39))[0].toBe('');
        expect(main.lampFullTime(0,0,59))[0].toBe('');
        

        // lampBlockFiveHour
        expect(main.lampFullTime(0,0,0))[1].toBe('');
        expect(main.lampFullTime(1,0,0))[1].toBe('');       
        expect(main.lampFullTime(5,0,0))[1].toBe('R');
        expect(main.lampFullTime(8,0,0))[1].toBe('R');        
        expect(main.lampFullTime(10,0,0))[1].toBe('RR');
        expect(main.lampFullTime(11,0,0))[1].toBe('RR');
        expect(main.lampFullTime(21,0,0))[1].toBe('RRRR');
        expect(main.lampFullTime(23,0,0))[1].toBe('RRRR');

        // lampSingleHour
        expect(main.lampFullTime(0,0,0))[2].toBe('');
        expect(main.lampFullTime(1,0,0))[2].toBe('R');       
        expect(main.lampFullTime(5,0,0))[2].toBe('R');
        expect(main.lampFullTime(8,0,0))[2].toBe('RRR');        
        expect(main.lampFullTime(10,0,0))[2].toBe('');
        expect(main.lampFullTime(11,0,0))[2].toBe('R');
        expect(main.lampFullTime(21,0,0))[2].toBe('R');
        expect(main.lampFullTime(23,0,0))[2].toBe('RRR');

        // lampBlockFiveMinute
        expect(main.lampFullTime(0,5,0))[3].toBe('Y');
        expect(main.lampFullTime(0,10,0))[3].toBe('YY');
        expect(main.lampFullTime(0,11,0))[3].toBe('YY');
        expect(main.lampFullTime(0,50,0))[3].toBe('YYRYYRYYRY');

        // lampSingleMinute
        expect(main.lampFullTime(0,1,0))[4].toBe('Y');
        expect(main.lampFullTime(0,3,0))[4].toBe('YYY');
        expect(main.lampFullTime(0,5,0))[4].toBe('');
        expect(main.lampFullTime(0,17,0))[4].toBe('YY');

    })

});