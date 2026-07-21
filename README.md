# anesiadkon.github.io

Personal site for Konstantinos Anesiadis — Data Scientist and Research
Collaborator at the National Center for Scientific Research "Demokritos".

Live at **<https://anesiadkon.github.io>**.

## Layout

| File | Purpose |
| --- | --- |
| `index.html` | Landing page — role summary and links out |
| `dashboards.html` | Looker Studio report embeds, tabbed |
| `contact.html` | Email and LinkedIn |
| `404.html` | Styled not-found page |
| `styles.css` | All shared styling |
| `favicon.svg` | Monogram favicon |
| `robots.txt`, `sitemap.xml` | Crawler hints |

There is no build step, no dependencies, and no JavaScript outside the small
inline tab controller in `dashboards.html`. Roboto is loaded from Google Fonts;
everything else is self-contained.

## Local preview

Any static file server works. From the repo root:

```sh
python -m http.server 8000
```

Then open <http://localhost:8000>.

Prefer this over opening the files directly — `file://` won't resolve the
root-relative link on the 404 page, and the Looker Studio embeds behave
differently outside an HTTP origin.

## Deployment

GitHub Pages serves the `main` branch automatically. Pushing to `main` publishes;
there is no workflow to wait on.

## Notes

- The `dashboards.html` embeds rely on each Looker Studio report being shared as
  viewable by anyone with the link. An embed URL is not an access control — if a
  report should be private, unshare it rather than relying on the URL being
  obscure.
- Tab labels in `dashboards.html` are still generic (`Display 1`, `Display 2`).
