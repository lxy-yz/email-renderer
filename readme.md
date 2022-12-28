## Email renderer

```sh
curl -H "Content-Type: application/json" \
    -d '{ "data": {"foo": "bar"} }' \
    http://localhost:3000/email/render/
```

An email renderer based on React ssr

---

React example showcasing many features.

For a simpler example, check out [/examples/react/](/examples/react/).

Features:

- Client Routing (+ usage of `navigate()`)
- Data Fetching (server-side fetching + isomorphic fetching)
- Pre-rendering (+ usage of the `prerender()` hook)
- Route Function
- TypeScript
- Markdown
- Error Page
- Active Links
- Access `pageContext` from any React component (using React Context)
- HTML streaming
- Page Transition Loading Animation

```bash
git clone git@github.com:brillout/vite-plugin-ssr
cd vite-plugin-ssr/examples/react-full/
npm install
npm run dev
```
