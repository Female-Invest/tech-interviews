import { CourseProgressRepo } from "../core/requirements/CourseProgressRepo";
import { CourseProgress } from "../core/entities/CourseProgress";

export class MockCourseProgressRepo implements CourseProgressRepo {
  courseProgresses: CourseProgress[] = [];
  constructor(initialCourseProgresses: CourseProgress[]) {
    this.courseProgresses = initialCourseProgresses;
  }

  async listCourseProgressesByUserId(
    userId: string
  ): Promise<CourseProgress[]> {
    const courseProgresses = this.courseProgresses.filter(
      (courseProgress) => courseProgress.userId === userId
    );
    return courseProgresses;
  }
}
