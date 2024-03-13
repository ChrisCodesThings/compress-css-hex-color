
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

describe("compress some colours", () => {
    test("should not compress", async () => {
        expect(testFunc("#123456")).toEqual("#123456");
    });

    test("should not compress", async () => {
        expect(testFunc("#c0ffeeee")).toEqual("#c0ffeeee");
    });

    test("should not compress", async () => {
        expect(testFunc("#f00d")).toEqual("#f00d");
    });

    test("should remove alpha", async () => {
        expect(testFunc("#f00f")).toEqual("#f00");
    });

    test("should compress", async () => {
        expect(testFunc("#aabbccdd")).toEqual("#abcd");
    });

    test("should compress with alpha removed", async () => {
        expect(testFunc("#aabbccff")).toEqual("#abc");
    });

    test("should remove alpha", async () => {
        expect(testFunc("#6495edff")).toEqual("#6495ed");
    });
});
