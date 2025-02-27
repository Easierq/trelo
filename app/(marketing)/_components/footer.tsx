import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="w-full p-4 py-3 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-2 md:w-auto hidden md:flex items-center">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
        <div className="space-x-1 md:w-auto flex md:hidden items-center">
          <Button size="sm" variant="ghost">
            Privacy
          </Button>
          <Button size="sm" variant="ghost">
            Terms
          </Button>
        </div>
      </div>
    </div>
  );
};
