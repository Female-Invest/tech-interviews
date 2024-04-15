# Mobile engineer take home assignment

For this take-home assignment, we are asking you to write a small mobile
application implementing the project described below.

The app should:

- Be written in TypeScript.
- Use React Native.

Other than that, you're free to choose whatever tools and libraries you prefer.

Once you've written the app, you should share with us its source code, preferably on Github.

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

Besides learning, Female Invest also wants to offer a social experience to its users.
Therefore, the new app will have a strong focus on community features, such as browsing
posts, liking them and so on.

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

#### Community page

The UX team has also sent a design mockup of the community page. This page will be
used to show posts from other users, and allow the user to interact with them.
For now, the only interaction available is to like a post.

When the user likes a post,
a filled heart icon will appear on the post and there should be haptic feedback when the user presses the icon.
Otherwise, the heart icon will be outlined,
with a transparent background color.

![](./images/community.png)

You might have noticed that the community functionality is not yet implemented on the backend.
Feel free to mock necessary endpoints on the frontend for this functionality.

The mocked endpoint should return at least 10 posts per page, and the feed should have an infinite scroll,
meaning that when the user reaches the bottom of the page, the next page of posts should be loaded.

### Your task

Your task is to implement home screen, my courses, and community screens based on given mockups.

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
yet, so you are free to extend some functionality in case you go down
that route. However, since this is a case in which we will mostly evaluate your front-end coding skills, we don't expect
you to extend the server-side functionalities.
Therefore, any missing endpoints can be mocked on the frontend if you're more comfortable with that.

### Evaluation criteria

The scope of the task is broad and our evaluation criteria vary based on what
part of the task you chose to focus on. To give you an idea, here's a
non-exhaustive and randomly-sorted list of questions we'll ask ourselves when
reviewing your assignment.

- Frontend:
    - How are components organized? How are responsibilities split among them? Do
      components have a clear API?
    - What state management patterns are used?
- General:
    - Is naming consistent throughout the project? How about files and folders
      structure?
    - Are things tested? How?
