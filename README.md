# GO Hanpass Homepage

Static landing page for `https://go.hanpass.com/`.

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
