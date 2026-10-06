import { describe, expect, it } from "vitest";
import { getAllPosts, getPost } from "./posts";
describe("post content", () => {
  it("excludes drafts unless asked and sorts newest first", () => { expect(getAllPosts(false).every((post) => !post.draft)).toBe(true); const all = getAllPosts(true); expect(all.some((post) => post.draft)).toBe(true); expect(all.map((post) => post.date)).toEqual([...all.map((post) => post.date)].sort().reverse()); });
  it("loads MDX content by slug", () => { const post = getPost("containers-to-kubernetes"); expect(post?.meta.title).toContain("Kubernetes"); expect(post?.content).toContain("deployment contract"); });
});
