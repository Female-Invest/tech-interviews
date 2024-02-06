"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkCourseUsecase = void 0;
class BookmarkCourseUsecase {
    constructor(courseRepo, bookmarkRepo) {
        this.courseRepo = courseRepo;
        this.bookmarkRepo = bookmarkRepo;
        this.exec = (input) => __awaiter(this, void 0, void 0, function* () {
            const course = yield this.courseRepo.findCourseById(input.courseId);
            if (!course)
                throw new Error("Course not found");
            yield this.bookmarkRepo.bookmarkCourse(input.courseId, input.userId);
        });
    }
}
exports.BookmarkCourseUsecase = BookmarkCourseUsecase;
//# sourceMappingURL=BookmarkCourseUsecase.js.map