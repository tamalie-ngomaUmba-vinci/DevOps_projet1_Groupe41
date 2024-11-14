import { Main } from "../src/app.js";

const main = new Main();

describe("Berlin clock", () => {

    it("la ligne des simples minutes", function() {
        expect(main.lampeMinuteSimple(1)).toBe('J');
        expect(main.lampeMinuteSimple(3)).toBe('JJJ');
        expect(main.lampeMinuteSimple(17)).toBe('JJ');
    });

    

});