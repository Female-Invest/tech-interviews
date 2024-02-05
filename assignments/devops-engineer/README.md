# DevOps engineer take home assignment

For this take-home assignment, we are asking you to set up from scratch the
deployment of a small Node.js (backend) app.

You're free to choose whatever tools you prefer (git host, CI server, cloud
provider, etc.), as long as the setup satisfies the requirements detailed below.

Once you've set it up, you should share with us whatever is needed (git
repository, cloud provider credentials, etc.) so that we can evaluate the
solution.

## The app

### What it does

The app - codenamed Octopus - is a very trivial backend server that exposes a
single endpoint, `GET /info`. The endpoint returns information about the app
itself:

```
> GET /info HTTP/1.1
> Host: localhost:3000

< HTTP/1.1 200 OK
< Content-Type: application/json
<
< {
<   "name": "octopus",
<   "version": "v1.0.0",
<   "startedAt": "1970-01-01T00:00:00.000Z"
< }
```

Requests to other endpoints return a `404`.

### How to start it

Running the app requires Node.js version 18 or later.

Having Node.js installed, you can start the app by running `node octopus.js`
([link to `octopus.js`](./octopus.js)).

The app can be configured by defining the following environment variables:

- `PORT`: the TCP port the app listens on. Default value: `3000`.

## The deployment setup

### Requirements

We want a deployment setup for the app that:

- Gives us a testing environment where we can perform manual tests for changes
  we've made to the app.
- Gives us a production environment for the app.
- Automates the deployment process as much as possible .
- Allows us to roll back to previous versions of the app.
- (Bonus) Follows the infrastructure-as-code paradigm as much as possible.

### Example

- The app's code is stored in a GitHub repository.
- The app is packaged into [OCI images](https://opencontainers.org/).
- OCI images of the app are deployed to
  [Azure App Service](https://azure.microsoft.com/en-us/products/app-service).
- There's one App Service for the `testing` environment and one for the
  `production` environment.
- App Services are created using
  [Azure Resource Manager](https://azure.microsoft.com/en-us/get-started/azure-portal/resource-manager/).
- [GitHub Actions](https://github.com/features/actions) are used to automate
  deployment:
  - Whenever a git tag is pushed to the repository, a workflow builds an OCI
    image of the app and pushes it to the
    [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).
  - Whenever an image is pushed to the container registry, a workflow deploys it
    to the `testing` App Service.
  - A manually-triggered workflow allows deploying a specific OCI image of the
    app to the `production` Azure App Service.

> Note: the example above uses GitHub and Azure for the deployment setup, but
> it's just an example (we don't even use GitHub at Female Invest). For this
> assignment feel free to use whatever tools you are most comfortable working
> with.

## Your task

Your task is to _set up_ the deployment setup.

### But it's a lot of work!

It takes a long time to create even a simple deployment setup like the one in
the example above.

We really value your time and we don't want you to spend more than 4 hours on
this assignment. So, however far along you can get with it, it's OK. It will
serve as a starting point for our live interview. You can - for example - choose
to focus just on automating the deployment process, or just on automating the
creation of the required infrastructure resources. Your call.

Indeed, _we prefer_ for you to focus on just a few things and do them very well,
so you can show us your skill ceiling.

### Evaluation criteria

The scope of the task is broad and our evaluation criteria vary based on what
part of the task you chose to focus on. To give you an idea, here's a
non-exhaustive and randomly-sorted list of questions we'll ask ourselves when
reviewing your assignment.

- Deployment process:
  - Does is satisfy requirements?
  - What are its weak and strong points?
  - What compromises does it make?
- Infrastructure resources:
  - How are they named? Are names understandable and consistent?
  - How are they created? Manually or automatically from code / configuration
    files?
- Code and configuration files (for infrastructure, CI/CD, etc.):
  - Where are they kept?
  - How are they written? (E.g.: _neatly and with useful comments_ **vs**
    _semi-randomly copied from examples on the internet with lots of commented
    out sections_.)
- Deployment process automation:
  - How automated is it?
  - Are there manual steps? Ideally, can they (and should they) be automated?

Again, we don't expect your solution to be perfect on all the above aspects. On
the contrary. It's completely normal if, for example, you tell us _"I just
focused on deployment automation, but resources are created manually"_.
