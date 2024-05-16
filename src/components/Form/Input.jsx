import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Input({label, onChange, className, content}) {
    return <div>
      <div className="text-sm bg-black font-medium text-left py-2">
        {label}
      </div>
      <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
      <input onChange={onChange} type="text" className={`${className} px-3 -translate-x-4 pr-12 py-1 rounded bg-zinc-800`} />
      </TooltipTrigger>
              <TooltipContent side="right">
                <p>{content}</p>
              </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </div>
}
