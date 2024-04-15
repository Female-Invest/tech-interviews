import { CourseProgressRepo } from "../../requirements/CourseProgressRepo";
import { CourseRepo } from "../../requirements/CourseRepo";
export declare class ListCoursesUsecase {
    private courseRepo;
    private courseProgressRepo;
    constructor(courseRepo: CourseRepo, courseProgressRepo: CourseProgressRepo);
    exec: (userId: string) => Promise<{
        progress: number;
        duration: number;
        id: string;
        name: string;
        description: string;
        lessons: import("../../entities/Lesson").Lesson[];
        coverImage: string;
    }[]>;
}
