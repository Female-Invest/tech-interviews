# Full-stack engineer take home assignment

For this take-home assignment, we are asking you to write a small mobile
application implementing the project described below.

The app should:

- Be written in TypeScript.
- Use React Native.
- Use Node.js for the backend.

Other than that, you're free to choose whatever tools and libraries you prefer.

Once you've written the app, you should share with us its source code - in one
way or another.

## The project

### Context

One of Female Invest's core offering is a Learning Management System (LMS) that
allows Female Invest customers to learn about investing, personal finance, and
other related topics.

Currently, the Female Invest LMS is based on an off-the-shelf product. While
this product has allowed the company in its early stages to quickly deliver a
learning platform to its customers, the product has many limitations and is
starting to hamper Female Invest's ambitions.

For this reason, Female Invest has decided to build a fully-custom, in-house
replacement. Female Invest are focusing on their mobile app, so the LMS will
primarily be accessed via mobile.

### Requirements

Work on the new LMS - codenamed Octopus - has begun. The UX team has produced
and sent you, the developer, the following mockup for the first screen of the
app.

![](./images/courses-page.png)

The mockup shows the courses page, the main page the user lands on when they log
into the LMS.

#### Courses

The **course** is the main entity the LMS: it's a learning program that teaches
the user about a particular subject, for example how to start investing. The
teaching material of the course is split across lessons, and the course itself
has some information attached that describe it. That information is summarized
in the course card shown in the mockup. Let's take a closer look at it.

![](./images/course-card-explained.png)

From the mockup we can identify UI elements displaying various bits of
information:

1. The course title.
2. The number of lessons in the course.
3. The estimated time of completion for the course. (I.e.: an estimate for how
   long a user will take to go through the course.)
4. The course cover image.
5. The user completion percentage. When a user starts going through a course,
   the LMS tracks the progress of the user and shows in this box the completed
   percentage.
6. A bookmarked icon that shows whether the user has bookmarked the course or
   not. In this case the user has bookmarked the course.

#### Courses page

Let's also analyze the courses page in more detail.

![](./images/course-page-explained.png)

1. The top half of the page shows a list of courses the user has started, but
   not completed.
2. The bottom half of the page shows a list of courses the user has not started.
3. As Female Invest has a lot of courses in its offering, these lists can be
   infinite-scrolled (horizontally) to load more courses.
4. Clicking on a course directs the user to the _"course player"_ page, where
   they can continue going through the course. The course player page has not
   been mocked-up by the UX team yet, so you don't need to build it for now.

#### My Courses page

The UX team as also sent an early design of a screen where the user can bookmark
courses and save for later.

![](./images/my-courses-page.png)

The thoughts behind this screen are very simple. When a user bookmarks a course,
it will appear in the **My Courses** section.

### Your task

Your task is to implement the courses screens in the mockup.

#### But it's a lot of work!

Even a single screen with a couple of simple lists can take a long time to code
properly. First of all you need to set up the frontend, the backend, and the
database. Then you have to model the domain, define an API, implement it, write
tests... If one wanted to make it production-ready, it could easily take a
couple of weeks.

Of course, we don't expect you to work that much! We really value your time and
we don't want you to spend more than 4 hours on this assignment. However far
along you can get, it's OK, and will serve as a starting point for our live
interview.

We have started the work of a very simple and lightweight backend
[server](./server/). The server can not yet fully serve the needs of the designs
yet, so you will probably have to extend some functionality in case you go down
that route. The position is a full stack engineer and we therefore expect you to
be able to work on the backend as well.

With that being said you can choose to focus on a few elements. This is your
change to show off your skills, so whether that's implementing a killer UI,
setting up a strong state management system or even spend all your time on a
kick-ass project setup, it will be a valid solution.

To reiterate, _we prefer_ for you to focus on just a few things and do them very
well, so you can show us your skill ceiling.

### Evaluation criteria

The scope of the task is broad and our evaluation criteria vary based on what
part of the task you chose to focus on. To give you an idea, here's a
non-exhaustive and randomly-sorted list of questions we'll ask ourselves when
reviewing your assignment.

- Frontend:
  - How are components organized? How are responsibilities split among them? Do
    components have a clear API?
  - What state management patterns are used?
- Backend:
  - How are the entities and operations exposed by the API modelled? Is the API
    documented?
  - Does the backend follow some architectural pattern? How are responsibilities
    split among the various parts of the codebase?
  - How is the database structured? How is it accessed?
- General:
  - Is naming consistent throughout the project? How about files and folders
    structure?
  - Are things tested? How?

Again, we don't expect your solution to be perfect on all the above aspects. On
the contrary. It's completely normal if, for example, you tell us _"I only
implemented a single screen of the mobile app, and instead put all my effort on
the configuration and testing of the project."_.
