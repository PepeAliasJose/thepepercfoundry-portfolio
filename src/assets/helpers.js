//Report function
export async function runReport () {
  const todayMS = Date.parse(new Date())
  const lastMonth = todayMS - 2629746000

  const todayFormat = new Date(todayMS).toISOString().split('T')[0]
  const lastMonthFormat = new Date(lastMonth).toISOString().split('T')[0]

  const response = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${
      import.meta.env.VITE_PROPERTY_ID
    }:runRealtimeReport`,
    {
      method: 'POST',
      headers: {
        'x-goog-user-project': import.meta.env.VITE_PROJECT_ID,
        'Content-Type': 'application/json'
      },
      body: {
        dateRanges: [
          {
            startDate: lastMonthFormat,
            endDate: 'today'
          }
        ],
        dimensions: [
          {
            name: 'country'
          }
        ],
        metrics: [
          {
            name: 'activeUsers'
          }
        ]
      }
    }
  )

  return response
}
