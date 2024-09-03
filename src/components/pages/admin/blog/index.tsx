"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { MDXEditorMethods } from "@mdxeditor/editor";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import FcForwardRefEditor from "@/components/pages/admin/blog/mdx-editor";

import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IBlog } from "@/constants/types";

interface Props {
  blogId: string;
  blogData: IBlog;
}

const BlogEditor = ({ blogId, blogData }: Props) => {
  // MDX Ref
  const ref = useRef<MDXEditorMethods>(null);

  // Utility
  const { toast } = useToast();
  const router = useRouter();

  const handleSaveUpdate = async () => {
    // Get the updated data
    const blogArticle = ref.current?.getMarkdown();

    if (blogId !== "new-blog") {
      // Update existing blog
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/blog`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ blogArticle: blogArticle }),
        },
      );
      const data = await response.json();
      toast({
        description: data.message,
      });
      router.refresh();
    } else {
      // Create new blog
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ blogArticle: blogArticle }),
        },
      );
      const data = await response.json();
      toast({
        description: data.message,
      });
      router.push("/admin/blog");
      router.refresh();
    }
  };

  const handleDelete = async () => {
    if (blogId) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/blog`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogId: blogId,
          }),
        },
      );
      const data = await response.json();
      toast({
        description: data.message,
      });
      router.push("/admin/blog");
      router.refresh();
    }
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="mb-8 flex w-screen flex-col items-center gap-4 md:w-full">
        {/* MDX Editor*/}
        <FcForwardRefEditor
          ref={ref}
          markdown={blogData.article}
          contentEditableClassName=" "
          className=""
        />
        <div className="flex flex-row gap-4">
          {/* Save blog */}
          <Button onClick={handleSaveUpdate}>Save</Button>
          {/* Delete blog */}
          <Dialog>
            <DialogTrigger className="h-9 rounded-md bg-primary px-4 text-white">
              Delete
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the
                  blog from the Database.
                </DialogDescription>
                <Button onClick={handleDelete}>Sure</Button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Suspense>
  );
};

export default BlogEditor;
