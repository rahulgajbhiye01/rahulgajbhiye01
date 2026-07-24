declare module "remark-gfm" {
  // The plugin is loaded at runtime by next-mdx-remote; its full unified type
  // is intentionally not needed by this small application.
  const remarkGfm: any;

  export default remarkGfm;
}
