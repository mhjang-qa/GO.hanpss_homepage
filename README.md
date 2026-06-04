# GO Hanpass Homepage

Static landing page for `https://go.hanpass.com/`.

## Preview

- Repository: https://github.com/mhjang-qa/GO.hanpss_homepage
- Active HTML preview: https://htmlpreview.github.io/?https://github.com/mhjang-qa/GO.hanpss_homepage/blob/main/index.html
- GitHub Pages URL after enabling Pages from `main` / root: https://mhjang-qa.github.io/GO.hanpss_homepage/

GitHub Pages setup: Settings > Pages > Build and deployment > Source: `Deploy from a branch`, Branch: `main`, Folder: `/root`.

## Routing

- `/` serves the GO Hanpass landing page.
- `/pc-guard` must remain handled by the existing production route/upstream. This project does not create or overwrite a `/pc-guard` file so that deployment routing can keep the current service isolated.

## Local QA

```sh
python3 -m http.server 8097
```

Open `http://127.0.0.1:8097/`.

## Rollback

Remove the files added in this directory or restore the previous deployment artifact for the root route. No `/pc-guard` asset is modified by this implementation.
