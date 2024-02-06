import { CourseBookmark } from "../entities/CourseBookmark";
export interface BookmarkRepo {
    listBookmarkByUserId(userId: string): Promise<CourseBookmark[]>;
    bookmarkCourse(courseId: string, userId: string): Promise<void>;
}
