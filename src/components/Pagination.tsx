import { Button } from "@/components/ui/button";

export default function Pagination({ currentPage, totalPages, onPageChange }: { 
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }) {
    return (
      <div className="flex justify-center gap-2 my-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? 'default' : 'outline'}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    );
  }