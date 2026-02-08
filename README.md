# michaeljmitchell.com

Personal website for Michael J. Mitchell, Ph.D.

## Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (Extended) v0.155.2
- **Theme**: [hugo-goa](https://github.com/shenoydotme/hugo-goa) (git submodule in `themes/goa`)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions (`.github/workflows/hugo.yml`)

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.155.2 or later
- Git

### Setup

```bash
# Clone the repo with the theme submodule
git clone --recurse-submodules git@github.com:mitchtech/michaeljmitchell.com.git
cd michaeljmitchell.com

# If already cloned without submodules, initialize them
git submodule update --init --recursive
```

### Run locally

```bash
hugo server -D
```

The site will be available at `http://localhost:1313/`.

### Build for production

```bash
hugo --minify
```

Output is written to the `public/` directory.

## Deployment

Deployment is fully automated via GitHub Actions. Pushing to the `main` branch triggers a build and deploy to GitHub Pages.

To deploy manually from the GitHub Actions tab, use the "Run workflow" button on the **Deploy Hugo site to Pages** workflow.

## Updating the Theme

The `hugo-goa` theme is managed as a git submodule. To update it:

```bash
cd themes/goa
git fetch origin
git checkout origin/master
cd ../..
git add themes/goa
git commit -m "Update hugo-goa theme to latest"
git push
```

## Project Structure

```
.
├── .github/workflows/   # GitHub Actions CI/CD
├── archetypes/           # Hugo content templates
├── assets/images/        # Site images (headshot, etc.)
├── content/              # Markdown content pages
├── static/               # Static files served as-is (resume PDF)
├── themes/goa/           # hugo-goa theme (git submodule)
└── hugo.toml             # Hugo site configuration
```
