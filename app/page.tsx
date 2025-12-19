import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button variant="outline">Click me</Button>
      <Input type="text" placeholder="Enter your name" />
    </div>
  );
}
