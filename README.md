# michaeljmitchell.com

Personal website for Michael J. Mitchell, Ph.D.: about, patents, publications, awards, and resume.

## Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (Extended) v0.159.1 (pinned in `.github/workflows/hugo.yml`)
- **Theme**: [hugo-goa](https://github.com/shenoydotme/hugo-goa) (git submodule in `themes/goa`)
- **Customizations**: dark/light mode toggle, defaulting to dark (`layouts/partials/header.html`, `static/css/custom.css`, `static/js/custom.js`)
- **Hosting**: GitHub Pages, with DNS and proxying through Cloudflare
- **CI/CD**: GitHub Actions (`.github/workflows/hugo.yml`)

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.159.1 or later (older versions generally build, but CI uses 0.159.1)
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

## Content Sources

Most pages are maintained elsewhere and copied or generated into this repo. Edit the source, not the copy.

| File | Source | How it gets here |
|---|---|---|
| `content/patents.md`, `intro` count in `hugo.toml` | Patent tracker in the private `patents` repo | `patent-update` skill updates and pushes automatically |
| `static/michael_mitchell_resume.pdf` | `resume/resume.md` in the private `profile` repo | Built with `resume/build.sh resume`, then copied here |
| `content/about.md`, `description` in `hugo.toml` | `bio/bios.md` in the private `profile` repo | Copied by hand |
| `content/publications.md`, `content/awards.md` | `resume/cv.md` in the private `profile` repo | Copied by hand |
| `content/projects.md` | This repo | Not linked from the menu (commented out in `hugo.toml`) |

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
├── .github/workflows/      # GitHub Actions CI/CD
├── archetypes/             # Hugo content templates
├── assets/images/          # Site images (headshot)
├── content/                # Markdown pages: about, patents, publications, awards, projects
├── layouts/partials/       # Theme overrides (header with theme toggle)
├── static/                 # Served as-is: resume PDF, custom CSS and JS
├── themes/goa/             # hugo-goa theme (git submodule)
└── hugo.toml               # Site configuration, menu, social links
```

## Related Repos

| Repo | Role |
|---|---|
| [mitchtech.net](https://github.com/mitchtech/mitchtech.net) | Blog, linked from the site menu |
| [profile](https://github.com/mitchtech/profile) (private) | Source for the resume, about text, publications, and awards |
| [patents](https://github.com/mitchtech/patents) (private) | Source for the patents page |
| [skills](https://github.com/mitchtech/skills) (private) | Agent tooling, including the `patent-update` sync |
