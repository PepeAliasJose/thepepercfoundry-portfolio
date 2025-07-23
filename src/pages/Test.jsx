function Test () {
  return (
    <>
      <header></header>
      <main className='p-5  '>
        <div className='flex flex-wrap gap-3'>
          <div className='up px-10 py-2 w-fit content-center'>Hola</div>
          <div className='up out-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='up in-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='down out-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='down in-rounded px-10 py-2 w-fit content-center'>
            Hola
          </div>
          <div className='up p-1 backdrop-blur-sm max-w-32'>
            <div className='down px-10 py-2 w-fit' style={{ borderRadius: 21 }}>
              Hola Hola Hola Hola
            </div>
          </div>
        </div>

        <div className='w-xl h-96'>
          <div
            data={{
              labels: ['Mayo', 'Junio', 'Julio'],
              datasets: [
                {
                  label: 'Miles de usuarios mensuales',
                  data: [21, 15, 16],
                  fill: true,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0
                },
                {
                  label: 'Coste mensual',
                  data: [21, 10, 1],
                  fill: true,
                  borderColor: 'rgb(192, 75, 192)',
                  tension: 0
                }
              ]
            }}
          />
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default Test
