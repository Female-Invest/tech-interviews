import { CourseProgressRepo } from "../core/requirements/CourseProgressRepo";
import { CourseProgress } from "../core/entities/CourseProgress";
export declare class MockCourseProgressRepo implements CourseProgressRepo {
    courseProgresses: CourseProgress[];
    constructor(initialCourseProgresses: CourseProgress[]);
    listCourseProgressesByUserId(userId: string): Promise<CourseProgress[]>;
}
