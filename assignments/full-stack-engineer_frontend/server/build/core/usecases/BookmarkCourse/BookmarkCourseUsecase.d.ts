import { BookmarkRepo } from "../../requirements/BookmarkRepo";
import { CourseRepo } from "../../requirements/CourseRepo";
export declare class BookmarkCourseUsecase {
    private courseRepo;
    private bookmarkRepo;
    constructor(courseRepo: CourseRepo, bookmarkRepo: BookmarkRepo);
    exec: (input: {
        userId: string;
        courseId: string;
    }) => Promise<void>;
}
