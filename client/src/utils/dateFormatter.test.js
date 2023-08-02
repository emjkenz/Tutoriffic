import { formatDueDate } from "./dateFormatter";

describe("formatDueDate", () => {
    it("should return 1 day when the due date is tomorrow", () => {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 1);
        expect(formatDueDate(dueDate)).toBe("1 day");
    });

    it("should return 2 days when the due date is the day after tomorrow", () => {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 2);
        expect(formatDueDate(dueDate)).toBe("2 days");
    });

    it("should return 0 days when the due date is today", () => {
        const dueDate = new Date();
        expect(formatDueDate(dueDate)).toBe("today");
    });
});