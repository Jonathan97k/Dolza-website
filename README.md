# Dolza Website

Static site for Dolza Real Properties & Estate Agency.

How to push to GitHub:

1. Initialize git and commit locally:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: add website"
   ```

2. Create a repository on GitHub (see options below) and add the remote:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. Share the repository URL with the owner so they can review.

Options to create the remote repo:
- Create a new repo at https://github.com/new (web UI).
- Or use GitHub CLI: `gh repo create <repo-name> --public --source=. --remote=origin --push` (requires `gh` and login).

Contact: GitHub user `Kaphiri` (owner) will be able to review after you push.
