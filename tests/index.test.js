
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
    test("nothing", async () => {
        expect(testFunc()).toBeUndefined();
    });

    test("boolean", async () => {
        expect(testFunc(true)).toBeUndefined();
    });

    test("a number", async () => {
        expect(testFunc(123)).toBeUndefined();
    });

    test("not a css colour string", async () => {
        expect(testFunc("foo")).toBeUndefined();
    });
});
