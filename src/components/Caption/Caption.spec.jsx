import { parseFieldName } from './Caption'

describe("Caption", () => {
    it("should parse a field name", () => {
        const fieldName = "<chairType:stool|park bench|office chair>"
        const result = parseFieldName(fieldName);
        expect(result).toBe("chairType");
    });
})