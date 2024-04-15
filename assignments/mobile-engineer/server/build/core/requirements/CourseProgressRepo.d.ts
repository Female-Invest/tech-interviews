import { CourseProgress } from "../entities/CourseProgress";
export interface CourseProgressRepo {
    listCourseProgressesByUserId(userId: string): Promise<CourseProgress[]>;
}
