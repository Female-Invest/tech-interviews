import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CourseProgressRepo } from "../core/requirements/CourseProgressRepo";
import { CourseRepo } from "../core/requirements/CourseRepo";
export declare class MockRepos {
    bookmarks: BookmarkRepo;
    courses: CourseRepo;
    courseProgresses: CourseProgressRepo;
    constructor();
}
