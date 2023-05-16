---
sidebar_position: 2
---

# Retrieve a Session

How to retrieve a session in share session

## Retrieve your session

Once you've [created a session](/docs/sessions/create), you're ready to retrieve it.

Make a `GET` request to `/api/s/[session-id]`:

```shell
curl https://functions.share-session.com/api/s/some-id
```

```json title="GET Response"
{
    "id": "some-id",
    "cookies": {
        "name": "value"
    }
}
```
