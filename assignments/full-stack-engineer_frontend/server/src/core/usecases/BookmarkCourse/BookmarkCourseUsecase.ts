import { BookmarkRepo } from "../../requirements/BookmarkRepo";
import { CourseRepo } from "../../requirements/CourseRepo";

export class BookmarkCourseUsecase {
  constructor(
    private courseRepo: CourseRepo,
    private bookmarkRepo: BookmarkRepo
  ) {}

  exec = async (input: { userId: string; courseId: string }) => {
    const course = await this.courseRepo.findCourseById(input.courseId);
    if (!course) throw new Error("Course not found");

    await this.bookmarkRepo.bookmarkCourse(input.courseId, input.userId);
  };
}
