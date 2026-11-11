---
# The profile in admin/_index.md feeds the whole site (name, role, links, bio, CV entries), but has no page
# of its own. Only the resized photos that pages actually use are published, never the originals.
build:
  render: never
  publishResources: false
cascade:
  build:
    render: never
    list: always
    publishResources: false
---
