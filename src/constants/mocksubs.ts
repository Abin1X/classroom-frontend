import type { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Learn programming fundamentals, algorithms, and problem-solving techniques.",
        created_at: "2026-01-15T00:00:00.000Z",
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Math",
        description: "Explore integration techniques, infinite series, and their applications.",
        created_at: "2026-01-15T00:00:00.000Z",
    },
    {
        id: 3,
        code: "ENG101",
        name: "Academic Writing",
        department: "English",
        description: "Develop research, critical reading, and essay-writing skills for university study.",
        created_at: "2026-01-15T00:00:00.000Z",
    },
];
