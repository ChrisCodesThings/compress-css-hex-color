
const { default: testFunc } = await import("../");

describe("compress some colours", () => {
    test("should not compress", async () => {
        expect(testFunc("#123456")).toEqual("#123456");
        expect(testFunc("#c0ffeeee")).toEqual("#c0ffeeee");
        expect(testFunc("#f00d")).toEqual("#f00d");
    });

    test("should remove alpha", async () => {
        expect(testFunc("#f00f")).toEqual("#f00");
        expect(testFunc("#6495edff")).toEqual("#6495ed");
    });

    test("should compress", async () => {
        expect(testFunc("#aabbccdd")).toEqual("#abcd");
    });

    test("should compress with alpha removed", async () => {
        expect(testFunc("#aabbccff")).toEqual("#abc");
    });
});
