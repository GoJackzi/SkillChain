import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function MarketplaceFilters() {
  const categories = ["Development", "Design", "Marketing", "Writing", "Blockchain"]
  const durations = ["Less than 1 month", "1-3 months", "3-6 months", "6+ months"]

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Budget Range</Label>
          <Slider defaultValue={[2000, 10000]} max={20000} step={500} className="mt-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$2,000</span>
            <span>$10,000</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold">Category</Label>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label htmlFor={category} className="text-sm text-foreground cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold">Project Duration</Label>
          {durations.map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox id={duration} />
              <label htmlFor={duration} className="text-sm text-foreground cursor-pointer">
                {duration}
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold">Client Status</Label>
          <div className="flex items-center space-x-2">
            <Checkbox id="verified" defaultChecked />
            <label htmlFor="verified" className="text-sm text-foreground cursor-pointer">
              Verified Only
            </label>
          </div>
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  )
}
