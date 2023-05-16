---
sidebar_position: 1
---

# Create a Session

How to create a session in share session

## Create your first Session

Make a `POST` request to `/api/s`:

```shell
curl -X POST https://functions.share-session.com/api/s --data '{ "cookies": { "name": "value" } }'
```

```json title="POST Response"
{
    "id": "some-id",
    "cookies": {
        "name": "value"
    }
}
```
