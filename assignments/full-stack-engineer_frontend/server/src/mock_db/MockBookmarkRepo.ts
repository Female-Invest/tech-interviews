import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CourseBookmark } from "../core/entities/CourseBookmark";

export class MockBookmarkRepo implements BookmarkRepo {
  bookmarks: CourseBookmark[] = [];
  constructor() {}

  async listBookmarkByUserId(userId: string): Promise<CourseBookmark[]> {
    const bookmarks = this.bookmarks.filter(
      (bookmark) => bookmark.userId === userId
    );
    return bookmarks;
  }

  async bookmarkCourse(courseId: string, userId: string): Promise<void> {
    const newBookmark: CourseBookmark = {
      courseId,
      userId,
    };

    const bookmarks: CourseBookmark[] = [...this.bookmarks];
    const isBookmarked = bookmarks.find(
      (bookmark) => bookmark.courseId === courseId
    );
    if (isBookmarked) return;

    this.bookmarks.push(newBookmark);
  }
}
