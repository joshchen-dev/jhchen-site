import { describe, expect, it } from "vitest";
import { getAllPosts, getPost } from "./posts";
describe("post content", () => {
  it("sorts published posts newest first and excludes drafts", () => { const posts = getAllPosts(false); expect(posts.length).toBe(2); expect(posts[0].slug).toBe("designing-for-calm-operations"); expect(posts.every((post) => !post.draft)).toBe(true); });
  it("loads MDX content by slug", () => { const post = getPost("containers-to-kubernetes"); expect(post?.meta.title).toContain("Kubernetes"); expect(post?.content).toContain("deployment contract"); });
});
