# Claude Commands

## pr - Pull Request Management
Create and manage pull requests with optional auto-merge.
Run project tests and build processes to verify no compilation errors exist, if successful then git add all changes, commit with an informative message following conventional commit format, push to a new feature branch (create if doesn't exist), finally create a pull request with appropriate title, description, and any relevant labels or reviewers

## Plan project tests to verify functionality
- Run build process to check for compilation errors
- Add all changes to git staging
- Create commit with conventional commit message
- Push to feature branch
- Create pull request with description

### Usage
```
bash
claude pr [-m|--merge] [-msg|--message 'description']
```

<!-- ##  Merge pull request to main branch
     ☐ Merge pull request to main branch
     ☐ Switch to main branch locally
     ☐ Pull latest changes from main
     ☐ List and delete all local branches except main
     ☐ Delete remote branches -->

