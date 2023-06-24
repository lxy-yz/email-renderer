## Email renderer

```sh
curl -H "Content-Type: application/json" \
    -d '{ "data": {"foo": "bar"} }' \
    http://localhost:3000/email/render/
```

An email renderer based on React ssr
