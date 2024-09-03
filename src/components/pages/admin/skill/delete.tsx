"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SkillDelete = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [inputData, setInputData] = useState("");

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/skill`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: inputData }),
        },
      );

      const result = await response.json();
      toast({
        description: result.message,
      });

      router.refresh();
    } catch (error) {
      toast({
        description: "Failed to delete skill.",
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <span className="text-xl">Delete Skill</span>
      <div className="space-y-6">
        <Input
          placeholder="Name"
          name="delete"
          onChange={(e) => setInputData(e.target.value)}
        />

        <Button type="submit" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SkillDelete;
