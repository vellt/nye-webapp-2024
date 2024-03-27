# University of Nyíregyháza - Project based web application development - mid-exam 2024

## Necessary tools
- [NodeJS 20](https://nodejs.org/en)
- Yarn (recommended, but optional): `npm install -g yarn`
- Github account
- Code editor with TypeScript support

## Install
Clone git repository-t on your own machine  
`git clone [repository-url]`  
SSH usage is suggested

Run the following command in command line:  
`yarn install` or `npm install`

## Tasks
The description of each task can be found within its `src` directory.
If you want to test your whole code run the following command:  
`yarn test` or `npm run test`
This run for every test including ones not resolved yet.

If you want to try out a specific test group use the command below (example):
`npx jest -t "task-01"`

To check the results for only one test case (example): 
`npx jest -t "task-01 should return with the sum of numbers within an array"`  

### Acceptance criteria
1. You need **at least 35 points** to pass the exam. You can choose which you would like to solve:
    1. easy level: 5 points (task-01, task-02)
    2. medium level: 10 points (task-03, task-04)
    3. hard level: 20 points (task-05)
2. Only the body of the function can be modified
3. The types and number of parameters cannot be modified, but you can use destruction form (eg. `searchParams: SearchParams` => `{ query, limit }: SearchParams`)
4. The type of parameters and return value can help you
5. You're not allowed to change unit tests (*.spec.ts files) - only exception if you **DON'T** want to complete one of these.
    - In this case change the `describe` command in the test file to `describe.skip`
    - eg.: task-03.spec.ts: `describe('task-03', () => {` => `describe.skip('task-03', () => {`
6. One task is accepted if the unit test run for your solution without any issue.
7. Third party libraries or codes are prohibited, package.json and yarn.lock are not allowed to be modified.
8. Medium or hard tasks will be checked for plagiarism; every affected people will be asked out.

## Submission - due date: 25th of March, 2024 - 08:00:00
You can submit your solution via GitHub in a Pull request.

1. Create a Fork of this repository into your own namespace.
2. Create a branch from `main` branch in the following form: `{NEPTUN-CODE}/{firstname-lastname}` (without braces, eg. `ABC123/laszlo-bela-toth`) and checkout this branch
3. Modify the tasks you want solve
4. After you finished, create a commit using `git commit -m "task-01, task-04, task-05"`; the message is expected to contain the resolved items
5. `git push origin {sajat-branch-ed}` paranccsal küldd fel a repository-ba
6. Create a pull request from your branch to the `main`. The title of the pull request is expected to be the same as the name of the branch
7. Direct commit is prohibited, it means automatic fail
8. Send an email to **jozsef_gal@epam.com** and **vegera.jozsef@nye.hu** containing your name, Neptun code and the URL of the pull request
8. **Deadlines:**  
     - Full-time students: **25th of March, 2024 - 08:00:00**. Evaluation till 31st of March, 2024.  
     - Corrspondance students: **7th of April, 2024. - 08:00:00**. Evaluation till 14th of April, 2024.

The solution won't be accepted if any the rules are broken.