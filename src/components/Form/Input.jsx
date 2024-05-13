import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Input({label, placeholder, onChange, className, TooltipContent}) {
    return <div>
      <div className="text-sm bg-black font-medium text-left py-2">
        {label}
      </div>
      <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
      <input onChange={onChange} placeholder={placeholder} className={`${className} px-2 py-1 rounded bg-zinc-800`} />
      </TooltipTrigger>
              <TooltipContent side="right">
                <p>{TooltipContent}</p>
              </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </div>
}
