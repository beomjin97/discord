import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const state = false;

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Discord</p>;
      <Button className={cn("bg-indigo-500", state && "bg-red-500")}>
        Click me
      </Button>
    </div>
  );
}
