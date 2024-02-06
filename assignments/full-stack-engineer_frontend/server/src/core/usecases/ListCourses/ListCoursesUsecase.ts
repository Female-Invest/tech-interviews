import { CourseProgressRepo } from "../../requirements/CourseProgressRepo";
import { CourseRepo } from "../../requirements/CourseRepo";

export class ListCoursesUsecase {
  constructor(
    private courseRepo: CourseRepo,
    private courseProgressRepo: CourseProgressRepo
  ) {}

  exec = async (userId: string) => {
    const courses = await this.courseRepo.listCourses();

    const coursesWithDuration = courses.map((course) => {
      const duration = course.lessons.reduce(
        (acc, lesson) => acc + lesson.duration,
        0
      );
      return { ...course, duration };
    });

    const courseProgresses =
      await this.courseProgressRepo.listCourseProgressesByUserId(userId);

    return coursesWithDuration.map((course) => {
      const courseProgress = courseProgresses.find(
        (courseProgress) => courseProgress.courseId === course.id
      );
      return {
        ...course,
        progress: courseProgress?.progress || 0,
      };
    });
  };
}
